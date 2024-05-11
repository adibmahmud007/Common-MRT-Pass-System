
import { useState, useParams } from "react-router-dom";
import axios from "axios";

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
                console.log(res.data.message);
            })

    }

    return (
        <div>
            <section className="bg-zinc-900">
                <h1 className="text-4xl text-center font-bold text-white">Reset Password</h1>
                <div className="w-[500px] h-[350px] bg-white rounded-xl pt-5 pl-5 ">
                    <div>
                        <label className="pb-2" onChange={handlePasswordChange} htmlFor="">
                            <input className="px-4 py-2 border border-black w-[350px] " type="password" placeholder="Enter New Password" value={password} />
                        </label>
                    </div>
                    <button className="btn" onClick={handleSubmit}>Submit</button>
                </div>
            </section>
        </div>
    );
};

export default Reset;