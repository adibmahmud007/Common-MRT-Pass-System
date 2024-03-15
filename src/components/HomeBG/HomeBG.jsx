
import "../../App.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
const HomeBG = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className="home_bg" >
            <div data-aos='fade-up'>
                <p className="text-6xl font-extrabold text-slate-300 text-center glow pt-16 md:pt-28 home-font" >All Your Transportation <br /> need is now available<br /> in a system.</p>

                <div className="text-center py-12 md:py-16 text-white">
                    <button className="font-semibold text-center text-sm md:text-lg Button" >Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBG;