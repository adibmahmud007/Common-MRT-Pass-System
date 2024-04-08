/* eslint-disable no-const-assign */
import "../../App.css"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import doublegreen from "../../assets/dourbe-arrow-green.png"
// import adult from "../../assets/adult.png"
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
const Launch = () => {

    const [adcount, setCount] = useState(0);
    const [chcount, setchCount] = useState(0);

    const chinc = () => { setchCount(chcount => chcount + 1) }
    const chdec = () => { setchCount(chcount => chcount - 1) }

    // eslint-disable-next-line no-const-assign
    const inc = () => { setCount(adcount => adcount + 1) }
    const dec = () => { setCount(adcount => adcount - 1) }


    return (
        <div className="launch_bg ">
            <div className="flex flex-col px-1 py-2 min-h-screen">
                <Header></Header>
                <section className="md:w-[650px] md:h-[400px] p-2 bg-black opacity-75 md:translate-x-64 md:translate-y-14 rounded-md">
                    <div className="text-white px-5 py-3">
                        <h1 className="md:text-4xl text-3xl font-bold pb-2 font-serif">Get Your Trip By Launch</h1>
                        <p className="text-sm">Set your origin and destination to travel</p>
                    </div>
                    <section className="px-5 py-3 text-white">
                        <p className="text-sm">Select Destination</p>
                        <div className="md:flex pt-3 gap-5">
                            <div>
                                {/* <p>Enter the type of cabin</p> */}
                                <details className="dropdown cursor-pointer pb-2 md:pb-0">
                                    <summary className=" bg-white w-[300px] md:w-[250px] text-black p-2 rounded-sm">Enter Origin</summary>
                                    <ul className="p-2 text-black shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                        <li><a>Single Cabin</a></li>
                                        <li><a>Double Cabin</a></li>
                                        <li><a>Semi-Double Cabin</a></li>
                                        <li><a>VIP Cabin</a></li>
                                    </ul>
                                </details>
                            </div>
                            <img className="md:translate-x-0 translate-x-64 w-10" src={doublegreen} alt="" />
                            <div>
                                {/* <p>Enter the type of cabin</p> */}
                                <details className="dropdown cursor-pointer pt-2 md:pt-0">
                                    <summary className=" bg-white w-[300px]  md:w-[250px] text-black p-2 rounded-sm">Enter Destination</summary>
                                    <ul className="p-2 text-black shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                        <li><a>Single Cabin</a></li>
                                        <li><a>Double Cabin</a></li>
                                        <li><a>Semi-Double Cabin</a></li>
                                        <li><a>VIP Cabin</a></li>
                                    </ul>
                                </details>
                            </div>
                        </div>
                    </section>
                    <section className="text-white px-5 py-1 md:flex gap-20">
                        <div className="md:pt-0 pt-3">
                            <p className="text-sm">Enter the type of cabin</p>
                            <details className="dropdown cursor-pointer pb-5">
                                <summary className=" bg-white w-[300px]  md:w-[250px] text-black p-2 rounded-sm">Select Cabin type</summary>
                                <ul className="p-2 text-black shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><a>Single Cabin</a></li>
                                    <li><a>Double Cabin</a></li>
                                    <li><a>Semi-Double Cabin</a></li>
                                    <li><a>VIP Cabin</a></li>
                                </ul>
                            </details>
                        </div>
                        <div>
                            <p className="text-sm">Select Launch Company</p>
                            <details className="dropdown cursor-pointer pb-2">
                                <summary className=" bg-white w-[300px]   md:w-[250px] text-black p-2 rounded-sm">Select Launch </summary>
                                <ul className="p-2 text-black shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><a>Parabat-11</a></li>
                                    <li><a>Sundarban-10</a></li>
                                    <li><a>Manami</a></li>
                                    <li><a>Prince Awlad-10</a></li>
                                </ul>
                            </details>
                        </div>
                    </section>
                    <section className="md:flex gap-12">
                        <div className="md:pt-0 pt-4">

                            <div className="flex gap-4 items-center pl-3">
                                <h1><FaRegUser className="h-10 w-16 text-white" /></h1>
                                <div className="text-white ">
                                    <h1 className="text-lg font-semibold">Adults</h1>
                                    <p className="text-xs">Age 6 and over</p>
                                </div>
                                <div className="text-black px-4 py-1 flex gap-3 bg-white items-center rounded-xl">
                                    <button className="text-xl" onClick={inc}>+</button>
                                    <div>{adcount}</div>
                                    <button className="text-2xl" onClick={dec}>-</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:pt-0 pt-4">

                            <div className="flex gap-4 items-center pl-8 md:pb-0 pb-2">
                                <h1><FaRegUser className="h-7 w-10 text-white" /></h1>
                                <div className="text-white ">
                                    <h1 className="text-lg font-semibold">Children</h1>
                                    <p className="text-xs">Age 2 to 5 years</p>
                                </div>
                                <div className="text-black px-4 py-1 flex gap-3 bg-white items-center rounded-xl">
                                    <button className="text-xl" onClick={chinc}>+</button>
                                    <div>{chcount}</div>
                                    <button className="text-2xl" onClick={chdec}>-</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="md:pl-6 pt-4 md:pb-0 pb-2 md:text-left text-center">
                        <button className="bg-lime-500 rounded-2xl px-9 text-lg font-semibold py-2">Buy Ticket</button>
                    </section>

                </section>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Launch;