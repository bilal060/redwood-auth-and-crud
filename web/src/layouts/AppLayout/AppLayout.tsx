import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default AppLayout
