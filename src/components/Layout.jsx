import { Outlet } from "react-router-dom"
import {Navbar as NavbarRoutes} from './Navbar'
import {Footer as FooterRoutes} from './Footer'
export const Layout = () => {
  return (

	<div className="flex flex-col min-h-screen justify-between	text-white font-Inter">
    <NavbarRoutes/>
      <Outlet/>
    <FooterRoutes /> 
  </div>
	
  )
}

