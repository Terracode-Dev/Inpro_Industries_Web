
import React, { useState, useEffect, useRef } from "react";
// import Navbar from "./Navbar";
import Client from "./Client";
import {  MessageSquareTextIcon, SendIcon } from "lucide-react";

interface CarouselItem {
  slideId: number;
  image: string;
  title1: string;
  title2: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const carouselData: CarouselItem[] = [
  {
    slideId: 1,
    image: "/1.jpg",
    title1: "",
    title2: "Inpro: Your Partner in Precision Offset Printing",
    description: "",
    buttonText: "Contact Us",
    buttonLink: "#contact-us",
  },
  {
    slideId: 2,
    image: "/2.jpg",
    title1: "",
    title2: "Bringing Ideas to Life with Quality Offset Printing",
    description: "",
    buttonText: "Contact Us",
    buttonLink: "#contact-us",
  },
  {
    slideId: 3,
    image: "/3.jpg",
    title1: "",
    title2: "Experience Exceptional Print Quality with Inpro",
    description: "",
    buttonText: "Contact Us",
    buttonLink: "#contact-us",
  },
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const Slides = carouselData; // Use carouselData directly instead of useState

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % Slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [Slides]);

  const goToNextSlide = (): void => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % Slides.length);
  };

  const goToPrevSlide = (): void => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + Slides.length) % Slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (): void => {
    if (touchStartX.current - touchEndX.current > 75) {
      goToNextSlide();
    }
    if (touchEndX.current - touchStartX.current > 75) {
      goToPrevSlide();
    }
  };

  return (
    <div className="">
      
      <div className=" ">
        <div
          className="flex relative overflow-hidden  h-[106vh]  "
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {Slides.map((item, index) => (
            <div
              key={item.slideId}
              className={`absolute inset-0 flex items-center transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-black">
                <img
                  src={item.image}
                  alt={`${item.title1} ${item.title2}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center ">
                <div className="mx-[12%]">
                  <div className="mt-10 sm:mt-0 flex flex-col justify-center items-center">
                    <h1 className="mb-0 sm:mb-4">
                      <span
                        className="block text-2xl md:text-4xl text-white font-light"
                        style={{
                          textShadow: "6px 4px 6px rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        {item.title1}
                      </span>
                      <span
                        className="block text-3xl text-center sm:text-4xl lg:text-7xl text-white font-semibold sm:font-bold mt-2"
                        style={{
                          textShadow: "6px 4px 6px rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        {item.title2}
                      </span>
                    </h1>
                    <p
                      className="text-[14px] md:text-3xl text-white mb-4 sm:mb-8"
                      style={{ textShadow: "6px 4px 6px rgba(0, 0, 0, 0.5)" }}
                    >
                      {item.description}
                    </p>
                    
                      <>
                      <div className="flex flex-row gap-4">
                      <a href='#contact-us'>
                      <div className='flex flex-row bg-blue-900 text-white px-8 py-2 rounded-full w-fit hover:scale-110 active:scale-95 transition-all duration-300 justify-center items-center shadow-md'>
                            <button className='flex-grow text-left font-semibold focus:outline-none'>
                              <p className='font-normal text-[13px] font-inter text-nowrap'> Contact Us</p>
                            </button>
                            <SendIcon className='ml-2' size={20}/>
                      </div>
                    </a>
                    <a href='#About-Us'>
                    <div className='flex flex-row bg-blue-900 text-white px-8 py-2 rounded-full w-fit hover:scale-110 active:scale-95 transition-all duration-300 justify-center items-center shadow-md'>
                          <button className='flex-grow text-left font-semibold focus:outline-none'>
                            <p className='font-normal text-[13px] font-inter text-nowrap'> About Us</p>
                          </button>
                          <MessageSquareTextIcon className='ml-2' size={20}/>
                    </div>
                  </a>
                  </div>
                  </>
                  
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation buttons */}
          <div className="hidden sm:block">
            {currentSlide !== 0 && (
              <button
                onClick={goToPrevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none z-20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
            <button
              onClick={goToNextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none z-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Client />
    </div>
  );
};

export default Carousel;
