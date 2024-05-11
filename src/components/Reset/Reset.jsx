
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const Reset = () => {
    const [password, setPassword] = useState('');


    const handlePasswordChange = e => {
        const newpass = e.target.value;
        setPassword(newpass);
    }
    const { username, token } = useParams();

    const handleSubmit = () => {

        axios.post(`http://localhost:8000/api/v1/password/reset_password/${username}/${token}`, {
            password
        }, { withCredentials: true })
            .then(res => {
                toast.success(res.data.message)
            })

    }

    return (
        <div>
            <div>{Toaster}</div>
            <section className="bg-zinc-900 h-screen ">
                <h1 className="text-4xl text-center font-bold text-white pb-4">Reset Password</h1>
                <div className="w-[450px] h-[150px] bg-white rounded-xl pt-5 pl-5 mx-auto  ">
                    <div>
                        <label className="mb-2" onChange={handlePasswordChange} htmlFor="">
                            <input className="px-4 py-2 border rounded-lg  border-black w-[350px] " type="password" placeholder="Enter New Password" value={password} />
                        </label>
                    </div>
                    <div className="mt-2">
                        <button className="btn" onClick={handleSubmit}>Submit</button>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reset;