import { Link } from "react-router-dom";
import user_profile from "../../assets/user_profile-3.png"
// import logo from "../../assets/logo.png"

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
                        <Link to='/profile'><li><a>Profile</a></li></Link>
                        <Link to="/card"><li><a>Card</a></li></Link>
                        <li><a>About Us</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>

                <a className="btn btn-ghost text-2xl md:text-4xl font-bold md:mb-2 md:pl-14 "><h1 className="bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 inline-block text-transparent bg-clip-text play-bold">MRT System</h1></a>
                

            </div>
            <div className="navbar-center items-center hidden lg:flex pl-24 ">
                <ul className="menu menu-horizontal px-1 mt-2 text-base play-regular  pl-20">
                    <Link className="hover:text-zinc-400 pr-3" to='/home'><li><a >Home</a></li></Link>
                    <Link className="hover:text-zinc-400 pr-3" to='/services'><li><a>Services</a></li></Link>
                    <Link to='/profile'><li className="hover:text-zinc-400 pr-3"><a>Profile</a></li></Link>
                    <Link className="hover:text-zinc-400 pr-3" to="/card"><li><a>Card</a></li></Link>
                    <li className="hover:text-zinc-400 pr-3"><a>About Us</a></li>

                </ul>
            </div>
            <div className="navbar-end px-5 pt-1">
                <Link to='/profile'><a href=""><img className="w-11 hover:bg-gray-300 rounded-full" src={user_profile} alt="" /></a></Link>
            </div>
        </div>
    );
};

export default Header;