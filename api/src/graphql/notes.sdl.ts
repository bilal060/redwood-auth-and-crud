export const schema = gql`
  type Note {
    id: Int!
    title: String!
    description: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    notes: [Note!]! @requireAuth
    note(id: Int!): Note @requireAuth
  }

  input CreateNoteInput {
    title: String!
    description: String!
  }

  input UpdateNoteInput {
    title: String
    description: String
  }

  type Mutation {
    createNote(input: CreateNoteInput!): Note! @requireAuth
    updateNote(id: Int!, input: UpdateNoteInput!): Note! @requireAuth
    deleteNote(id: Int!): Note! @requireAuth
  }
`
