import { useState, useEffect } from 'react';
import img1 from '../../assets/images/img_1.jpg';
import img2 from '../../assets/images/img_2.jpg';

const Blog = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // Change image every 2 seconds

        return () => clearInterval(interval);
    }, []);

    const slides = [
        { src: img1, alt: 'Slide 1' },
        { src: img2, alt: 'Slide 2' },
        // { src: 'image3.jpg', alt: 'Slide 3' },
    ];

    return (
        <div className='bg-zinc-900'>
            <h1 className="text-4xl text-white font-bold text-center">Blog</h1>
            <section className='flex'>
                <div className='w-1/2'>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur qui nam, vero amet repellendus delectus molestias maiores animi ab quod libero suscipit asperiores beatae accusantium aliquam minima. A doloremque earum asperiores, ducimus voluptatem odio sequi dolores, quaerat voluptatibus exercitationem tempora? Praesentium laudantium maxime natus explicabo eligendi ipsa mollitia, cupiditate nostrum sit reiciendis? Provident inventore assumenda, quidem accusantium quibusdam ab odit obcaecati repellendus aspernatur. Aut error asperiores, at illo enim, inventore neque deserunt cupiditate ducimus minus eius. Voluptates enim asperiores nobis assumenda. Autem harum adipisci eveniet minima corrupti ullam ab incidunt fugiat fugit, vero alias? Officiis labore natus omnis voluptates!</p>
                </div>
                <div className='w-1/2'>
                    <div className="relative  h-[500px] w-[400px] max-w-screen-lg mx-auto">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === slideIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                    }`}
                            >
                                <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
