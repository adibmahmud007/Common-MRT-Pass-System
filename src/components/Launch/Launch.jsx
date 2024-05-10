/* eslint-disable no-const-assign */
import "../../App.css"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import doublegreen from "../../assets/dourbe-arrow-green.png"
// import adult from "../../assets/adult.png"
// import { FaRegUser } from "react-icons/fa";
import axios from 'axios';
import toast from "react-hot-toast";
import  { useState, useEffect } from "react";
const Launch = () => {

    // const [adcount, setCount] = useState(0);
    // const [chcount, setchCount] = useState(0);
    const [stations, setStations] = useState([]);
    const [cabinInfo, setCabinInfo] = useState([]);
    const [launches, setLaunches] = useState([]);
    const [originTerminal, setOriginStation] = useState("Select Terminal");
    const [destinationTerminal, setDestinationStation] = useState("Select Terminal");
    const [cabinType, setCabinType] = useState("Select Cabin");
    const [name, setLaunchName] = useState("Select Launch");
    const [numOfPassenger, setNumOfPassenger] = useState();
    const [fare, settotalCost] = useState();
    const originStation=originTerminal;
    const destinationStation=destinationTerminal;
    const transportName=name;
    const transportMedium = stations.length > 0 ? stations[0].transport_medium : undefined;


    // const chinc = () => { setchCount(chcount => chcount + 1) }
    // const chdec = () => { setchCount(chcount => chcount - 1) }

    // eslint-disable-next-line no-const-assign
    // const inc = () => { setCount(adcount => adcount + 1) }
    // const dec = () => { setCount(adcount => adcount - 1) }
    const handleSelectPerson=e=>{
        const person=e.target.value;
        setNumOfPassenger(person);
        console.log(person,'No of persons from radio');
    }
    const handleDestinationSelect=(stationName)=>{
        setDestinationStation(stationName);
    }

    const handleStationSelect = (stationName) => {
        setOriginStation(stationName);
      };
    const handleLaunchNameSelect = (Name) => {
        setLaunchName(Name);
      };
    const handleCabinTypeSelect = (Name) => {
        setCabinType(Name);
      };

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/stations/launch")
            .then(res => {
                setStations(res.data.data);
                console.log(res.data.data);
            })
            .catch(error => {
                console.error('Error fetching bus info:', error);
            });
    }, []);

    useEffect(() => {
        const fetchLaunches = async () => {
            try {
                const response = await axios.post("http://localhost:8000/api/v1/services/launches/cabinInfo", {
                    originTerminal,
                    destinationTerminal
                }, { withCredentials: true });
                if (Array.isArray(response.data.data)) {
                    setCabinInfo(response.data.data);
                }
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching launch:', error);
            }
        };
        fetchLaunches();
    }, [originTerminal, destinationTerminal]);

    useEffect(() => {
        const fetchLaunchNames = async () => {
            try {
                const response = await axios.post("http://localhost:8000/api/v1/services/launches/info", {
                    originTerminal,
                    destinationTerminal,
                    cabinType
                }, { withCredentials: true });
                if (Array.isArray(response.data.data)) {
                    setLaunches(response.data.data);
                }
                
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching launch:', error);
            }
        };
        fetchLaunchNames();
    }, [originTerminal, destinationTerminal,cabinType]);

    if(name!==undefined && originTerminal!==undefined && destinationTerminal!==undefined && cabinType!==undefined && numOfPassenger!==undefined){
        // console.log(name,originStation,destinationStation,numOfPassenger);
        axios.post("http://localhost:8000/api/v1/fare/calculate/launch",{
            name,
            originTerminal,
            destinationTerminal,
            cabinType,
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

        axios.post("http://localhost:8000/api/v1/fare/pay",{transportName,originStation,destinationStation,cabinType,numOfPassenger,transportMedium,fare}, { withCredentials: true })
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
        <div className="launch_bg ">
            <div className="flex flex-col px-1 py-2 min-h-screen">
                <Header></Header>
                <section className="md:w-[650px] md:h-[450px] mx-auto p-2 bg-black opacity-75  md:translate-y-14 rounded-md">
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
                                    <summary className=" bg-white w-[300px] md:w-[250px] text-black p-2 rounded-sm">{originTerminal}</summary>
                                    <ul className=" shadow menu dropdown-content z-[5] backdrop-blur-lg  rounded-box md:w-52 w-44 text-white">
                                        {stations.map(station => (
                                            <li key={station.name} onClick={() => handleStationSelect(station.name)}>
                                                {station.name}
                                            </li>
                                        ))}
                                        </ul>
                                </details>
                            </div>
                            <img className="md:translate-x-0 translate-x-64 w-10" src={doublegreen} alt="" />
                            <div>
                                {/* <p>Enter the type of cabin</p> */}
                                <details className="dropdown cursor-pointer pt-2 md:pt-0">
                                    <summary className=" bg-white w-[300px]  md:w-[250px] text-black p-2 rounded-sm">{destinationTerminal}</summary>
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
                    </section>
                    <section className="text-white px-5 py-1 md:flex gap-20">
                        <div className="md:pt-0 pt-3">
                            <p className="text-sm">Enter the type of cabin</p>
                            <details className="dropdown cursor-pointer pb-5">
                                <summary className=" bg-white w-[300px]  md:w-[250px] text-black p-2 rounded-sm">{cabinType}</summary>
                                {cabinInfo.map(cabin => (
                                            <li key={cabin} onClick={() => handleCabinTypeSelect(cabin)}>
                                                {cabin}
                                            </li>
                                        ))}
                            </details>
                        </div>
                        <div>
                            <p className="text-sm">Select Launch Company</p>
                            <details className="dropdown cursor-pointer pb-2">
                                <summary className=" bg-white w-[300px]   md:w-[250px] text-black p-2 rounded-sm">{name} </summary>
                                {launches.map(launch => (
                                            <li key={launch.name} onClick={() => handleLaunchNameSelect(launch.name)}>
                                                {launch.name}
                                            </li>
                                        ))}
                            </details>
                        </div>
                    </section>
                    <section className="md:flex gap-12">
                        <div className="md:pt-0 pt-2">

                        <div className="text-white pl-5">
                            <p className="text-sm font-bold md:py-2">Persons:</p>
                            <div className="pt-3">
                                <label className="radio" htmlFor="1"><input onChange={handleSelectPerson} type="radio" name="radio-1" id="1" value='1' />1</label>
                                <label className="pl-6 radio" htmlFor="2"><input onChange={handleSelectPerson} type="radio" name="radio-1" id="2" value='2' />2</label>
                                <label className="pl-6 radio" htmlFor="3"><input onChange={handleSelectPerson} type="radio" name="radio-1" id="3" value='3' />3</label>
                                <label className="pl-6 radio" htmlFor="4"><input onChange={handleSelectPerson} type="radio" name="radio-1" id="4" value='4' />4</label>
                                <label className="pl-6 radio" htmlFor="5"><input onChange={handleSelectPerson} type="radio" name="radio-1" id="5" value='5' />5</label>
                            </div>
                        </div>
                        <div className="pl-4 pt-2 text-white">
                            <p>Price:{fare}</p>
                        </div>
                        </div>
                        <div className="md:pt-0 pt-4">

        
                        </div>
                    </section>
                    <section className="md:pl-6 pt-4 md:pb-0 pb-2 md:text-left text-center">
                        <button onClick={handlePay} className="bg-lime-500 rounded-2xl px-9 text-lg font-semibold py-2">Buy Ticket</button>
                    </section>

                </section>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Launch;