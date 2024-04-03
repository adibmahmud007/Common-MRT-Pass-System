import { useLoaderData } from "react-router-dom";
import "../../App.css"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useState } from "react";
const MetroRail = () => {

    const stations = useLoaderData();
    const [selectedStation, setSelectedStation] = useState("Uttara-west");
    const [selectDestination, setSelectDestination]=useState("Motijhil");
    // const [selectPerson,setSelectPerson]=useState(0);

    const handleSelectPerson=e=>{
        const person=e.target.value;
        console.log(person,'No of persons from radio');
    }

    const handleDestinationSelect=(stationName)=>{
        setSelectDestination(stationName);
    }

    const handleStationSelect = (stationName) => {
        setSelectedStation(stationName);
      };
    

    return (
        <div className="metro_bg ">
            <div className="flex flex-col min-h-screen md:h-[125vh]">
                <Header></Header>
                <div className="md:max-w-6xl ">
                    <div className="text-white">
                        <p className="md:text-5xl text-3xl text-center font-semibold py-2 md:py-7">Metro Rail Service</p>
                        <p className="pl-5 md:pl-32 pt-5 md:text-4xl text-xl font-semibold font-sans">Ticket / Fare</p>
                        <p className="p-5 md:text-lg text-sm md:pl-32 pt-5">Select Origin and destination to travel in Metro Rail</p>
                        <div className="pl-5 md:pl-32 md:pt-5">
                            <p className="text-sm font-bold py-2">Origin</p>
                            <div className="flex justify-between w-[350px] md:w-[650px] items-center border-b-[1px] border-b-blue-50 hover:border-b-red-700">
                                <p>{selectedStation}</p>
                                <details className="dropdown dropdown-top cursor-pointer dropdown-end">
                                    <summary className="m-1 ">Select Station</summary>
                                    <ul className=" shadow menu dropdown-content z-[5] backdrop-blur-lg  rounded-box md:w-52 w-44">
                                        {stations.map(station => (
                                            <li key={station.name} onClick={() => handleStationSelect(station.name)}>
                                                {station.name}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </div>
                        </div>
                        <div className="pl-5 md:pl-32 pt-5 md:pt-8">
                        <p className="text-sm font-bold py-2">Destination</p>
                            <div className="flex justify-between w-[350px] md:w-[650px] items-center border-b-[1px] border-b-blue-50 hover:border-b-red-700 ">
                                <p>{selectDestination}</p>
                                <details className="dropdown dropdown-top cursor-pointer dropdown-end">
                                    <summary className="m-1 ">Select Station</summary>
                                    <ul className=" shadow menu dropdown-content z-[5] backdrop-blur-lg  rounded-box md:w-52 w-44">
                                        {stations.map(station => (
                                            <li key={station.name} onClick={() => handleDestinationSelect(station.name)}>
                                                {station.name}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </div>
                        </div>
                        <div className="pl-5 md:pl-32 pt-8">
                            <p className="text-sm font-bold md:py-2">Persons:</p>
                            <div className="pt-3">
                                <label className="radio" htmlFor="1"><input onChange={handleSelectPerson} type="radio" name="radio-1" id="1" value='1' />1</label>
                                <label className="pl-6 radio" htmlFor="2"><input onChange={handleSelectPerson} type="radio" name="radio-1" id="2" value='2' />2</label>
                                <label className="pl-6 radio" htmlFor="3"><input onChange={handleSelectPerson} type="radio" name="radio-1" id="3" value='3' />3</label>
                                <label className="pl-6 radio" htmlFor="4"><input onChange={handleSelectPerson} type="radio" name="radio-1" id="4" value='4' />4</label>
                                <label className="pl-6 radio" htmlFor="5"><input onChange={handleSelectPerson} type="radio" name="radio-1" id="5" value='5' />5</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pl-5 md:pl-32 pt-4 text-white text-sm font-bold ">
                    <p>Price: {100} TK</p>
                </div>
                <div className="pl-5 md:pl-32 pt-3 md:pt-6 text-white  text-center">
                    <button className="Buy-button">Buy</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MetroRail;