import { difference, isEmpty, last, map } from 'ramda'
import { convertNameToNoteId, convertNoteIdToName } from './midi-notes'
import { ACTIVE_NOTE_TIMEOUT } from './constants'
import { challenges } from './challenges'
import { randomChoice } from './utils'

// TODO: Split into subclasses: ChallengeStorage, NotesStorage, logger

export class NoteMatcher {
  activeNotes: ActiveNote[]
  expectedNoteIds: number[]

  constructor () {
    this.activeNotes = []
    this.expectedNoteIds = []

    this.reset()
  }

  recordNote (id: number): void {
    console.log('Played:', convertNoteIdToName(id))

    // Check for when the last note was played
    // and clean the storage if it was played
    // a while ago (player did a pause).
    if (this.isStorageOld()) {
      console.log('- You have waited too long -')
      this.reset()
    }

    const note: ActiveNote = {
      id,
      playedAt: Date.now(),
    }

    this.activeNotes.push(note)

    // There is a full triad. Validate
    // if it matches the expected triad.
    if (this.activeNotes.length === 3) {
      this.validateChord()
    }
  }

  isStorageOld () {
    const lastNote = last(this.activeNotes)
    if (!lastNote) return false

    const now = Date.now()
    return now - lastNote.playedAt >= ACTIVE_NOTE_TIMEOUT
  }

  validateChord () {
    // Doing this is neccessary to "normalize" note IDs
    // and allow the same notes being played on multiple
    // octaves.
    const activeNotesId = map(
      (activeNote) => {
        const name = convertNoteIdToName(activeNote.id)
        return convertNameToNoteId(name)
      },
      this.activeNotes,
    )
    // Check for the difference between played and expected notes.
    // "R.difference()" in that case will exclude wrongly played
    // notes, and check if "activeNotes" contains all items from
    // "expectedNotes" notes.
    const playedDiff = difference(this.expectedNoteIds, activeNotesId)

    console.log('--------------------')
    if (!isEmpty(playedDiff)) {
      const expectedNotes = map(convertNoteIdToName, this.expectedNoteIds)
      // Some notes were wrong.
      console.log('Some notes were played wrong!')
      console.log('Expected:', expectedNotes)
    } else {
      console.log('Correct!')
    }
    console.log('--------------------')

    this.reset()
  }

  reset () {
    this.activeNotes = []
    this.createChallenge()
  }

  createChallenge () {
    const challenge = randomChoice(challenges)
    const { noteNames: expectedNotes, triadName } = challenge

    this.expectedNoteIds = map(convertNameToNoteId, expectedNotes)

    console.log('Challenge is: ', triadName)
  }
}

export interface ActiveNote {
  playedAt: number
  id: number
}
