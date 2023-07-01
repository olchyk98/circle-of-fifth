import { find } from 'ramda'

export const midiNotes = [
  { noteId:12, name:'C' },
  { noteId:13, name:'C#' },
  { noteId:14, name:'D' },
  { noteId:15, name:'D#' },
  { noteId:16, name:'E' },
  { noteId:17, name:'F' },
  { noteId:18, name:'F#' },
  { noteId:19, name:'G' },
  { noteId:20, name:'G#' },
  { noteId:21, name:'A' },
  { noteId:22, name:'A#' },
  { noteId:23, name:'B' },
  { noteId:24, name:'C' },
  { noteId:25, name:'C#' },
  { noteId:26, name:'D' },
  { noteId:27, name:'D#' },
  { noteId:28, name:'E' },
  { noteId:29, name:'F' },
  { noteId:30, name:'F#' },
  { noteId:31, name:'G' },
  { noteId:32, name:'G#' },
  { noteId:33, name:'A' },
  { noteId:34, name:'A#' },
  { noteId:35, name:'B' },
  { noteId:36, name:'C' },
  { noteId:37, name:'C#' },
  { noteId:38, name:'D' },
  { noteId:39, name:'D#' },
  { noteId:40, name:'E' },
  { noteId:41, name:'F' },
  { noteId:42, name:'F#' },
  { noteId:43, name:'G' },
  { noteId:44, name:'G#' },
  { noteId:45, name:'A' },
  { noteId:46, name:'A#' },
  { noteId:47, name:'B' },
  { noteId:48, name:'C' },
  { noteId:49, name:'C#' },
  { noteId:50, name:'D' },
  { noteId:51, name:'D#' },
  { noteId:52, name:'E' },
  { noteId:53, name:'F' },
  { noteId:54, name:'F#' },
  { noteId:55, name:'G' },
  { noteId:56, name:'G#' },
  { noteId:57, name:'A' },
  { noteId:58, name:'A#' },
  { noteId:59, name:'B' },
  { noteId:60, name:'C' },
  { noteId:61, name:'C#' },
  { noteId:62, name:'D' },
  { noteId:63, name:'D#' },
  { noteId:64, name:'E' },
  { noteId:65, name:'F' },
  { noteId:66, name:'F#' },
  { noteId:67, name:'G' },
  { noteId:68, name:'G#' },
  { noteId:69, name:'A' },
  { noteId:70, name:'A#' },
  { noteId:71, name:'B' },
  { noteId:72, name:'C' },
  { noteId:73, name:'C#' },
  { noteId:74, name:'D' },
  { noteId:75, name:'D#' },
  { noteId:76, name:'E' },
  { noteId:77, name:'F' },
  { noteId:78, name:'F#' },
  { noteId:79, name:'G' },
  { noteId:80, name:'G#' },
  { noteId:81, name:'A' },
  { noteId:82, name:'A#' },
  { noteId:83, name:'B' },
  { noteId:84, name:'C' },
  { noteId:85, name:'C#' },
  { noteId:86, name:'D' },
  { noteId:87, name:'D#' },
  { noteId:88, name:'E' },
  { noteId:89, name:'F' },
  { noteId:90, name:'F#' },
  { noteId:91, name:'G' },
  { noteId:92, name:'G#' },
  { noteId:93, name:'A' },
  { noteId:94, name:'A#' },
  { noteId:95, name:'B' },
  { noteId:96, name:'C' },
  { noteId:97, name:'C#' },
  { noteId:98, name:'D' },
  { noteId:99, name:'D#' },
  { noteId:100, name:'E' },
  { noteId:101, name:'F' },
  { noteId:102, name:'F#' },
  { noteId:103, name:'G' },
  { noteId:104, name:'G#' },
  { noteId:105, name:'A' },
  { noteId:106, name:'A#' },
  { noteId:107, name:'B' },
  { noteId:108, name:'C' },
  { noteId:109, name:'C#' },
  { noteId:110, name:'D' },
  { noteId:111, name:'D#' },
  { noteId:112, name:'E' },
  { noteId:113, name:'F' },
  { noteId:114, name:'F#' },
  { noteId:115, name:'G' },
  { noteId:116, name:'G#' },
  { noteId:117, name:'A' },
  { noteId:118, name:'A#' },
  { noteId:119, name:'B' },
] as const

export interface MIDINote {
  name: (typeof midiNotes)[number]['name']
  noteId: (typeof midiNotes)[number]['noteId']
}

export const convertNameToNoteId = (name: string): number => {
  const note = find((l) => l.name === name, midiNotes)

  if (!note) {
    console.log(`Could not recognize note by name: ${name}`)
    throw new Error()
  }

  return note.noteId
}

export const convertNoteIdToName = (noteId: number): string => {
  const note = find((l) => l.noteId === noteId, midiNotes)

  if (!note) {
    console.log(`Could not recognize note by id: ${noteId}`)
    throw new Error()
  }

  return note.name
}
