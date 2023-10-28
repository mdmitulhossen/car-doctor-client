import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout;