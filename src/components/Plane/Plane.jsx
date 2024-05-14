/* eslint-disable no-const-assign */
import "../../App.css"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import doublegreen from "../../assets/dourbe-arrow-green.png"
// import adult from "../../assets/adult.png"
// import { FaRegUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from 'axios';
// import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import DatePicker from "react-date-picker";
const Plane = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    // <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    const departureTime = selectedDate.toLocaleDateString()

    // const [adcount, setCount] = useState(0);
    // const [chcount, setchCount] = useState(0);
    const [stations, setStations] = useState([]);
    const [airplanes, setAirplanes] = useState([]);
    // const [departureTimes, setTimes] = useState([]);
    // const [departureTime, setTime] = useState();
    const [departureAirport, setOriginStation] = useState("Hazrat Shahjalal International Airport(DA)");
    const [arrivalAirport, setDestinationStation] = useState("Osmani International Airport(SYL)");
    const [name, setAirplaneName] = useState("");
    const [numOfPassenger, setNumOfPassenger] = useState();
    const [fare, settotalCost] = useState();
    const uniqueAirplanes = [...new Set(airplanes.map(airplane => airplane.name))];
    const originStation = departureAirport;
    const destinationStation = arrivalAirport;
    const transportName = name;
    const transportMedium = stations.length > 0 ? stations[0].transport_medium : undefined;

    // const chinc = () => { setchCount(chcount => chcount + 1) }
    // const chdec = () => { setchCount(chcount => chcount - 1) }

    // // eslint-disable-next-line no-const-assign
    // const inc = () => { setCount(adcount => adcount + 1) }
    // const dec = () => { setCount(adcount => adcount - 1) }
    const handleSelectPerson = e => {
        const person = e.target.value;
        setNumOfPassenger(person);
        console.log(person, 'No of persons from radio');
    }
    const handleDestinationSelect = (stationName) => {
        setDestinationStation(stationName);
    }

    const handleStationSelect = (stationName) => {
        setOriginStation(stationName);
    };
    const handleAirplaneNameSelect = (Name) => {
        setAirplaneName(Name);
    };
    // const handleTimeSelect = (Time) => {
    //     setTime(Time);
    // };

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/stations/airplane")
            .then(res => {
                setStations(res.data.data);
                console.log(res.data.data);
            })
            .catch(error => {
                console.error('Error fetching airplane info:', error);
            });
    }, []);

    useEffect(() => {
        const fetchAirplanes = async () => {
            try {
                const response = await axios.post("http://localhost:8000/api/v1/services/airplanes/info", {
                    departureAirport,
                    arrivalAirport
                }, { withCredentials: true });
                if (Array.isArray(response.data.data)) {
                    setAirplanes(response.data.data);
                }

                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching airplane:', error);
            }
        };
        fetchAirplanes();
    }, [departureAirport, arrivalAirport]);

    useEffect(() => {
        const fetchTime = async () => {
            try {
                const response = await axios.post("http://localhost:8000/api/v1/services/airplanes/departingInfo", {
                    name,
                    departureAirport,
                    arrivalAirport
                }, { withCredentials: true });

                if (Array.isArray(response.data.data)) {
                    // setTimes(response.data.data);
                }
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching airplane:', error);
            }
        };
        fetchTime();
    }, [name, departureAirport, arrivalAirport]);


    if (departureAirport !== undefined && arrivalAirport !== undefined && departureTime !== undefined && numOfPassenger !== undefined) {
        console.log(name, departureAirport, arrivalAirport, departureTime, numOfPassenger);
        axios.post("http://localhost:8000/api/v1/fare/calculate/airplane", {
            name,
            departureAirport,
            arrivalAirport,
            departureTime,
            numOfPassenger

        }, { withCredentials: true })
            .then(res => {
                settotalCost(res.data.data)
                console.log(res.data.data);
            })
            .catch(error => {
                console.error('Error fetching fare:', error);
            });
    }

    const handlePay = () => {

        axios.post("http://localhost:8000/api/v1/fare/pay", { transportName, originStation, destinationStation, numOfPassenger, transportMedium, fare }, { withCredentials: true })
            .then(response => {
                toast.success('Pay successful');
                console.log(response.data, 'from axios pay'); // This will log the response data
            })

            .catch(error => {
                toast.error(error.response.data.error.explanation)
                console.error('Error fetching data:', error);
            });
    }


    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (seat) => {
        const index = selectedSeats.indexOf(seat);
        if (index === -1) {
            setSelectedSeats([...selectedSeats, seat]);
        } else {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        }
    };

    // Example: Generate seats for six rows
    const rows = ['A', 'B', 'C', 'D', 'E', 'F','G','I'];
    const seatsPerRow = 7;
    const gapBetweenRows = 20;

    return (


        <div className="plane_bg ">
            <div className="flex flex-col px-1 py-2 min-h-screen">
                <Header></Header>
                <section className="md:w-[700px] md:h-[480px] mx-auto p-2 bg-white opacity-75  md:translate-y-14 rounded-md">
                    <div className="text-black px-5 py-2">
                        <h1 className="md:text-4xl text-3xl font-bold pb-2 font-serif">Select Your preferable Flight</h1>
                        {/* <p className="text-sm">Set your origin and destination to travel</p> */}
                    </div>
                    <section className="px-5 py-1 text-black">

                        <div className="md:flex pt-3 gap-5">
                            <div className="border border-black p-2">
                                <p className="text-sm pl-2 font-semibold">Flying From: {departureAirport}</p>
                                {/* <p>Enter the type of cabin</p> */}
                                <details className="dropdown cursor-pointer pb-2 md:pb-0">

                                    <summary className=" bg-white w-[350px] md:w-[250px] text-black p-2 rounded-sm">Select Airport</summary>
                                    <ul className="p-2 text-black shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                        {stations.map(station => (
                                            <li key={station.name} onClick={() => handleStationSelect(station.name)}>
                                                {station.name}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </div>
                            <img className="md:translate-x-0 translate-x-64 w-10 h-14 pt-3" src={doublegreen} alt="" />
                            <div className="border border-black p-2">
                                <p className="text-sm pl-2 font-semibold">Flying From: {arrivalAirport}</p>
                                {/* <p>Enter the type of cabin</p> */}
                                <details className="dropdown cursor-pointer pb-2 md:pb-0">

                                    <summary className=" bg-white w-[300px] md:w-[250px] text-black p-2 rounded-sm">Select Airport</summary>
                                    <ul className="p-2 text-black shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-62">
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
                        <div className="md:pt-0 pt-3 pb-3 mb-3 px-3 text-left border border-black">
                            <h3 className="text-black text-sm font-semibold">Airplane:{name}</h3>
                            <details className="dropdown cursor-pointer pb-2 md:pb-0">

                                <summary className=" bg-white w-[300px] md:w-[250px] text-black p-2 rounded-sm">Select airplane</summary>
                                <ul className="p-2 text-black shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    {uniqueAirplanes.map(Name => (
                                        <li key={Name} onClick={() => handleAirplaneNameSelect(Name)}>
                                            {Name}
                                        </li>
                                    ))}
                                </ul>
                            </details>

                        </div>
                        <div className="md:pt-0   px-3 mb-2 text-left border border-black">
                            <h3 className="text-black text-sm font-semibold">Departing:{departureTime}</h3>
                            <details className="dropdown cursor-pointer pb-2 md:pb-0">

                                <summary className=" bg-white w-[300px] md:w-[250px] text-black rounded-sm">Select time</summary>
                                {/* <ul className="p-2 text-black shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    {departureTimes.map(time => {
                                            const departureDateTime = new Date(time);
                                            const formattedDateTime = `${departureDateTime.getFullYear()}-${String(departureDateTime.getMonth() + 1).padStart(2, '0')}-${String(departureDateTime.getDate()).padStart(2, '0')} ${String(departureDateTime.getHours()).padStart(2, '0')}:${String(departureDateTime.getMinutes()).padStart(2, '0')}:${String(departureDateTime.getSeconds()).padStart(2, '0')}`;
                                            return (
                                                <li key={time} onClick={() => handleTimeSelect(formattedDateTime)}>
                                                    {formattedDateTime}
                                                </li>
                                            );
                                        })}
                                    </ul> */}
                                <div className="border-black">
                                    <h1>Select a Date</h1>
                                    <DatePicker
                                        className="text-black border-black"
                                        selected={selectedDate}
                                        onChange={(date) => setSelectedDate(date)}
                                        showTimeSelect
                                        dateFormat="MM/dd/yyyy"
                                    />
                                </div>
                            </details>
                        </div>
                    </section>
                    <section className="md:flex gap-12">
                        <div className="md:pt-0 pt-4">

                            <section className="flex gap-x-36">
                                <div className="text-black  pl-5">
                                    <p className="text-sm font-bold md:py-2">Persons:</p>
                                    <div className="pt-3">
                                        <label className="radio border-none" htmlFor="1"><input onChange={handleSelectPerson} type="radio" name="radio-1" id="1" value='1' />1</label>
                                        <label className="pl-6 border-none radio" htmlFor="2"><input onChange={handleSelectPerson} type="radio" name="radio-1" id="2" value='2' />2</label>
                                        <label className="pl-6 border-none radio" htmlFor="3"><input onChange={handleSelectPerson} type="radio" name="radio-1" id="3" value='3' />3</label>
                                        <label className="pl-6 border-none radio" htmlFor="4"><input onChange={handleSelectPerson} type="radio" name="radio-1" id="4" value='4' />4</label>
                                        <label className="pl-6 border-none radio" htmlFor="5"><input onChange={handleSelectPerson} type="radio" name="radio-1" id="5" value='5' />5</label>
                                    </div>
                                </div>
                                <div className="md:pt-0 ml-2 pt-3 pb-3 mb-3 px-3 text-left border border-black w-[280px]">
                                    <h3 className="text-black text-sm font-semibold">Selected Seat:{selectedSeats.join(', ')}</h3>
                                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                    <button className=" font-bold cursor-pointer" onClick={() => document.getElementById('my_modal_4').showModal()}>Select Seat</button>
                                    <dialog id="my_modal_4" className="modal">
                                        <div className="modal-box w-11/12 max-w-5xl">
                                            <div>
                                                <h1 className="text-2xl font-semibold mb-4">Select your seat</h1>
                                                <div className="flex flex-col items-center">
                                                    {rows.map((row, rowIndex) => (
                                                        <div key={row} className="flex mb-2" style={{ marginBottom: rowIndex < rows.length - 1 ? `${gapBetweenRows}px` : 0 }}>
                                                            {Array.from({ length: seatsPerRow }, (_, index) => {
                                                                const seatNumber = index + 1;
                                                                const seatId = `${row}${seatNumber}`;
                                                                const isSelected = selectedSeats.includes(seatId);
                                                                const seatStyles = isSelected
                                                                    ? 'bg-blue-500 text-white'
                                                                    : 'bg-gray-200';
                                                                return (
                                                                    <div
                                                                        key={seatId}
                                                                        className={`w-8 h-8 border rounded-full flex items-center justify-center mx-1 cursor-pointer ${seatStyles}`}
                                                                        onClick={() => handleSeatClick(seatId)}
                                                                    >
                                                                        {seatId}
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="mt-4">
                                                    <p className="text-sm">Selected seats: {selectedSeats.join(', ')}</p>
                                                </div>
                                                
                                            </div>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>

                                </div>
                            </section>
                            <div className="pl-4 pt-2">
                                <p>Price:{fare}</p>
                            </div>
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

export default Plane;