import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

import Grad_TR from "../../assets/img/grad-top-right.png";
import Grad_L from "../../assets/img/grad-left.png";
import Hero_LG from "../../assets/img/hero-logo.png";
import Hero_VD from "../../assets/video/hero-video-3.mp4";
import LargeBtn from "../ui/button/LargeBtn";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="w-full h-full">
      {/* Gradient-Top-Right */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] z-[-1]">
        <img
          className="w-full h-full object-cover"
          src={Grad_TR}
          alt="Gradient-Top-Right"
        />
      </div>

      {/* Gradient-Left */}
      <div className="absolute top-0 left-0 w-[200px] md:w-[500px] h-[1000px] md:h-[800px] z-[-1]">
        <img
          className="w-full h-full object-cover"
          src={Grad_L}
          alt="Gradient-Left"
        />
      </div>

      <div className="flex items-center justify-center flex-col gap-y-5  mt-20 md:mt-30 lg:mt-40 xl:mt-50">
        {/* Hero Content */}
        <div className="flex items-center flex-col mx-auto text-primary w-full lg:w-[760px] text-center">
          <span className="animate-[spin_15s_linear_infinite] pause-on-hover my-5">
            <img src={Hero_LG} alt="" />
          </span>
          <h1 className="text-[42px] md:text-[52px] lg:text-[72px] font-semibold">
            Best Landscaping Design & Maintenance
          </h1>
          <p className="text-[16px] md:text-[18px]">
            We are proud to be a responsible and sustainable lawn care company,
            dedicated to preserving the environment and the health of your lawn
          </p>
          <LargeBtn
            title={"Make an Appointment"}
            styles={
              "w-[300px] py-3 md:py-4 font-bold my-5 bg-accent hover:bg-accent/80"
            }
          />
        </div>

        {/* Video with Conditional Overlay */}
        <div className="group w-full xl:w-[1140px] h-full xl:h-[500px] mx-auto  overflow-hidden xl:px-0 px-2 relative ">
          <video
            ref={videoRef}
            className=" rounded-4xl w-full h-full object-cover"
            loop
            muted
            playsInline
            src={Hero_VD}
          ></video>

          {/* Overlay Button */}
          <button
            onClick={togglePlay}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
              ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}
            `}
          >
            {isPlaying ? (
              <FaPause className="text-white text-6xl drop-shadow-lg" />
            ) : (
              <FaPlay className="text-white text-6xl drop-shadow-lg" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
