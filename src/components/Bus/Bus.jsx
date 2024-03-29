import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import origin from '../../assets/origin.png'
import { useLoaderData } from "react-router-dom";
import destination from "../../assets/destination.png"
import exchange from "../../assets/destination-2.png"

const Bus = () => {

    const stations = useLoaderData();
    // const [selectedStation, setSelectedStation] = useState("Uttara-west");
    // const [selectDestination, setSelectDestination]=useState("Motijhil");

    // const handleDestinationSelect=(stationName)=>{
    //     setSelectDestination(stationName);
    // }

    // const handleStationSelect = (stationName) => {
    //     setSelectedStation(stationName);
    //   };

    return (
        <div className="bg-zinc-900 bus_bg">
            <div className="flex flex-col min-h-screen">
                <div className="">
                    <Header></Header>
                    <div className="text-white">
                        <p className="md:text-5xl text-3xl text-center font-semibold py-2 md:py-7">Bus Service</p>
                        <p className="pl-5 md:pl-32 pt-5 md:text-4xl text-xl font-semibold font-sans">Ticket / Fare</p>
                        <p className="p-5 md:text-lg text-sm md:pl-32 pt-5">Select Origin and destination to travel in Bus</p>
                    </div>
                    <section className="flex gap-20">
                    <div className="w-[220px] p-5 bg-white rounded-lg translate-y-16 translate-x-32">
                        <div className="flex gap-10 items-center">
                            <div>
                                <div className="w-10"><img src={origin} alt="" /></div>
                            </div>
                            <div className=""> 
                                <details className="dropdown dropdown-top cursor-pointer dropdown-start">
                                    <summary className="m-1 text-lg font-bold text-orange-500">Origin</summary>
                                    <ul className=" shadow menu dropdown-content z-[5] backdrop-blur-lg  rounded-box md:w-52 w-44 text-white">
                                        {stations.map(station => (
                                            <li key={station.name} >
                                            {station.name}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </div>
                        </div>
                        
                    </div>
                    <div className="w-10 translate-x-32 translate-y-20 ">
                        <img className="text-white" src={exchange} alt="" />
                    </div>
                    <div className="w-[250px] p-5 bg-white rounded-lg translate-y-16 translate-x-32">
                        <div className="flex gap-10 items-center">
                            <div>
                                <div className="w-10"><img src={destination} alt="" /></div>
                            </div>
                            <div className=""> 
                                <details className="dropdown dropdown-top cursor-pointer dropdown-start">
                                    <summary className="m-1 text-lg font-bold text-orange-500">Destination</summary>
                                    <ul className=" shadow menu dropdown-content z-[5] backdrop-blur-lg  rounded-box md:w-52 w-44 text-white">
                                        {stations.map(station => (
                                            <li key={station.name} >
                                            {station.name}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </div>
                        </div>

                    </div>
                    </section>
                    <div>

                    </div>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Bus;