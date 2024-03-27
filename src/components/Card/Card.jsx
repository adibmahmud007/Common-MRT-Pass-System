import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../../App.css";
// import { FcSimCardChip } from "react-icons/fc";
import card_chip from "../../assets/card_chip_3.png"
import card_circle from "../../assets/card_circle.png"
// import { useLoaderData } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";


const Card = () => {
    // const card = useLoaderData();

    const [card,setCard]=useState('');
    // useEffect(()=>{
    //     fetch('https://common-mrt-pass-system-production.up.railway.app/api/v1/card/cardInfo')
    //     .then(res => res.json())
    //     .then(data => setCard(data));
    // },[])

    
        axios.get("https://common-mrt-pass-system-production.up.railway.app/api/v1/card/cardInfo")
            .then(res => {
                setCard(res.data.content); 
                console.log(res.data)
            })
            .catch(error => {
                console.error('Error fetching card info:', error);
            });
    
    console.log(card,'from useeffect getting the cardinfo');

    // const url = ;

    const handleGenerate = () => {
        axios.post("https://common-mrt-pass-system-production.up.railway.app/api/v1/card/generate",{},{ withCredentials: true })
            .then(response => {
                toast.success(response.message);
                
                console.log(response.data, 'from axios card'); // This will log the response data
            })
            .then(data => setCard(data))
            .catch(error => {
                // Handle error
                console.error('Error fetching data:', error);
            });
    }
    return (
        <div className="bg-zinc-900 ">
            <div className="flex flex-col min-h-screen">
                <div className="shadow-sm shadow-zinc-800">
                    <Header></Header>
                </div>
                <div className="fleX md:mx-[100px] mx-[75px] justify-between md:mt-24 mt-8 ">
                    <div className="md:text-left text-center md:pt-10">
                        <h1 className="text-3xl text-white font-semibold">Card Details</h1>
                        <div className="text-white pt-4">
                            <h1 className="pb-3 text-xl font-semibold">Username</h1>
                            <div className="flex gap-10 md:gap-40">
                                <div className="pt-3">
                                    <p className="text-sm font-semibold">Balance</p>
                                    <h1 className="text-2xl font-bold">$1000</h1>
                                </div>
                                <div className="mt-5">
                                    <button onClick={handleGenerate} className="btn">Generate Card</button>
                                </div>
                            </div>

                        </div>
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
                                    <pre></pre>
                                    <h1 className="text-lg text-white  pt-4">Username</h1>
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