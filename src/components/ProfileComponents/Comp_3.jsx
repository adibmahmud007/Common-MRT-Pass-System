import { useState,useEffect } from "react";
import axios from "axios";

const Comp_3 = () => {

    const [userInfo, setUserInfo] = useState({});
    const dateOfBirth=new Date(userInfo.dateOfBirth);
    const formattedDateTime = `${dateOfBirth.getFullYear()}-${String(dateOfBirth.getMonth() + 1).padStart(2, '0')}-${String(dateOfBirth.getDate()).padStart(2, '0')} `;
    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/users/profile", { withCredentials: true })
            .then(res => {
                setUserInfo(res.data.data);
                console.log(res.data.data);
            })
            .catch(error => {
                console.error('Error fetching user info:', error);
            });
    }, []);

    return (
        <div className="w-full h-[715px] bg-zinc-300 text-black pt-3">
            <h1 className="text-3xl text-center font-bold">Show Profile Details</h1>
            <section className="w-[550px] h-[350px] bg-white mx-auto mt-11 rounded-xl">
                <div className="text-xl px-16 pt-4 flex gap-4 items-center">
                    <h1 className="font-bold text-2xl">Full Name </h1>
                    <p className="border-[2px] rounded-lg border-black py-1 px-2">{userInfo.FullName}</p>
                </div>
                <div className="text-xl px-16 pt-4 flex gap-4 items-center">
                    <h1 className="font-bold text-2xl">Phone Number </h1>
                    <p className="border-[2px] rounded-lg border-black py-1 px-2">{userInfo.phoneNumber}</p>
                </div>
                <div className="text-xl px-16 pt-4 flex gap-4 items-center">
                    <h1 className="font-bold text-2xl">Address </h1>
                    <p className="border-[2px] rounded-lg border-black py-1 px-2">{userInfo.address}</p>
                </div>
                <div className="text-xl px-16 pt-4 flex gap-4 items-center">
                    <h1 className="font-bold text-2xl">Date of Birth</h1>
                    <p className="border-[2px] rounded-lg border-black py-1 px-2">{formattedDateTime}</p>
                </div>
                <div className="text-xl px-16 pt-4 flex gap-4 items-center">
                    <h1 className="font-bold text-2xl">Post Code</h1>
                    <p className="border-[2px] rounded-lg border-black py-1 px-2">{userInfo.postCode}</p>
                </div>
                
            </section>
        </div>
    );
};

export default Comp_3;