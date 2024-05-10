import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import origin from '../../assets/origin.png'
// import { useLoaderData } from "react-router-dom";
import destination from "../../assets/destination.png"
import exchange from "../../assets/destination-2.png"
import axios from 'axios';
import toast from "react-hot-toast";
import  { useState, useEffect } from "react";

const Bus = () => {
    const [stations, setStations] = useState([]);
    const [buses, setBuses] = useState([]);
    const [originStation, setOriginStation] = useState("Mirpur-1");
    const [destinationStation, setDestinationStation] = useState("Mirpur-10");
    const [name, setBusName] = useState("");
    const [numOfPassenger, setNumOfPassenger] = useState();
    const [fare, settotalCost] = useState();
    const transportName=name;
    const transportMedium = stations.length > 0 ? stations[0].transport_medium : undefined;


    const handleSelectPerson = e => {
        const person = e.target.value;
        setNumOfPassenger(person);
        console.log(person, 'No of persons from radio');
    }
    const handleDestinationSelect=(stationName)=>{
        setDestinationStation(stationName);
    }

    const handleStationSelect = (stationName) => {
        setOriginStation(stationName);
      };
    const handleBusNameSelect = (busName) => {
        setBusName(busName);
      };

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/stations/bus")
            .then(res => {
                setStations(res.data.data);
                console.log(res.data.data);
            })
            .catch(error => {
                console.error('Error fetching bus info:', error);
            });
    }, []);

    useEffect(() => {
        const fetchBuses = async () => {
            try {
                const response = await axios.post("http://localhost:8000/api/v1/buses/info", {
                    originStation,
                    destinationStation
                }, { withCredentials: true });
                if (Array.isArray(response.data.data)) {
                    setBuses(response.data.data);
                }
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching airplane:', error);
            }
        };
        fetchBuses();
    }, [originStation, destinationStation]);


        if(originStation!==undefined && destinationStation!==undefined && numOfPassenger!==undefined){
            console.log(name,originStation,destinationStation,numOfPassenger);
            axios.post("http://localhost:8000/api/v1/fare/calculate/bus",{
                name,
                originStation,
                destinationStation,
                numOfPassenger
            },{withCredentials:true})
            .then(res => {
                settotalCost(res.data.data)
                console.log(res.data.data);
            })
            .catch(error => {
                console.error('Error fetching fare:', error);
            });
         }

         const handlePay = () => {

            axios.post("http://localhost:8000/api/v1/fare/pay",{transportName,originStation,destinationStation,numOfPassenger,transportMedium,fare}, { withCredentials: true })
                .then(response => {
                     toast.success('Pay successful');
                    console.log(response.data, 'from axios pay'); // This will log the response data
                })
    
                .catch(error => {
                     toast.error(error.response.data.error.explanation)
                    console.error('Error fetching data:', error);
                });
        }
    
    


    return (
        <div className="bg-zinc-900 bus_bg">
            <div className="md:flex md:flex-col h-[800px] md:h-[700px]">
                <div className="">
                    <Header></Header>
                    <div className="text-white">
                        <p className="md:text-5xl text-3xl text-center font-semibold py-2 md:py-7">Bus Service</p>
                        <p className="pl-5 md:pl-32 pt-5 md:text-4xl text-xl font-semibold font-sans">Ticket / Fare</p>
                        <p className="p-5 md:text-lg text-sm md:pl-32 pt-5">Select Origin and destination to travel in Bus</p>
                    </div>
                    <section className="md:flex  gap-10">
                        <div className="w-[220px] p-5 hover:opacity-100 transition-colors opacity-70  bg-white rounded-lg md:translate-y-16 md:translate-x-32 translate-y-6 translate-x-20">
                            <div className="flex gap-10 items-center">
                                <div>
                                    <div className="w-10"><img src={origin} alt="" /></div>
                                </div>
                                <div className="">
                                <p>{originStation}</p>
                                    <details className="dropdown dropdown-top cursor-pointer dropdown-start">
                                        <summary className="m-1 text-lg font-bold text-orange-500">Origin</summary>
                                        <ul className=" shadow menu dropdown-content z-[5] backdrop-blur-lg  rounded-box md:w-52 w-44 text-white">
                                        {stations.map(station => (
                                            <li key={station.name} onClick={() => handleStationSelect(station.name)}>
                                                {station.name}
                                            </li>
                                        ))}
                                        </ul>
                                    </details>
                                </div>
                            </div>

                        </div>
                        <div className="w-10 md:translate-x-32 md:translate-y-20 translate-y-7 translate-x-64">
                            <img className="text-white" src={exchange} alt="" />
                        </div>
                        <div className="w-[250px] p-5 opacity-70 hover:opacity-100 bg-white rounded-lg md:translate-y-16 md:translate-x-32 translate-y-8 translate-x-20">
                            <div className="flex gap-10 items-center">
                                <div>
                                    <div className="w-10"><img src={destination} alt="" /></div>
                                </div>
                                <div className="">
                                    <p>{destinationStation}</p>
                                    <details className="dropdown dropdown-top cursor-pointer dropdown-start">
                                        <summary className="m-1 text-lg font-bold text-orange-500">Destination</summary>
                                        <ul className=" shadow menu dropdown-content z-[5] backdrop-blur-lg  rounded-box md:w-52 w-44 text-white">
                                        {stations.map(station => (
                                            <li key={station.name} onClick={() => handleDestinationSelect(station.name)}>
                                                {station.name}
                                            </li>
                                        ))}
                                        </ul>
                                    </details>
                                </div>
                            </div>

                        </div>
                        <div className="w-10 md:translate-x-32 md:translate-y-20 translate-y-10 translate-x-64">
                            <img className="text-white" src={exchange} alt="" />
                        </div>
                        <div className="w-[250px] p-5 hover:opacity-100 transition-colors opacity-70  bg-white rounded-lg md:translate-y-16 md:translate-x-32 translate-y-12 translate-x-20">
                            <div className="flex gap-10 items-center">
                                <div>
                                    <div className="w-10"><img src={origin} alt="" /></div>
                                </div>
                                <div className="">
                                    <p>{name}</p>
                                    <details className="dropdown dropdown-top cursor-pointer dropdown-start">
                                        <summary className="m-1 text-lg font-bold text-orange-500">Select Bus</summary>
                                        <ul className=" shadow menu dropdown-content z-[5] backdrop-blur-lg  rounded-box md:w-52 w-44 text-white">
                                        {buses.map(bus => (
                                            <li key={bus.name} onClick={() => handleBusNameSelect(bus.name)}>
                                                {bus.name}
                                            </li>
                                        ))}
                                        </ul>
                                    </details>
                                </div>
                            </div>

                        </div>
                    </section>
                    <div>
                        <div className="pl-12 md:pl-32 pt-8 text-white translate-y-10">
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
                    <div className="pl-12 translate-y-12 md:pl-32 pt-4 text-white text-sm font-bold ">
                        <p>Price: {fare} TK</p>
                    </div>
                    <div className="  pt-10 translate-y-9 md:pt-6 text-white  text-center">
                        <button onClick={handlePay} className="Buy-button">Buy</button>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Bus;