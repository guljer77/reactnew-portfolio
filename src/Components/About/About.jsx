import React, { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaUserCheck,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaHome,
} from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [active, setActive] = useState(1);
  const toggler = id => {
    setActive(id);
  };
  return (
    <div className="lg:p-10 p-5" data-aos="fade-down">
      <div className="lg:pb-10 pb-5">
        <h2 className="text-[28px] font-semibold">About</h2>
        <hr className="w-[70px] border-primary border" />
      </div>
      <div className="w-full lg:pt-0 pt-5">
        <div className="bg-gray-200 shadow-lg rounded-full lg:w-[50%] w-full">
          <div className="flex items-center justify-between">
            <div onClick={() => toggler(1)}>
              <button
                className={`lg:px-7 px-3 ${
                  active === 1 ? "bg-primary text-white" : ""
                } rounded-full inline-block text-center text-primary lg:py-3 py-1 text-[16px]`}
              >
                Skills
              </button>
            </div>
            <div onClick={() => toggler(2)}>
              <button
                className={`lg:px-7 px-3 ${
                  active === 2 ? "bg-primary text-white" : ""
                } rounded-full inline-block text-center text-primary lg:py-3 py-1 text-[16px]`}
              >
                Qualification
              </button>
            </div>
            <div onClick={() => toggler(3)}>
              <button
                className={`lg:px-7 px-3 ${
                  active === 3 ? "bg-primary text-white" : ""
                } rounded-full inline-block text-center text-primary lg:py-3 py-1 text-[16px]`}
              >
                Personal Info
              </button>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className={active === 1 ? "block" : "hidden"}>
            <div>
              <h4 className="lg:text-[24px] text-[20px] font-semibold pb-10">
                Tools I Use Everyday
              </h4>
              <h6 className="text-[18px] font-semibold">Skills</h6>
              <hr className="border border-primary" />
              <div className="py-10">
                <h6 className="text-[16px] pb-2">
                  <span className="font-bold">Expertise:</span> HTML, CSS,
                  Tailwind CSS, Bootstrap, Javascript, React Js, Firebase, Rest
                  API
                </h6>
                <h6 className="text-[16px] pb-2">
                  <span className="font-bold">Comfortable:</span> ES6,
                  ExpressJs, MongoDb
                </h6>
                <h6 className="text-[16px] pb-2">
                  <span className="font-bold">Familiar:</span> Nodejs, JWT,
                  Stripe, Redux Toolkit,
                </h6>
              </div>
              <h6 className="text-[18px] font-semibold">Tools</h6>
              <hr className="border border-primary" />
              <div className="pt-10">
                <h6 className="text-[16px]">
                  Visual Studio, Notepad++, Figma, Git, PostMan, Dev Tools,
                  npm/yarn, Netlify, Firebase
                </h6>
              </div>
            </div>
          </div>
          <div className={active === 2 ? "block" : "hidden"}>
            <div>
              <h4 className="lg:text-[24px] text-[22px] font-semibold pb-10">
                My Awesome Journey
              </h4>
              <h6 className="text-[18px] font-semibold text-primary">
                <FaGraduationCap size={24} className="inline-block" /> Education
              </h6>
              <hr className="border border-primary" />
              <div className="pt-10">
                <h4 className="text-[16px] font-medium">
                  Dhaka International University
                </h4>
                <h6 className="text-[16px] font-light">Bachelor of Science</h6>
                <p className="text-[16px] font-light pt-2 text-primary">
                  <CiCalendarDate className="inline-block" /> 2022 - Running 6th
                  semester
                </p>
              </div>
              <div className="pt-10">
                <h4 className="text-[16px] font-medium">
                  Dinajpur Polytechnic Institute
                </h4>
                <h6 className="text-[16px] font-light">
                  Diploma In Engineering
                </h6>
                <p className="text-[16px] font-light pt-2 text-primary">
                  <CiCalendarDate className="inline-block" /> 2016 - 2020
                </p>
              </div>
            </div>
          </div>
          <div className={active === 3 ? "block" : "hidden"}>
            <div className="pt-10">
              <h4 className="lg:text-[24px] text-[20px] font-semibold pb-5">
                About My Shelf
              </h4>
              <div className="lg:flex items-center justify-between gap-5 py-16">
                <div className="lg:w-[50%] w-full">
                  <p className="flex items-center gap-3 text-[16px] font-light pb-2">
                    <FaUserCheck className="text-primary"/>
                    Md. Guljer Hossain
                  </p>
                  <p className="flex items-center gap-3 text-[16px] font-light pb-2">
                    <FaEnvelopeOpen className="text-primary"/>
                    guljer.net@gmail.com
                  </p>
                  <p className="flex items-center gap-3 text-[16px] font-light pb-2">
                    <FaGraduationCap className="text-primary"/>
                    BSc in CSE
                  </p>
                </div>
                <div className="lg:w-[50%] w-full">
                  <p className="flex items-center gap-3 text-[16px] font-light pb-2">
                    <FaPhoneAlt className="text-primary"/>
                    +880 1792790977
                  </p>
                  <p className="flex items-center gap-3 text-[16px] font-light pb-2">
                    <CiCalendarDate className="text-primary"/>
                    Born on 15 June, 1998
                  </p>
                  <p className="flex items-center gap-3 text-[16px] font-light pb-2">
                    <FaHome className="text-primary"/>
                    Dhaka
                  </p>
                </div>
              </div>
              <h6 className="text-[18px] font-semibold">Language</h6>
              <hr className="border border-primary" />
              <div className="pt-5">
                <h6 className="text-[16px] font-light">
                  Bangla, English, Hindi
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
