
import "../../App.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
const HomeBG = () => {

    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        const targetPosition = element.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 2000; // Adjust the duration as needed (in milliseconds)
        let startTimestamp;

        const animation = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;

            const progress = timestamp - startTimestamp;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));

            if (progress < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    const easeInOutCubic = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    };

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className=" " >
            <div data-aos='fade-up' className="md:pl-20 pl-10 ">
                <p className="md:text-6xl text-3xl font-extrabold  pt-16 md:pt-24 play-bold" ><h1 className="grad_text">All Your Transportation <br /> need is now available<br /> in a system.</h1></p>


                <div className='scroll-smooth delay-1000  py-12 md:py-16 text-center text-white'>
                    <a onClick={() => smoothScroll('#services')} href="#services"> <button className="font-semibold text-center text-sm md:text-lg white Button" >Learn More</button></a>
                </div>

            </div>
        </div>
    );
};

export default HomeBG;