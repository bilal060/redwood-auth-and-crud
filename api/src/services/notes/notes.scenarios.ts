import type { Prisma, Note } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.NoteCreateArgs>({
  note: {
    one: { data: { title: 'String', description: 'String' } },
    two: { data: { title: 'String', description: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Note, 'note'>
