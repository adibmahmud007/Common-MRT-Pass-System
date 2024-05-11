
import { useState,useParams } from "react";
import axios from "axios";

const Reset = () => {
    const [password, setPassword] = useState('');


    const handlePasswordChange = e => {
        const newpass = e.target.value;
        setPassword(newpass);
    }
    const { username,token } = useParams();

    const handleSubmit=()=>{
        
            axios.post(`http://localhost:8000/api/v1/password/reset_password/${username}/${token}`,{
                password
            },{withCredentials:true}) 
            .then(res=>{
                console.log(res.data.message);
            })
        
    }

    return (
        <div>
            <section>
                <label onChange={handlePasswordChange} htmlFor="">
                    <input className="px-4 py-2 border border-black w-[350px] " type="password" value={password} />
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </section>
        </div>
    );
};

export default Reset;