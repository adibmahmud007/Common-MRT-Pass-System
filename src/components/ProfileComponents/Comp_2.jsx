import { useState } from "react";
import "../../App.css"
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const Comp_2 = () => {
    const [FullName, setFullname] = useState();
    const [phoneNumber, setPhonenumber] = useState();
    const [address, setAddress] = useState();
    const [dateOfBirth, setBirth] = useState();
    const [postCode, setPost] = useState();

    const handleNameChange = (e) => {
        const newfullname = e.target.value;
        setFullname(newfullname)
    }
    const handleAddressChange = (e) => {
        const newaddress = e.target.value;
        setAddress(newaddress);

    }
    const handleBirthChange = (e) => {
        const newbirth = e.target.value;
        setBirth(newbirth);
    }
    const handlePostChange = (e) => {
        const newpost = e.target.value;
        setPost(newpost);
    }
    const handleNumberChange = (e) => {
        const newphonenumber = e.target.value;
        setPhonenumber(newphonenumber);
    
    }

    const handleSubmit=()=>{
        axios.patch("http://localhost:8000/api/v1/users/profile/update", {
            FullName, phoneNumber, address, dateOfBirth, postCode
            },{withCredentials:true})
            .then((res) => {
                console.log(res,'from axios response');
                toast.success('Profile created successfully');
                // navigate("/login")
            })
            .catch((error) => {
                const errormsg=error.response.data.error.explanation;
                console.log(error);
                toast.error(errormsg)
            });
    }


    console.log(FullName, phoneNumber, address, dateOfBirth, postCode);



    return (

        <div className="w-full h-[715px] profile_bg text-white">
            <div className="text-center">
            <div><Toaster/></div>
                <h1 className="text-3xl pt-4 font-bold">Profile Update</h1>
                <section className="md:w-[530px] h-[450px] rounded-xl backdrop-blur-sm mx-auto mt-5">
                    <div className="text-left pl-5 pt-5">
                        <div className="w-72 pt-5 pl-5">
                            <div className="relative w-full min-w-[400px] mt-6 ml-2 h-10">
                                <input
                                    onChange={handleNameChange} name="fullname" value={FullName}
                                    className="peer backdrop-blur-lg w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-3.5 rounded-[7px] border-white focus:border-gray-200"
                                    placeholder=" " /><label
                                        className="flex w-full font-semibold h-full select-none pointer-events-none absolute left-0  !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-100 peer-focus:text-gray-100 before:border-blue-gray-200 peer-focus:before:!border-gray-100 after:border-blue-gray-200 peer-focus:after:!border-gray-100">Full Name
                                </label>
                            </div>
                            <div className="relative w-full min-w-[400px] mt-6 ml-2 h-10">
                                <input
                                    onChange={handleNumberChange} name="fullname" value={phoneNumber}
                                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-3.5 rounded-[7px] border-gray-100 focus:border-gray-100"
                                    placeholder=" " /><label
                                        className="flex w-full font-semibold h-full select-none pointer-events-none absolute left-0  !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-100 peer-focus:text-gray-100 before:border-blue-gray-200 peer-focus:before:!border-gray-100 after:border-blue-gray-200 peer-focus:after:!border-gray-100">Phone Number
                                </label>
                            </div>
                            <div className="relative w-full min-w-[400px] mt-6 ml-2 h-10">
                                <input
                                    onChange={handleAddressChange} name="fullname" value={address}
                                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-3.5 rounded-[7px] border-gray-100 focus:border-gray-100"
                                    placeholder=" " /><label
                                        className="flex w-full font-semibold h-full select-none pointer-events-none absolute left-0  !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-100 peer-focus:text-gray-100 before:border-blue-gray-200 peer-focus:before:!border-gray-100 after:border-blue-gray-200 peer-focus:after:!border-gray-100">Address
                                </label>
                            </div>
                            <div className="relative w-full min-w-[400px] mt-6 ml-2 h-10">
                                <input
                                    onChange={handleBirthChange} name="fullname" value={dateOfBirth}
                                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-3.5 rounded-[7px] border-gray-100 focus:border-gray-100"
                                    placeholder=" " /><label
                                        className="flex w-full font-semibold h-full select-none pointer-events-none absolute left-0  !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-100 peer-focus:text-gray-100 before:border-blue-gray-200 peer-focus:before:!border-gray-100 after:border-blue-gray-200 peer-focus:after:!border-gray-100">Date of Birth
                                </label>
                            </div>
                            <div className="relative w-full min-w-[400px] mt-6 ml-2 h-10">
                                <input
                                    onChange={handlePostChange} name="fullname" value={postCode}
                                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-3.5 rounded-[7px] border-gray-100 focus:border-gray-100"
                                    placeholder=" " /><label
                                        className="flex w-full font-semibold h-full select-none pointer-events-none absolute left-0  !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-100 peer-focus:text-gray-100 before:border-blue-gray-200 peer-focus:before:!border-gray-100 after:border-blue-gray-200 peer-focus:after:!border-gray-100">Post Code
                                </label>
                            </div>
                            <div className="px-6 py-4 pl-2">
                                <button onClick={handleSubmit}
                                 className="px-5 py-3 bg-green-100 text-black rounded-xl hover:bg-green-500 text-sm font-semibold">Update Profile</button>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Comp_2;