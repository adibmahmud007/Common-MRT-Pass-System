import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div className="flex flex-col">
            <div className="min-h-screen">
            <Header></Header>
            <Outlet></Outlet>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Home;