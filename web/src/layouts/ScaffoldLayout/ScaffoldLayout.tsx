import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type LayoutProps = {
  title: string
  titleTo: string
  buttonLabel: string
  buttonTo: string
  children: React.ReactNode
}

const ScaffoldLayout = ({ children }: LayoutProps) => {
  return (
    <div className="rw-scaffold py-4">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ScaffoldLayout
