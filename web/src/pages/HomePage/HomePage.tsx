import { MetaTags } from '@redwoodjs/web'

import NotesCell from 'src/components/Note/NotesCell'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="p-4">
        <NotesCell />
      </div>
    </>
  )
}

export default HomePage
