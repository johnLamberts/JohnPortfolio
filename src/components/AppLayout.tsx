import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <div className="page-content">
      <Navbar />
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
}
