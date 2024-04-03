import "../../App.css"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Launch = () => {
    return (
        <div className="launch_bg">
                <div className="flex flex-col min-h-screen">
                    <Header></Header>
                </div>
                <Footer></Footer>
        </div>
    );
};

export default Launch;