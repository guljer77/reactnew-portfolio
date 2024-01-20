import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Image from "../../assets/1.png";
import Image2 from '../../assets/2.png';

function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="lg:p-10 p-5" data-aos="fade-down">
      <div className="pb-5">
        <h4 className="text-[24px] font-semibold">Awesome Projects</h4>
        <hr className="border border-primary w-[80px]" />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5 pt-5">
        <div className="p-5 bg-gray-700 shadow-xl rounded-md">
          <img src={Image} alt="" />
          <h4 className="text-[18px] font-medium text-gray-300 pt-5">J-Mart</h4>
          <h6 className="text-[15px] font-light text-gray-300">Online Shop</h6>
          <div className="py-3">
            <Link to="https://j-mart-cb69b.web.app/" className="text-[14px] px-3 py-[6px] border border-gray-300 rounded-full mr-3 text-gray-300 transition-all duration-300 ease-in-out hover:border-primary hover:text-primary">Live Demo</Link>
            <Link to="https://github.com/guljer77/react-ecommerce" className="text-[14px] px-3 py-[6px] border border-gray-300 rounded-full text-gray-300 transition-all duration-300 ease-in-out hover:border-primary hover:text-primary">GitHub</Link>
          </div>
          <h4 className="text-[16px] font-medium text-gray-300 pb-2">Technologies</h4>
          <div className="">
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">Tailwind CSS</span>
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">React Js</span>
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">Firebase</span>
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">Redux</span>
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">Express Js</span>
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">MongoDB</span>
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">JWT</span>
          </div>
        </div>
        <div className="p-5 bg-gray-700 shadow-xl rounded-md">
          <img src={Image2} alt="" />
          <h4 className="text-[18px] font-medium text-gray-300 pt-5">Web Blog</h4>
          <h6 className="text-[15px] font-light text-gray-300">Blog Website</h6>
          <div className="py-3">
            <Link to="https://blog-website-e5e90.web.app/" className="text-[14px] px-3 py-[6px] border border-gray-300 rounded-full mr-3 text-gray-300 transition-all duration-300 ease-in-out hover:border-primary hover:text-primary">Live Demo</Link>
            <Link to="https://github.com/guljer77/react-blog-website" className="text-[14px] px-3 py-[6px] border border-gray-300 rounded-full text-gray-300 transition-all duration-300 ease-in-out hover:border-primary hover:text-primary">GitHub</Link>
          </div>
          <h4 className="text-[16px] font-medium text-gray-300 pb-2">Technologies</h4>
          <div className="">
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">Tailwind CSS</span>
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">React Js</span>
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">Firebase</span>
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">Express Js</span>
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">MongoDB</span>
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">JWT</span>
          </div>
        </div>
        <div className="p-5 bg-gray-700 shadow-xl rounded-md">
          <img src={Image} alt="" />
          <h4 className="text-[18px] font-medium text-gray-300 pt-5">My Future</h4>
          <h6 className="text-[15px] font-light text-gray-300">Job Portal Website</h6>
          <div className="py-3">
            <Link to="https://j-mart-cb69b.web.app/" className="text-[14px] px-3 py-[6px] border border-gray-300 rounded-full mr-3 text-gray-300 transition-all duration-300 ease-in-out hover:border-primary hover:text-primary">Live Demo</Link>
            <Link to="https://github.com/guljer77/react-ecommerce" className="text-[14px] px-3 py-[6px] border border-gray-300 rounded-full text-gray-300 transition-all duration-300 ease-in-out hover:border-primary hover:text-primary">GitHub</Link>
          </div>
          <h4 className="text-[16px] font-medium text-gray-300 pb-2">Technologies</h4>
          <div className="">
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">Tailwind CSS</span>
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">React Js</span>
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">Firebase</span>
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">Redux</span>
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">Express Js</span>
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">MongoDB</span>
            <span className="text-[14px] text-gray-300 mr-2 mb-2 border border-gray-300 p-1 inline-block rounded-full">JWT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
