import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../../App.css";
// import { FcSimCardChip } from "react-icons/fc";
import card_chip from "../../assets/card_chip_3.png"
import card_circle from "../../assets/card_circle.png"
// import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";


const Card = () => {

    const [card, setCard] = useState('');

    const [cardno, setCardno] = useState('');
    const [amount, setAmount] = useState();

    console.log(cardno, amount, 'from recharge')


    const handleCardChange = (e) => {
        const newcardno = e.target.value;
        setCardno(newcardno);
    }
    const handleAmountChange = (e) => {
        const newamount = e.target.value;
        setAmount(newamount);
    }


    const handleDetails = () => {
        axios.get("http://localhost:8000/api/v1/card/cardInfo", { withCredentials: true })
            .then(res => {
                setCard(res.data); // Assuming response data is what you need to store
                console.log(res.data);
                // setGenerate(false);
            })
            .catch(error => {
                console.error('Error fetching card info:', error);
            });
    }

    // Ensure card has data before accessing nested properties
    const username = card ? card.data.username : 'Username';
    const cardnumber = card ? card.data.cardnumber : 'xxx xxx xxx xxx';
    const balance = card ? card.data.balance : '000'
    // if (generate === true) {

    // }

    // console.log(card.data.username,'from useeffect getting the cardinfo');



    // const url = ;

    const handleGenerate = () => {
        
        axios.post("http://localhost:8000/api/v1/card/generate", {}, { withCredentials: true })
            .then(response => {
                toast.success('Card Generate successful');
                // setGenerate(true);
                console.log(response.data, 'from axios card'); // This will log the response data
            })

            .catch(error => {
                // Handle error
                toast.error('Card already generated')
                console.error('Error fetching data:', error);
            });
    }

    const handleRecharge = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/v1/card/recharge", {
            cardno,
             amount,
        }, { withCredentials: true })
            .then(response => {
                toast.success('Card Recharge successful');
                // setGenerate(true);
                console.log(response.data, 'from axios card'); // This will log the response data
            })

            .catch(error => {
                // Handle error
                toast.error('Card already generated')
                console.error('Error fetching data:', error);
            });
    }
    return (
        <div className="bg-zinc-900 ">
            <div className="flex flex-col md:min-h-screen h-[650px]">
                <div className="shadow-sm shadow-zinc-800">
                    <Header></Header>
                </div>
                <div className="fleX md:mx-[200px] mx-[75px] justify-between md:mt-24 mt-5 ">
                    <div className="md:text-left text-center md:pt-10">
                        <h1 className="text-3xl text-white font-semibold">Card Details</h1>
                        <div className="text-white md:pt-4">
                            <h1 className="pb-3 text-xl font-semibold">{username}</h1>
                            <div className="md:flex gap-10 md:gap-36">
                                <div className="pt-3 flex gap-7">
                                    <div className="md:pl-0 pl-5">
                                        <p className="text-sm font-semibold">Balance</p>
                                        <h1 className="text-2xl font-bold">${balance}</h1>
                                    </div>
                                    <div className="md:mt-1 mt-2">
                                        <button onClick={handleDetails} className="btn pl-2">Show Details</button>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <button onClick={handleGenerate} className="btn">Generate Card</button>
                                </div>
                            </div>

                        </div>
                        <section className="pt-4">
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Recharge Card</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Recharge Here</h3>
                                    <div className="">
                                        <form method="dialog">
                                            <div className="pb-2 ">
                                                <label onChange={handleCardChange} className="input input-bordered border-black flex items-center gap-2 md:w-96 w-[350px] mb-4  rounded-2xl">

                                                    <input type="text" required value={cardno} className="grow " placeholder="Username" />
                                                </label>
                                                <label onChange={handleAmountChange} className="input input-bordered border-black flex items-center gap-2 md:w-96 w-[350px] mb-4  rounded-2xl">

                                                    <input type="text" required value={amount} className="grow " placeholder="Username" />
                                                </label>

                                            </div>
                                            <div className="flex gap-60">
                                                <button onClick={handleRecharge} className="btn">Recharge</button>
                                                <button className="btn">Close</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </section>
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
                                    <pre>{cardnumber}</pre>
                                    <h1 className="text-lg text-white  pt-4">{username}</h1>
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