import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

const featuredProducts = [
    "https://www.w3schools.com/howto/img_nature_wide.jpg",
    "https://www.w3schools.com/howto/img_snow_wide.jpg",
];

let count = 0;
let slideInterval;

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    };

    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);

        startSlider();
        return () => {
            pauseSlider();
        };
        // eslint-disable-next-line
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick();
        }, 8000);
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };

    const handleOnNextClick = () => {
        count = (count + 1) % featuredProducts.length;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
        pauseSlider();
    };
    const handleOnPrevClick = () => {
        const productsLength = featuredProducts.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
        pauseSlider();

    };
    return (
        <div className='container'>
            <div ref={slideRef} className="relative w-full select-none">
                <div className="aspect-w-16 aspect-h-9">
                    <img src={featuredProducts[currentIndex]} alt="" className='w-full cursor-pointer h-45' />
                </div>

                <div className="absolute flex items-center justify-between w-full px-3 transform -translate-y-1/2 top-1/2">
                    <button
                        className="p-1 text-white transition bg-black bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-100"
                        onClick={handleOnPrevClick}
                    >
                        <AiOutlineVerticalRight size={30} />
                    </button>
                    <button
                        className="p-1 text-white transition bg-black bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-100"
                        onClick={handleOnNextClick}
                    >
                        <AiOutlineVerticalLeft size={30} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;