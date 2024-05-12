
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
        <div className="md:mt-8 " >
            {/* <svg className="Wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fillOpacity="1" d="M0,160L30,181.3C60,203,120,245,180,240C240,235,300,181,360,176C420,171,480,213,540,224C600,235,660,213,720,181.3C780,149,840,107,900,112C960,117,1020,171,1080,208C1140,245,1200,267,1260,266.7C1320,267,1380,245,1410,234.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> */}
            <div data-aos='fade-up' className="md:pl-20 pl-10 ">
                <p className="md:text-7xl text-3xl font-extrabold  pt-16 md:pt-24 play-bold" ><h1 className="grad_text">All Your Transportation <br /> need is now available<br /> in a system.</h1></p>


                <div className='scroll-smooth delay-1000  py-12 md:py-20 text-center text-white'>
                    <a onClick={() => smoothScroll('#services')} href="#services"> <button className="font-semibold text-center text-sm md:text-lg white Button" >Learn More</button></a>
                </div>

            </div>
        </div>
    );
};

export default HomeBG;