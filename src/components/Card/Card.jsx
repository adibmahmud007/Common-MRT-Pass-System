import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../../App.css";
// import { FcSimCardChip } from "react-icons/fc";
import card_chip from "../../assets/card_chip_3.png"
import card_circle from "../../assets/card_circle.png"

const Card = () => {
    return (
        <div className="bg-zinc-900 ">
            <div className="flex flex-col min-h-screen">
                <div className="shadow-sm shadow-zinc-800">
                    <Header></Header>
                </div>
                <div className="flex mx-[100px] justify-between mt-24 ">
                    <div>
                        <h1 className="text-3xl text-white font-semibold">Card Details</h1>
                    </div>
                    <div className="w-[300px] h-[300px]">
                        <div className="circle">
                            <div className="shadow-sm shadow-slate-200 rounded-xl backdrop-blur-xl w-[350px] h-[200px] translate-y-5 translate-x-[-60px]">
                                <div className="flex justify-between mx-2 items-center">
                                    <h1 className="text-slate-300 pl-5 pt-3 font-semibold text-xl">MRT Pass</h1>
                                    <img className="pt-1" src={card_circle} alt="" />
                                </div>
                                <div className=" pl-7 pt-2 w-[65px]  ">
                                    <img src={card_chip} alt="" />
                                </div>
                                <div className="text-white pl-10 text-xl pt-5 ">
                                    <pre>1234  4567  7890  1234</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Card;