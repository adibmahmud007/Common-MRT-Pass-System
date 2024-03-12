import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../App.css"

const Home = () => {
    return (
        <div className="flex flex-col">
            <div className="min-h-screen home_bg">
            <Header></Header>
            <Outlet></Outlet>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Home;