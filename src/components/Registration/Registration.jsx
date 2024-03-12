import { Link,  } from "react-router-dom";
import metro_img from "../../assets/metro_png.png";
import { useState } from "react";
import './Style.css'
import '../../App.css'
import axios from "axios";
const Registration = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChnage = e => {
        const newuser = e.target.value;
        setUsername(newuser);
    }

    const handleEmailChange = e => {
        const newmail = e.target.value;
        setEmail(newmail);
    }

    const handlePasswordChange = e => {
        const newpass = e.target.value;
        setPassword(newpass);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log(email,username,password,'from handlesubmit');
        axios.post("https://common-mrt-pass-system-production.up.railway.app/api/v1/registration", {
            username,
            email,
            password,
        })
        .then((res) => {
            console.log(res,'from axios response');
            alert(res.data.message);
            res.render('/login')
        })
        .catch((error) => {
            const errormsg=error.response.data.error.explainaton;
            console.log(error);
            alert(errormsg)
        });
    };
    
   
    return (
        <div className="reg-bg  min-h-screen  ">
            <div className="md:p-20  ">
                <div className="p-5 md:backdrop-blur-sm md:shadow-sm md:shadow-slate-400  max-w-lg mx-auto rounded-xl ">
                    <div className="text-center mb-3 ">
                        <h2 className="text-3xl text-center font-bold mb-8 text-white ">Welcome to MRT Pass System</h2>
                        <img className="w-24 mx-auto mb-3" src={metro_img} alt="" />
                        <p className="text-white">Dont have an account? Plese register here</p>
                    </div>
                    <form  className="max-w-80 mx-auto ">
                        <label onChange={handleEmailChange} className="input input-bordered flex items-center gap-2  mb-2 rounded-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text"  className="grow" placeholder="Email" value={email} name="email" />
                        </label>
                        <label onChange={handleUsernameChnage} className="input input-bordered flex items-center gap-2 mb-2 rounded-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" required className="grow" placeholder="Username" value={username} name="username" />
                        </label>
                        <label onChange={handlePasswordChange} className="input input-bordered flex items-center gap-2 mb-5 rounded-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" className="grow" placeholder="Password" value={password} name="password" />
                        </label>

                        <Link to='/login'><button onClick={handleSubmit} className="btn glass bg-blue-950 text-white text-lg px-16 ml-14">Register</button></Link>

                        <p className="mt-2 text-white ">Have an account already? click here to <span className="text-green-700 font-bold underline"><Link to='/login'>Login</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;