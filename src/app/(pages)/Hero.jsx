import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Example usage:
const images = [
    '/images/hero/1.jpg',
    '/images/hero/2.jpg',
    '/images/hero/3.jpg',
    '/images/hero/4.jpg',
    '/images/hero/5.jpg',
    '/images/hero/6.jpg',
    '/images/hero/7.jpg',
];

const BannerSlider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to handle next image
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to handle previous image
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Function to handle automatic sliding
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const autoSlide = () => {
        nextImage();
    };

    // Set up automatic sliding interval on component mount
    useEffect(() => {
        const intervalId = setInterval(autoSlide, 9000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, [autoSlide]);

    return (
        <div className="banner-slider relative w-full h-full overflow-hidden">
            {images.map((image, index) => (
                <Image
                    key={index + 4321}
                    src={image}
                    width={1600}
                    height={900}
                    alt={`Banner ${index + 1}`}
                    className={` transition-all ${index === currentImageIndex ? 'visible' : 'hidden'}`}
                />
            ))}

            <button className="absolute left-2 sm:left-8 top-1/2 text-shadow text-3xl sm:text-6xl p-2 set-bg bg-opacity-50" onClick={prevImage}>&#x2770;</button>
            <button className="absolute right-2 sm:right-8 top-1/2 text-shadow text-3xl sm:text-6xl p-2 set-bg bg-opacity-50" onClick={nextImage}>&#x2771;</button>
        </div>
    );
};

export default function Hero() {
    return (
        <>
            <section className={`relative section-padding`}>
                <div className="absolute inset-0 bg-[url('/images/hero/1.jpg')] bg-cover brightness-75 z-0">
                    <BannerSlider images={images} />
                </div>

                <div className="relative text-left md:text-center">
                    <h1 className="mb-4">Welcome to <span className="clr-p">ZenFlex</span></h1>
                    <p className="mx-auto w-full md:w-4/5 backdrop-blur-sm text-light rounded-md">Welcome to ZenFlex, where fitness meets community! At ZenFlex, we are dedicated to helping you achieve your fitness goals in a supportive and motivating environment. Whether you&apos;re a seasoned athlete or just starting your fitness journey, we have the facilities, classes, and expert staff to guide you every step of the way. Get ready to transform your life through the power of fitness!</p>
                </div>

                <div className="mt-6 relative mx-auto w-full  flex-center flex-wrap gap-4 z-10">
                    <a href="#membership" className="btn-p">Start Your Fitness Journey</a>
                </div>
            </section>
        </>
    )
}
