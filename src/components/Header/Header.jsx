import { Link } from "react-router-dom";
import user_profile from "../../assets/user_profile.png"
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className="navbar home-bg  text-white">
            <div className="navbar-start ">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 backdrop-blur-sm shadow-slate-300 shadow-sm text-zinc-200 font-semibold rounded-box w-40">
                        <Link to='/home'><li><a>Home</a></li></Link>
                        <Link to='/services'><li><a>Services</a></li></Link>
                        <li><a>Profile</a></li>
                        <li><a>Recharge</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>

                <a className="btn btn-ghost text-2xl md:text-3xl font-bold md:mb-2 "><img className="md:w-24 w-12  hidden md:block " src={logo} alt="" />MRT System</a>

            </div>
            <div className="navbar-center items-center hidden lg:flex pl-20">
                <ul className="menu menu-horizontal px-1 mt-2 text-xl font-semibold pl-16">
                    <Link to='/home'><li><a>Home</a></li></Link>
                    <Link to='/services'><li><a>Services</a></li></Link>
                    <li><a>Profile</a></li>
                    <li><a>Recharge</a></li>
                    <li><a>About Us</a></li>

                </ul>
            </div>
            <div className="navbar-end px-5 pt-1">
                <Link><a href=""><img className="w-11 hover:bg-slate-400 rounded-full" src={user_profile} alt="" /></a></Link>
            </div>
        </div>
    );
};

export default Header;