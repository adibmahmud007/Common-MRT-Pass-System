import  { useState, useEffect } from "react";
import axios from 'axios';
import "../../App.css";
import QrReader from 'react-qr-scanner';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import toast from "react-hot-toast";

const MetroRail = () => {
    const [stations, setStations] = useState([]);
    const [originStation, setOriginStation] = useState("Uttara-North");
    const [destinationStation, setDestinationStation] = useState("Motijheel");
    const [numOfPassenger, setNumOfPassenger] = useState();
    const [qrData, setQrData] = useState();
    const [fare, setTotalCost] = useState();
    const [transportName] = useState('Dhaka-Metro');
    const [transportMedium] = useState('metro');
    const [scanCount, setScanCount] = useState(0);
    const [qrExpired, setQrExpired] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/stations/metro")
            .then(res => {
                setStations(res.data.data);
            })
            .catch(error => {
                console.error('Error fetching card info:', error);
            });
    }, []);

    const handleSelectPerson = (e) => {
        const person = e.target.value;
        setNumOfPassenger(person);
    }

    const handleDestinationSelect = (stationName) => {
        setDestinationStation(stationName);
    }

    const handleStationSelect = (stationName) => {
        setOriginStation(stationName);
    };

    const handleScan = (data) => {
        if (data && !qrExpired) {
            setScanCount(scanCount + 1);
            setQrData(data);
            if (scanCount === 1) {
                setQrExpired(true);
            }
        }
    };

    const handleError = (error) => {
        console.log(error);
    };

    useEffect(() => {
        if (originStation && destinationStation && numOfPassenger) {
            axios.post("http://localhost:8000/api/v1/fare/calculate/metro", {
                originStation,
                destinationStation,
                numOfPassenger
            }, { withCredentials: true })
                .then(res => {
                    setTotalCost(res.data.data);
                })
                .catch(error => {
                    console.error('Error fetching fare:', error);
                });
        }
    }, [originStation, destinationStation, numOfPassenger]);

    const handlePay = () => {
        axios.post("http://localhost:8000/api/v1/fare/pay", {
            transportName,
            originStation,
            destinationStation,
            numOfPassenger,
            transportMedium,
            fare
        }, { withCredentials: true })
            .then(response => {
                toast.success('Pay successful');
                console.log(response.data.data);
            })
            .catch(error => {
                toast.error(error.response.data.error.explanation)
                console.error('Error fetching data:', error);
            });
    }

    return (
        <div className="metro_bg">
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
                                <p>{originStation}</p>
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
                                <p>{destinationStation}</p>
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
                    <p>Price: {fare} TK</p>
                </div>
                <div className="pl-5 md:pl-32 pt-3 md:pt-6 text-white  text-center">
                    <button onClick={handlePay} className="Buy-button">Buy</button>
                </div>
                <div>
                    {qrExpired ? (
                        <p className="text-white text-center">QR code has expired</p>
                    ) : (
                        <>
                            <img className="mt-4 px-40 max-h-40" src={qrData} alt="QR code" />
                            <QrReader
                                delay={300}
                                onError={handleError}
                                onScan={handleScan}
                                style={{ width: '100%' }}
                            />
                        </>
                    )}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MetroRail;
