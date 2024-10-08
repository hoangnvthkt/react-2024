import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  )
}

export default App
