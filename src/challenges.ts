// TODO: Currently only major chords.
export const challenges: Challenge[] = [
  {
    noteNames: [
      'A',
      'C#',
      'E',
    ],
    triadName: 'A',
  },
  {
    noteNames: [
      'A#',
      'D',
      'F',
    ],
    triadName: 'A#',
  },
  {
    noteNames: [
      'B',
      'D#',
      'F#',
    ],
    triadName: 'B',
  },
  {
    noteNames: [
      'C',
      'E',
      'G',
    ],
    triadName: 'C',
  },
  {
    noteNames: [
      'C#',
      'F',
      'G#',
    ],
    triadName: 'C#',
  },
  {
    noteNames: [
      'D',
      'F#',
      'A',
    ],
    triadName: 'D',
  },
  {
    noteNames: [
      'D#',
      'G',
      'A#',
    ],
    triadName: 'D#',
  },
  {
    noteNames: [
      'E',
      'G#',
      'B',
    ],
    triadName: 'E',
  },
  {
    noteNames: [
      'F',
      'A',
      'C',
    ],
    triadName: 'F',
  },
  {
    noteNames: [
      'F#',
      'A#',
      'C#',
    ],
    triadName: 'F#',
  },
  {
    noteNames: [
      'G',
      'B',
      'D',
    ],
    triadName: 'G',
  },
  {
    noteNames: [
      'G#',
      'C',
      'D#',
    ],
    triadName: 'G#',
  },
]

export interface Challenge {
  noteNames: string[]
  triadName: string
}
