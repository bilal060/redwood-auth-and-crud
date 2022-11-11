import { useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes, navigate } from '@redwoodjs/router'

const Header = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  useEffect(() => {
    if (!isAuthenticated) {
      navigate(routes.login())
    }
  }, [isAuthenticated])
  return (
    <header>
      <nav className="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link to="/home" className="flex items-center">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/72b0d56596a981835c18946d6c4f8a968b08e694/82254/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Redwood Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Redwood Note
            </span>
          </Link>
          {isAuthenticated ? (
            <div className="flex items-center lg:order-2">
              <Link className="text-sm text-gray-400" to="/notes/new">
                Add Note
              </Link>
              <button
                type="button"
                onClick={logOut}
                className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                Logout
              </button>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  )
}

export default Header
