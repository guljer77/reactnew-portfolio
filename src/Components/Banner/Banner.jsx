import React, { useEffect } from "react";
import "./banner.css";
import { Link } from "react-router-dom";
import { FaEnvira } from "react-icons/fa";
import { MdOutlineCloudDownload } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

function Banner() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="bg-banner flex items-center justify-start lg:pl-14 pl-5">
      <div data-aos="fade-down">
        <h6 className="uppercase text-primary lg:text-[16px] text-[15px] font-medium tracking-widest">
          Web Developer
        </h6>
        <h4 className="lg:w-[60%] h-full py-3 text-white leading-tight lg:text-[42px] text-[28px] font-bold">
          My Name Is Guljer Hossain
        </h4>
        <p className="text-[14px] font-light py-3 text-white lg:w-2/4 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          inventore quasi quod hic corporis quae, commodi debitis ea quam. Ea.
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
              href="CV.pdf"
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
