import { Outlet } from "react-router-dom"
import Nav from "./component/Home/nav"

function App() {


  return (
    <>
       <Nav></Nav>
      <Outlet></Outlet>
  
    </>
  )
}

export default App
