// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'

import AppLayout from 'src/layouts/AppLayout/AppLayout'
import AuthLayout from 'src/layouts/AuthLayout/AuthLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="login">
        <Set wrap={AppLayout}>
          <Route path="/home" page={HomePage} name="home" />
          <Set wrap={ScaffoldLayout} title="Notes" titleTo="notes" buttonLabel="New Note" buttonTo="newNote">
            <Route path="/notes/new" page={NoteNewNotePage} name="newNote" />
            <Route path="/notes/{id:Int}/edit" page={NoteEditNotePage} name="editNote" />
            <Route path="/notes/{id:Int}" page={NoteNotePage} name="note" />
          </Set>
        </Set>
      </Private>

      <Set wrap={AuthLayout}>
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/" page={LoginPage} name="login" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
