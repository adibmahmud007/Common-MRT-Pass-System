// import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../App.css"
import HomeBG from "../HomeBG/HomeBG";

const Home = () => {
    return (
        <div className="flex flex-col">
            <div className="min-h-screen ">
            <Header></Header>
            <HomeBG></HomeBG>
            </div>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;