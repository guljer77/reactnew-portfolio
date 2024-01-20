import React, { useEffect } from "react";
import "./banner.css";
import { Link } from "react-router-dom";
import { FaEnvira } from "react-icons/fa";
import { MdOutlineCloudDownload } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

function Banner() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="bg-banner flex items-center justify-start lg:pl-14 pl-5">
      <div data-aos="fade-down">
        <h6 className="uppercase text-primary lg:text-[16px] text-[15px] font-medium tracking-widest">
          Welcome To My World
        </h6>
        <h4 className="lg:w-[60%] h-full py-3 text-white leading-tight lg:text-[42px] text-[28px] font-bold">
          Hi, I'm Md. Guljer Hossain
        </h4>
        <h6 className="text-white text-[16px] font-medium">
          A {""}
          <span>
            <Typewriter
              words={["FrontEnd Developer", "Jr. MERN Stack Developer",]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h6>
        <p className="text-[14px] font-light py-3 text-white lg:w-2/4 w-full">
          Architecting Extraordinary Web Experiences: Md Guljer Hossain -
          Inspiring MERN Stack Developer with a Proven Track Record of Creating
          Immersive User Journeys and Pushing the Boundaries of Digital
          Innovation
        </p>
        <div className="flex items-center lg:space-x-5 my-4">
          <div className="lg:block hidden">
            <Link
              to="/contact"
              className="flex lg:text-[15px] text-[14px] items-center lg:gap-3 gap-1 lg:px-5 px-3 py-2 rounded-md bg-primary text-white"
            >
              Contact Me <FaEnvira />
            </Link>
          </div>
          <div>
            <a
              href="GuljerCV.pdf"
              download
              className="flex lg:text-[15px] text-[14px] items-center lg:gap-3 gap-1 lg:px-5 px-3 py-2 rounded-md bg-primary text-white"
            >
              Download CV <MdOutlineCloudDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
