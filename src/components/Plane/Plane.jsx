/* eslint-disable no-const-assign */
import "../../App.css"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import doublegreen from "../../assets/dourbe-arrow-green.png"
// import adult from "../../assets/adult.png"
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
// import DatePicker from "react-date-picker";
const Launch = () => {

    const [adcount, setCount] = useState(0);
    const [chcount, setchCount] = useState(0);

    const chinc = () => { setchCount(chcount => chcount + 1) }
    const chdec = () => { setchCount(chcount => chcount - 1) }

    // eslint-disable-next-line no-const-assign
    const inc = () => { setCount(adcount => adcount + 1) }
    const dec = () => { setCount(adcount => adcount - 1) }

    const [date, setDate] = useState("mm");
    const onDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleSelectPerson = e => {
        const person = e.target.value;
        console.log(person, 'No of persons from radio');
    }
    return (


        <div className="plane_bg ">
            <div className="flex flex-col px-1 py-2 min-h-screen">
                <Header></Header>
                <section className="md:w-[670px] md:h-[420px] mx-auto p-2 bg-white opacity-75  md:translate-y-14 rounded-md">
                    <div className="text-black px-5 py-2">
                        <h1 className="md:text-4xl text-3xl font-bold pb-2 font-serif">Select Your preferable Flight</h1>
                        {/* <p className="text-sm">Set your origin and destination to travel</p> */}
                        <div className="pt-2 text-black font-semibold  text-lg ">
                            <label className="radio border-none" htmlFor="1"><input onChange={handleSelectPerson} type="radio" name="radio-1" id="1" value='Roundtrip' />RoundTrip</label>
                            <label className="pl-6 border-none radio" htmlFor="2" ><input className="pl-2" onChange={handleSelectPerson} type="radio" name="radio-1" id="2" value='Oneway'  />OneWay</label>
                        </div>
                    </div>
                    <section className="px-5 py-1 text-black">

                        <div className="md:flex pt-3 gap-5">
                            <div className="border border-black p-2">
                                <p className="text-sm pl-2 font-semibold">Flying From</p>
                                {/* <p>Enter the type of cabin</p> */}
                                <details className="dropdown cursor-pointer pb-2 md:pb-0">

                                    <summary className=" bg-white w-[300px] md:w-[250px] text-black p-2 rounded-sm">City or Airport</summary>
                                    <ul className="p-2 text-black shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                        <li><a>Single Cabin</a></li>
                                        <li><a>Double Cabin</a></li>
                                        <li><a>Semi-Double Cabin</a></li>
                                        <li><a>VIP Cabin</a></li>
                                    </ul>
                                </details>
                            </div>
                            <img className="md:translate-x-0 translate-x-64 w-10 h-14 pt-3" src={doublegreen} alt="" />
                            <div className="border border-black p-2">
                                <p className="text-sm pl-2 font-semibold">Flying To</p>
                                {/* <p>Enter the type of cabin</p> */}
                                <details className="dropdown cursor-pointer pb-2 md:pb-0">

                                    <summary className=" bg-white w-[300px] md:w-[250px] text-black p-2 rounded-sm">City or Airport</summary>
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
                        <div className="md:pt-0 pt-3 pb-3 mb-3 px-16 text-left border border-black">
                            <h3 className="text-black text-sm font-semibold">Departing</h3>
                            <div className="text-black">
                                <input
                                    className=""
                                    type="date"
                                    // style={dateStyle}
                                    value={date}
                                    onChange={onDateChange}
                                />
                            </div>
                        </div>
                        <div className="md:pt-0 pt-3 pb-3 px-16 mb-3 text-left border border-black">
                            <h3 className="text-black text-sm font-semibold">Returning</h3>
                            <div className="text-black">
                                <input
                                    className=""
                                    type="date"
                                    // style={dateStyle}
                                    value={date}
                                    onChange={onDateChange}
                                />
                            </div>
                        </div>
                    </section>
                    <section className="md:flex gap-12">
                        <div className="md:pt-0 pt-4">

                            <div className="flex gap-4 items-center pl-3">
                                <h1><FaRegUser className="h-10 w-16 text-black" /></h1>
                                <div className="text-black ">
                                    <h1 className="text-lg font-semibold">Adults</h1>
                                    <p className="text-xs">Age 6 and over</p>
                                </div>
                                <div className="text-white px-4 py-1 flex gap-3 bg-black items-center rounded-xl">
                                    <button className="text-xl " onClick={inc}>+</button>
                                    <div>{adcount}</div>
                                    <button className="text-2xl" onClick={dec}>-</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:pt-0 pt-4">

                            <div className="flex gap-4 items-center pl-8 md:pb-0 pb-2">
                                <h1><FaRegUser className="h-7 w-10 text-black" /></h1>
                                <div className="text-black ">
                                    <h1 className="text-lg font-semibold">Children</h1>
                                    <p className="text-xs">Age 2 to 5 years</p>
                                </div>
                                <div className="text-white px-4 py-1 flex gap-3 bg-black items-center rounded-xl">
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