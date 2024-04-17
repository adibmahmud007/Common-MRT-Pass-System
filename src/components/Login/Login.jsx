import { Link, useNavigate } from "react-router-dom";
import '../../App.css'
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChnage = e => {
        const newuser = e.target.value;
        setUsername(newuser);
    }

    const handlePasswordChange = e => {
        const newpass = e.target.value;
        setPassword(newpass);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log(username,password,'from handlesubmit');

        if( username && password){
            axios.post("http://localhost:8000/api/v1/login", {
                username,
                password,
            },
            {   withCredentials:true},
            )
            .then((res) => {
                console.log(res,'from axios response');
                toast.success(res.data.message);
                navigate("/home")
            })
            .catch((error) => {
                const errormsg=error.response.data.error.explanation;
                console.log(error);
                toast.error(errormsg)
            }); 
        }
       else{
        toast.error("Please fill the form to Login")
       }
    };

    return (
        <div className="bg-gradient-to-tr from-indigo-900 via-cyan-900 to-pink-900  min-h-screen font-sans  md:backdrop-blur-xl">
            <div><Toaster/></div>
            <div className="md:pt-20 ">
                <section className="md:bg-white h-[450px] md:w-4/5 mx-auto rounded-lg flex md:shadow-lg md:shadow-black">
                    <div className=" ">
                        <div className="md:pl-16 pt-16 pl-2 mt-3  ">
                            <h2 className="text-3xl font-bold text-gray-200 md:text-black ml-2">Login Here</h2>
                            <p className="md:text-slate-600 text-gray-200 mt-2 ml-2">Enter your Username and Password to Login.</p>
                        </div>
                        <form className="md:pl-16 pl-2 mt-4 md:w-1/2 " action="">
                            <label onChange={handleUsernameChnage} className="input input-bordered border-black flex items-center gap-2 md:w-96 w-[350px] mb-4  rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input  type="text" required value={username} className="grow " placeholder="Username" />
                            </label>
                            <label onChange={handlePasswordChange} className="input border-black  input-bordered flex items-center gap-2 mb-4 rounded-2xl md:w-96 w-[350px]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" required className="grow" value={password} placeholder="Password" />
                            </label>

                            <div className="md:text-left text-center">

                                <button  onClick={handleSubmit} className="px-24 py-2  border-black bg-slate-900 text-white rounded-3xl text-lg font-bold">Login</button>

                            </div>

                        </form>
                        <Link to='/'><p className="mt-3 pl-16 text-gray-200 md:text-slate-600">Dont have an account please <span className="underline text-green-600 font-bold">Register</span></p></Link>
                    </div>
                    <div className="login-bg md:w-full md:rounded-r-lg md:mx-auto md:ml-3 md:block hidden">
                        <h2 className="md:text-3xl text-black font-bold md:mt-44 pt-2 pl-2 md:text-center glow ">Log In To Get All <br />
                            Your Domestic Transportation <br />
                            Solution in a System</h2>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;