// import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../App.css"
import HomeBG from "../HomeBG/HomeBG";
import Services from "../Services/Services";
import Blog from "../Blog/Blog";

const Home = () => {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <div className="md:min-h-screen h-[400px] home_bg ">
            <Header></Header>
            <HomeBG></HomeBG>
            </div>
            <Services></Services>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;