import { chordMetas } from './chord-metas'
import { choice, difference } from './helpers'
import { getMIDIInput } from './get-midi-input'
import { midiToName } from './midi-notes'

export const CHALLENGE_REFRESH_DURATION = 1 * 1000 // 1s

export class MIDIManager {
  static playingNotes = new Set()
  static playingChord = null
  static currentChallenge = null
  static challengePendingSince = null
  static midiInput = null
  static initialized = false

  /**
   * Initializes the MIDIManager by requesting MIDI input
   * access from the user’s device.
   *
   * - Establishes a connection to the available MIDI input device.
   * - Binds event listeners for note-on and note-off messages.
   * - Sets the system as initialized and triggers the first random challenge.
   */
  static setup () {
    getMIDIInput()
      .then((input) => {
        this.midiInput = input
        this.bindEvents()
        this.initialized = true
      })
      .catch((error) => {
        console.error(error)
        alert('Could not get MIDI access. Check your browser settings.')
      })
  }

  /**
   * Binds MIDI event listeners for note-on and note-off events.
   *
   * - Converts incoming MIDI note numbers into note names.
   * - Maintains the `playingNotes` set to reflect current active notes.
   * - Automatically recalculates the currently recognized chord after each change.
   */
  static bindEvents () {
    this.midiInput.addListener('noteon', (e) => {
      const note = midiToName(e.note.number)
      this.playingNotes.add(note)
      this.computePlayingChord()
    })
    this.midiInput.addListener('noteoff', (e) => {
      const note = midiToName(e.note.number)
      this.playingNotes.delete(note)
      this.computePlayingChord()
    })
  }

  /**
   * Computes the currently played chord based on active notes.
   *
   * - If 3+ notes are playing, attempts to match them to a known chord shape.
   * - Uses chord metadata to identify a matching triad.
   * - Updates `playingChord` with the detected chord name, or `null` if no match is found.
   */
  static computePlayingChord () {
    this.playingChord = null
    const playingNotes = Array.from(this.playingNotes)
    if (playingNotes.length < 3) return
    const activeChordMeta = chordMetas.find((chordMeta) => (
      difference(chordMeta.noteNames, playingNotes).length <= 0
    ))
    if (activeChordMeta == null) return
    this.playingChord = activeChordMeta.triadName
    if (this.playingChord === this.currentChallenge?.triadName && !this.challengePendingSince) {
      this.challengePendingSince = Date.now()
      setTimeout(() => {
        this.challengePendingSince = null
        this.randomizeChallenge()
      }, CHALLENGE_REFRESH_DURATION)
    }
  }

  /**
   * Randomizes the next challenge for the player.
   */
  static randomizeChallenge () {
    if (this.challengePendingSince != null) return
    this.currentChallenge = choice(chordMetas)
  }

  /**
   * Disables currently playing challenge.
   * */
  static disableChallenge () {
    this.currentChallengeSince = null
    this.currentChallenge = null
  }
}

