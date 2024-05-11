import { Outlet } from "react-router-dom"
import Nav from "./component/Home/nav"
import Footer from "./component/Home/Footer"

function App() {

  return (
    <>
       <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
  
    </>
  )
}

export default App
