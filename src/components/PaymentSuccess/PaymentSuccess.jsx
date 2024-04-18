import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const PaymentSuccess = () => {
    const { tran_Id } = useParams();
    return (
        <div className="bg-zinc-800 shadow-zinc-700">
            <div className="flex flex-col min-h-screen">
                <Header></Header>
                <div className="text-center text-white pt-8 font-semibold">
                    <h1 className="text-3xl pb-5"> Recharge Successful</h1>
                    <p className="text-xl">Transaction id: {tran_Id}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PaymentSuccess;