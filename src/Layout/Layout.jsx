import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

const Layout = () => {
    return (
        <div className="w-10/12 mx-auto">

            <Navbar></Navbar>

            <Outlet></Outlet>
        </div>
    );
};

export default Layout;