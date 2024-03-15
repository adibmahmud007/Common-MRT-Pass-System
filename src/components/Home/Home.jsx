// import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../App.css"
import HomeBG from "../HomeBG/HomeBG";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div className="flex flex-col">
            <div className="min-h-screen ">
            <Header></Header>
            <HomeBG></HomeBG>
            <Services></Services>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;