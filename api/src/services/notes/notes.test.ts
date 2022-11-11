import type { Note } from '@prisma/client'

import { notes, note, createNote, updateNote, deleteNote } from './notes'
import type { StandardScenario } from './notes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('notes', () => {
  scenario('returns all notes', async (scenario: StandardScenario) => {
    const result = await notes()

    expect(result.length).toEqual(Object.keys(scenario.note).length)
  })

  scenario('returns a single note', async (scenario: StandardScenario) => {
    const result = await note({ id: scenario.note.one.id })

    expect(result).toEqual(scenario.note.one)
  })

  scenario('creates a note', async () => {
    const result = await createNote({
      input: { title: 'String', description: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a note', async (scenario: StandardScenario) => {
    const original = (await note({ id: scenario.note.one.id })) as Note
    const result = await updateNote({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a note', async (scenario: StandardScenario) => {
    const original = (await deleteNote({ id: scenario.note.one.id })) as Note
    const result = await note({ id: original.id })

    expect(result).toEqual(null)
  })
})
