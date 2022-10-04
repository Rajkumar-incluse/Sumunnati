import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import Nav from "./Nav";
import '../../style/app.css';

function AppWrapper({ userType = '', list = [] }) {
  return (
    <div className="app-wrapper h-screen overflow-hidden">
      <Nav userType={userType} />
      <Sidebar list={list} />
      <Outlet />
    </div>
  )
}

export default AppWrapper