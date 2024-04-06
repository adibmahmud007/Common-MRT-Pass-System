
import "../../App.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
const HomeBG = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className=" " >
            <div data-aos='fade-up' className="md:pl-20 pl-10 ">
                <p className="md:text-6xl text-3xl font-extrabold  pt-16 md:pt-24 play-bold" ><h1 className="grad_text">All Your Transportation <br /> need is now available<br /> in a system.</h1></p>

                <div className=" py-12 md:py-16 text-center text-white">
                    <button className="font-semibold text-center text-sm md:text-lg white Button" >Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBG;