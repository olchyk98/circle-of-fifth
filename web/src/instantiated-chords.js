import { Chord } from './chord'
import { majorChordMetas, minorChordMetas } from './chord-metas'

function initiateChords () {
  return [
    // Outer
    ...majorChordMetas.map((meta, index) => (
      new Chord({
        chord: meta.triadName,
        placement: 'outer',
        angle: 360/12*index,
      })
    )),

    // Inner
    ...minorChordMetas.map((meta, index) => (
      new Chord({
        chord: meta.triadName,
        placement: 'inner',
        angle: 360/12*index,
      })
    )),
  ]
}

export const instantiatedChords = initiateChords()
