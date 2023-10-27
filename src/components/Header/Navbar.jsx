import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useState } from "react";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [userMenu, setUserMenu] = useState(false);
    const navMenu = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Contact", link: "/contact" },
        { name: "Blog", link: "/blog" },
    ];
    const user = false
    return (
        <div className="max-w-[1920px] px-4 md:px-[40px] lg:px-[80px] 2xl:px-[120px] mx-auto mt-2">
            <div className="navbar  px-0">
                <div className="navbar-start">
                    {/* logo */}
                    <a className="btn btn-ghost normal-case text-xl px-0">
                        <img className="w-full h-full" src={logo} alt="logo" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal lg:space-x-3 xl:space-x-6 px-1">
                        {navMenu.map((item, index) => (
                            <li key={index} className="font-medium">
                                <NavLink
                                    to={item.link}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-[#FF3811] text-white px-3 py-2 rounded-md" : "hover:bg-[#FF3811]/20 px-3 py-2 rounded-md"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end relative">
                    {/* user dropdown */}
                    {
                        user ?
                            <div className="dropdown relative">
                                {/* user Dropdawn  */}
                                <label tabIndex="0" onClick={() => setUserMenu(!userMenu)} className="btn btn-ghost px-0  mx-3">
                                    <img className="w-10 h-10 rounded-full border-2 border-[#FF3811]" src={logo} alt="" />
                                </label>
                                <ul
                                    tabIndex="0"
                                    className={`absolute dropdown-content top-8 right-3 space-y-4 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box min-w-[200px] ${userMenu ? "block" : "hidden"}`}
                                >
                                    <li>
                                        <p className="w-full  px-3 py-1 rounded-md text-center font-semibold"> Md Mitul</p>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/appointment"
                                            className="text-white text-center text-sm w-full font-semibold px-3 py-1 rounded-md border border-[#FF3811] bg-[#FF3811]  block "
                                        >
                                            LogOut
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            :
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white text-sm font-semibold px-3 py-2 rounded-md border border-[#FF3811] bg-[#FF3811] mr-3 " : "text-[#FF3811] font-semibold px-3 py-2 rounded-md border border-[#FF3811] mr-3 hover:bg-[#FF3811]/20  text-sm  duration-200"}
                            >
                                Login
                            </NavLink>
                    }
                    <NavLink
                        to="/appointment"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white text-sm font-semibold px-3 py-2 rounded-md border border-[#FF3811] bg-[#FF3811] mr-3 lg:mr-0 hidden md:block" : "text-[#FF3811] hidden md:block font-semibold px-3 py-2 rounded-md border border-[#FF3811] mr-3 lg:mr-0 hover:bg-[#FF3811]/20  text-sm  duration-200"}
                    >
                        Appointment
                    </NavLink>
                    {/* dropdown menu */}
                    <div className="dropdown relative">
                        <label tabIndex="0" onClick={() => setOpen(!open)} className="btn btn-ghost px-0 lg:hidden">
                            {
                                open ? <box-icon name='x-square' type='solid' size="md" color='#FF3811'></box-icon> : <box-icon name='menu' size="md" color='#FF3811'></box-icon>
                            }

                        </label>
                        <ul
                            tabIndex="0"
                            className={`absolute dropdown-content top-8 right-0 space-y-4 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${open ? "block" : "hidden"}`}
                        >
                            {navMenu.map((item, index) => (
                                <li key={index} className="font-semibold w-full flex">
                                    <NavLink
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "bg-[#FF3811]  w-full text-white px-3 py-1 rounded-md" : "hover:bg-[#FF3811]/20  px-3 py-1 rounded-md w-full"
                                        }
                                        to={item.link}
                                    >{item.name}</NavLink>
                                </li>
                            ))}
                            <li>
                                <NavLink
                                    to="/appointment"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white text-sm w-full font-semibold px-3 py-1 rounded-md border border-[#FF3811] bg-[#FF3811]  block   md:hidden" : "text-[#FF3811] md:hidden block font-semibold px-3 py-1 w-full rounded-md border border-[#FF3811]  hover:bg-[#FF3811]/20  text-sm  duration-200"}
                                >
                                    Appointment
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
