import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import "../../App.css"

import metroRail from "../../assets/Services_pictures/metroRail.jpg"
import Bus from "../../assets/Services_pictures/Bus.jpg"
import launch from "../../assets/Services_pictures/launch.jpg"
import Plane2 from "../../assets/Services_pictures/plane2.jpg"
import { Link } from "react-router-dom";


const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className="md:h-[700px] min-h-screen bg-black text-white"  >
            <p className="text-4xl text-center font-bold py-5" data-aos="flip-up">Services We Provide</p>

            <div className="md:p-10 p-2 md:grid md:grid-cols-2 gap-5">
                <Link to='/metro'><button>
                    <div className="md:pl-20 pb-3 " data-aos="fade-right">
                        <img className="w-[400px] md:h-[250px] rounded-xl" src={metroRail} alt="MetroRail" />
                        <div className=" md:w-[400px] md:h-[250px] h-[244px] rounded-xl md:ml-20 absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50">
                            <p className="text-white text-3xl font-semibold">Metro Rail Service</p>
                        </div>
                    </div>
                </button></Link>
                <Link to='/bus'><button>
                    <div className="md:pl-10 pb-3" data-aos="fade-left">
                        <img className="w-[400px] md:h-[250px] rounded-xl" src={Bus} alt="MetroRail" />
                        <div className=" md:w-[400px] md:h-[250px] h-[244px] rounded-xl md:ml-10 absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50">
                            <p className="text-white text-3xl font-semibold">Bus Service</p>
                        </div>
                    </div>
                </button></Link>

                <Link to='/launch'>
                    <button><div className="md:pl-20 pb-3" data-aos="fade-right">
                        <img className="w-[400px] md:h-[250px] rounded-xl" src={launch} alt="MetroRail" />
                        <div className=" md:w-[400px] md:h-[250px] h-[215px] rounded-xl md:ml-20 absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50">
                            <p className="text-white text-3xl font-semibold">Launch Service</p>
                        </div>
                    </div></button>
                </Link>
                <div className="md:pl-10 pb-3" data-aos="fade-left">
                    <img className="w-[400px] md:h-[250px] rounded-xl" src={Plane2} alt="MetroRail" />
                    <div className=" md:w-[400px] md:h-[250px] h-[205px] rounded-xl md:ml-10 absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50">
                        <p className="text-white text-3xl font-semibold">Domestic Air Service</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;