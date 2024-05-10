import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const Comp_4 = () => {
    const navigate = useNavigate();
    const handleDelete = () => {
        axios.delete("http://localhost:8000/api/v1/users", { withCredentials:true })
            .then((res) => {
                console.log(res.data, 'from axios response');
                toast.success('Profile Deleted Successfully');
                navigate("/")
            })
            .catch((error) => {
                const errormsg = error.response.data.error.explanation;
                console.log(error);
                toast.error(errormsg)
            });
    }

    return (
        <div className="w-full h-[715px] bg-zinc-300 text-black">
            <div><Toaster /></div>
            <h1 className="text-4xl pt-4 text-center font-bold">Delete User Account</h1>
            <div className="text-center translate-y-10">
                <h1 className=" mt-14 pb-5 text-3xl font-bold">Click the button below to delete profile</h1>
                <button onClick={handleDelete}
                    className="px-5 py-3 bg-red-500 font-semibold text-lg rounded-xl ">Delete Account</button>
            </div>
        </div>
    );
};

export default Comp_4;