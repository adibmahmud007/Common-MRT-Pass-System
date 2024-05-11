/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import img1 from '../../assets/images/img_1.jpg';
import img2 from '../../assets/images/img_2.jpg';
import trainImg1 from '../../assets/images/train_img_1.jpg';
import trainImg2 from '../../assets/images/train_img_2.jpg';
import airplaneImg1 from '../../assets/images/airplane_img_1.jpg';
import airplaneImg2 from '../../assets/images/airplane_img_2.jpg';
import launchImg1 from '../../assets/images/launch_img_1.jpg';
import launchImg2 from '../../assets/images/launch_img_2.jpg';

const Blog = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % 8);
        }, 3000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const slides = [
        { src: img1, alt: 'Slide 1', type: 'bus', content: "Dhaka, the vibrant heart of Bangladesh, relies heavily on its intricate bus service network to facilitate the daily movement of its vast population. The city's bus system is a vital cog in its transportation machinery, serving as a primary mode of travel for millions of residents and commuters. Dhaka's bus fleet is diverse, ranging from traditional, colorful double-decker buses to modern, air-conditioned coaches, catering to the diverse needs of passengers. Despite grappling with challenges like traffic congestion and inadequate infrastructure, the city's bus service perseveres, providing an essential lifeline for citizens navigating its bustling streets. From bustling business districts to serene residential neighborhoods, Dhaka's buses traverse every corner, linking communities and enabling access to essential services, education, and employment opportunities. As Dhaka continues to evolve and grow, its bus service remains a vital artery, ensuring the city remains connected and accessible to all." },
        { src: img2, alt: 'Slide 2', type: 'bus', content: "Dhaka, the vibrant heart of Bangladesh, relies heavily on its intricate bus service network to facilitate the daily movement of its vast population. The city's bus system is a vital cog in its transportation machinery, serving as a primary mode of travel for millions of residents and commuters. Dhaka's bus fleet is diverse, ranging from traditional, colorful double-decker buses to modern, air-conditioned coaches, catering to the diverse needs of passengers. Despite grappling with challenges like traffic congestion and inadequate infrastructure, the city's bus service perseveres, providing an essential lifeline for citizens navigating its bustling streets. From bustling business districts to serene residential neighborhoods, Dhaka's buses traverse every corner, linking communities and enabling access to essential services, education, and employment opportunities. As Dhaka continues to evolve and grow, its bus service remains a vital artery, ensuring the city remains connected and accessible to all." },
        { src: trainImg1, alt: 'Slide 3', type: 'train', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur qui nam, vero amet repellendus delectus molestias maiores animi ab quod libero suscipit asperiores beatae accusantium aliquam minima. A doloremque earum asperiores, ducimus voluptatem odio sequi dolores, quaerat voluptatibus exercitationem tempora? Praesentium laudantium maxime natus explicabo eligendi ipsa mollitia, cupiditate nostrum sit reiciendis? Provident inventore assumenda, quidem accusantium quibusdam ab odit obcaecati repellendus aspernatur. Aut error asperiores, at illo enim, inventore neque deserunt cupiditate ducimus minus eius. Voluptates enim asperiores nobis assumenda. Autem harum adipisci eveniet minima corrupti ullam ab incidunt fugiat fugit, vero alias? Officiis labore natus omnis voluptates!' },
        { src: trainImg2, alt: 'Slide 4', type: 'train', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur qui nam, vero amet repellendus delectus molestias maiores animi ab quod libero suscipit asperiores beatae accusantium aliquam minima. A doloremque earum asperiores, ducimus voluptatem odio sequi dolores, quaerat voluptatibus exercitationem tempora? Praesentium laudantium maxime natus explicabo eligendi ipsa mollitia, cupiditate nostrum sit reiciendis? Provident inventore assumenda, quidem accusantium quibusdam ab odit obcaecati repellendus aspernatur. Aut error asperiores, at illo enim, inventore neque deserunt cupiditate ducimus minus eius. Voluptates enim asperiores nobis assumenda. Autem harum adipisci eveniet minima corrupti ullam ab incidunt fugiat fugit, vero alias? Officiis labore natus omnis voluptates!' },
        { src: launchImg2, alt: 'Slide 5', type: 'launch', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur qui nam, vero amet repellendus delectus molestias maiores animi ab quod libero suscipit asperiores beatae accusantium aliquam minima. A doloremque earum asperiores, ducimus voluptatem odio sequi dolores, quaerat voluptatibus exercitationem tempora? Praesentium laudantium maxime natus explicabo eligendi ipsa mollitia, cupiditate nostrum sit reiciendis? Provident inventore assumenda, quidem accusantium quibusdam ab odit obcaecati repellendus aspernatur. Aut error asperiores, at illo enim, inventore neque deserunt cupiditate ducimus minus eius. Voluptates enim asperiores nobis assumenda. Autem harum adipisci eveniet minima corrupti ullam ab incidunt fugiat fugit, vero alias? Officiis labore natus omnis voluptates!' },
        { src: launchImg1, alt: 'Slide 6', type: 'launch', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur qui nam, vero amet repellendus delectus molestias maiores animi ab quod libero suscipit asperiores beatae accusantium aliquam minima. A doloremque earum asperiores, ducimus voluptatem odio sequi dolores, quaerat voluptatibus exercitationem tempora? Praesentium laudantium maxime natus explicabo eligendi ipsa mollitia, cupiditate nostrum sit reiciendis? Provident inventore assumenda, quidem accusantium quibusdam ab odit obcaecati repellendus aspernatur. Aut error asperiores, at illo enim, inventore neque deserunt cupiditate ducimus minus eius. Voluptates enim asperiores nobis assumenda. Autem harum adipisci eveniet minima corrupti ullam ab incidunt fugiat fugit, vero alias? Officiis labore natus omnis voluptates!' },
        { src: airplaneImg1, alt: 'Slide 7', type: 'airplane', content: "The domestic airplane service in Dhaka caters to the growing need for swift and efficient air travel within the country. With a network of airports and carriers, passengers can easily fly between major cities, saving valuable time and offering convenience. Dhaka's domestic flights ensure connectivity between urban hubs, regional centers, and remote areas, fostering economic development and tourism. Whether for business or leisure, domestic air travel in Dhaka provides a vital link for travelers seeking to explore the diverse landscapes and opportunities across Bangladesh." },
        { src: airplaneImg2, alt: 'Slide 8', type: 'airplane', content: "The domestic airplane service in Dhaka offers a seamless travel experience, with modern aircraft, comfortable seating, and reliable schedules. Passengers can choose from a range of airlines and routes, tailoring their journey to suit their needs and preferences. With safety and efficiency as top priorities, Dhaka's domestic airlines ensure a smooth and hassle-free travel experience for all passengers. Whether flying for work or pleasure, travelers can rely on Dhaka's domestic airplane service to deliver them safely and swiftly to their destination." },
        // { src: img1, alt: 'Slide 9', type: 'launch', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur qui nam, vero amet repellendus delectus molestias maiores animi ab quod libero suscipit asperiores beatae accusantium aliquam minima. A doloremque earum asperiores, ducimus voluptatem odio sequi dolores, quaerat voluptatibus exercitationem tempora? Praesentium laudantium maxime natus explicabo eligendi ipsa mollitia, cupiditate nostrum sit reiciendis? Provident inventore assumenda, quidem accusantium quibusdam ab odit obcaecati repellendus aspernatur. Aut error asperiores, at illo enim, inventore neque deserunt cupiditate ducimus minus eius. Voluptates enim asperiores nobis assumenda. Autem harum adipisci eveniet minima corrupti ullam ab incidunt fugiat fugit, vero alias? Officiis labore natus omnis voluptates!' },
        // { src: img2, alt: 'Slide 10', type: 'launch', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur qui nam, vero amet repellendus delectus molestias maiores animi ab quod libero suscipit asperiores beatae accusantium aliquam minima. A doloremque earum asperiores, ducimus voluptatem odio sequi dolores, quaerat voluptatibus exercitationem tempora? Praesentium laudantium maxime natus explicabo eligendi ipsa mollitia, cupiditate nostrum sit reiciendis? Provident inventore assumenda, quidem accusantium quibusdam ab odit obcaecati repellendus aspernatur. Aut error asperiores, at illo enim, inventore neque deserunt cupiditate ducimus minus eius. Voluptates enim asperiores nobis assumenda. Autem harum adipisci eveniet minima corrupti ullam ab incidunt fugiat fugit, vero alias? Officiis labore natus omnis voluptates!' },
        // { src: trainImg1, alt: 'Slide 11', type: 'train', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur qui nam, vero amet repellendus delectus molestias maiores animi ab quod libero suscipit asperiores beatae accusantium aliquam minima. A doloremque earum asperiores, ducimus voluptatem odio sequi dolores, quaerat voluptatibus exercitationem tempora? Praesentium laudantium maxime natus explicabo eligendi ipsa mollitia, cupiditate nostrum sit reiciendis? Provident inventore assumenda, quidem accusantium quibusdam ab odit obcaecati repellendus aspernatur. Aut error asperiores, at illo enim, inventore neque deserunt cupiditate ducimus minus eius. Voluptates enim asperiores nobis assumenda. Autem harum adipisci eveniet minima corrupti ullam ab incidunt fugiat fugit, vero alias? Officiis labore natus omnis voluptates!' },
        // { src: trainImg2, alt: 'Slide 12', type: 'train', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur qui nam, vero amet repellendus delectus molestias maiores animi ab quod libero suscipit asperiores beatae accusantium aliquam minima. A doloremque earum asperiores, ducimus voluptatem odio sequi dolores, quaerat voluptatibus exercitationem tempora? Praesentium laudantium maxime natus explicabo eligendi ipsa mollitia, cupiditate nostrum sit reiciendis? Provident inventore assumenda, quidem accusantium quibusdam ab odit obcaecati repellendus aspernatur. Aut error asperiores, at illo enim, inventore neque deserunt cupiditate ducimus minus eius. Voluptates enim asperiores nobis assumenda. Autem harum adipisci eveniet minima corrupti ullam ab incidunt fugiat fugit, vero alias? Officiis labore natus omnis voluptates!' },
    ];

    return (
        <div className="bg-zinc-900 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl text-white font-bold text-center pb-10">Blog Section</h1>
            {slides.map((slide, index) => (
                <section
                    key={index}
                    className={`flex py-5 mx-10 mb-9 w-full ${index === slideIndex ? '' : 'hidden'}`}
                >
                    <div className="w-3/5 px-24 mt-16">
                        <h1 className="text-3xl font-semibold text-white pb-3">{slide.type === 'bus' ? 'Bus' : slide.type === 'train' ? 'Train' : slide.type === 'airplane' ? 'Airplane' : 'Launch'}</h1>
                        <p className="text-white text-justify">
                            {slide.content}
                        </p>
                    </div>
                    <div className="w-2/5 h-[500px]">
                        <div className="relative h-[520px] w-[500px] max-w-screen-lg mx-auto">
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                className="object-cover rounded-2xl w-full h-full"
                            />
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Blog;
