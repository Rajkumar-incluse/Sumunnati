import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import '../../style/app.css';

function Operations() {
  return (
    <div className="app-wrapper h-screen overflow-hidden">
      <Nav />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Operations