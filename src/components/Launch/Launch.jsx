import "../../App.css"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import doublegreen from "../../assets/dourbe-arrow-green.png"
const Launch = () => {
    return (
        <div className="launch_bg">
            <div className="flex flex-col min-h-screen">
                <Header></Header>
                <section className="w-[650px] h-[350px] bg-black opacity-75 translate-x-64 translate-y-14 rounded-md">
                    <div className="text-white px-5 py-3">
                        <h1 className="text-4xl font-bold pb-2 font-serif">Get Your Trip</h1>
                        <p className="text-sm">Set your origin and destination to travel</p>
                    </div>
                    <section className="px-5 py-3 text-white">
                        <p>Select destination</p>
                        <div className="flex gap-5">
                            <input className="w-[250px] rounded-sm px-2 py-1 text-black border-none" placeholder="Enter Your Origin here" type="text" />
                            <img className="w-10" src={doublegreen} alt="" />
                            <input className="w-[250px] rounded-sm p-2 text-black border-none" placeholder="Enter Your Destination here" type="text" />
                        </div>
                    </section>
                    <section className="text-white px-5 py-3 flex gap-20">
                        <div>
                            <p>Enter the type of cabin</p>
                            <details className="dropdown cursor-pointer">
                                <summary className=" bg-white w-[250px] text-black p-2 rounded-sm">Select Cabin type</summary>
                                <ul className="p-2 text-black shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><a>Single Cabin</a></li>
                                    <li><a>Double Cabin</a></li>
                                    <li><a>Semi-Double Cabin</a></li>
                                    <li><a>VIP Cabin</a></li>
                                </ul>
                            </details>
                        </div>
                        <div>
                            <p>Enter the type of cabin</p>
                            <details className="dropdown cursor-pointer">
                                <summary className=" bg-white w-[250px] text-black p-2 rounded-sm">Select Launch </summary>
                                <ul className="p-2 text-black shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><a>Parabat-11</a></li>
                                    <li><a>Sundarban-10</a></li>
                                    <li><a>Manami</a></li>
                                    <li><a>Prince Awlad-10</a></li>
                                </ul>
                            </details>
                        </div>
                    </section>
                    
                </section>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Launch;