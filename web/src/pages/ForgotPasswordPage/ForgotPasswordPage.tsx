import { useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  InputField,
  Submit,
  // FieldError,
  Label,
  // useForm,
  // FormError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const onSubmit = async (data) => {
    const response = await forgotPassword(data.username)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )

      navigate(routes.login())
    }
  }
  return (
    <>
      <MetaTags title="ForgotPassword" description="ForgotPassword page" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <div className="mx-auto my-auto w-full max-w-sm border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:p-8">
        <Form className="space-y-6" onSubmit={onSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Reset your password
          </h5>
          <div>
            <Label
              name="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email Address
            </Label>
            <InputField
              type="email"
              name="username"
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="name@company.com"
              required
            />
          </div>

          <Submit className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Reset
          </Submit>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Go to{' '}
            <Link
              to={routes.login()}
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Login
            </Link>
          </div>
        </Form>
      </div>
    </>
  )
}

export default ForgotPasswordPage
