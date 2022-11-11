import Footer from 'src/components/Footer/Footer'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <main className="my-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default AuthLayout
