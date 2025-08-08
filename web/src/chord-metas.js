// NOTE: Must be in order from top to right, clockwise.
export const majorChordMetas = [
  {
    noteNames: [ 'C', 'E', 'G' ],
    triadName: 'C',
  },
  {
    noteNames: [ 'G', 'B', 'D' ],
    triadName: 'G',
  },
  {
    noteNames: [ 'D', 'F#', 'A' ],
    triadName: 'D',
  },
  {
    noteNames: [ 'A', 'C#', 'E' ],
    triadName: 'A',
  },
  {
    noteNames: [ 'E', 'G#', 'B' ],
    triadName: 'E',
  },
  {
    noteNames: [ 'B', 'D#', 'F#' ],
    triadName: 'B',
  },
  {
    noteNames: [ 'F#', 'A#', 'C#' ],
    triadName: 'F#',
  },
  {
    noteNames: [ 'C#', 'F', 'G#' ],
    triadName: 'C#',
  },
  {
    noteNames: [ 'G#', 'C', 'D#' ],
    triadName: 'G#',
  },
  {
    noteNames: [ 'D#', 'G', 'A#' ],
    triadName: 'D#',
  },
  {
    noteNames: [ 'A#', 'D', 'F' ],
    triadName: 'A#',
  },
  {
    noteNames: [ 'F', 'A', 'C' ],
    triadName: 'F',
  },
]

export const minorChordMetas = [
  {
    noteNames: [ 'A', 'C', 'E' ],
    triadName: 'Am',
  },
  {
    noteNames: [ 'E', 'G', 'B' ],
    triadName: 'Em',
  },
  {
    noteNames: [ 'B', 'D', 'F#' ],
    triadName: 'Bm',
  },
  {
    noteNames: [ 'F#', 'A', 'C#' ],
    triadName: 'F#m',
  },
  {
    noteNames: [ 'C#', 'E', 'G#' ],
    triadName: 'C#m',
  },
  {
    noteNames: [ 'G#', 'B', 'D#' ],
    triadName: 'G#m',
  },
  {
    noteNames: [ 'D#', 'F#', 'A#' ],
    triadName: 'D#m',
  },
  {
    noteNames: [ 'A#', 'C#', 'F' ],
    triadName: 'A#m',
  },
  {
    noteNames: [ 'F', 'G#', 'C' ],
    triadName: 'Fm',
  },
  {
    noteNames: [ 'C', 'D#', 'G' ],
    triadName: 'Cm',
  },
  {
    noteNames: [ 'G', 'A#', 'D' ],
    triadName: 'Gm',
  },
  {
    noteNames: [ 'D', 'F', 'A' ],
    triadName: 'Dm',
  },
]

export const chordMetas = [
  ...majorChordMetas,
  ...minorChordMetas,
]
