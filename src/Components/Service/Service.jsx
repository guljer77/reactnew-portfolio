import React, { useEffect } from "react";
import { GoNote } from "react-icons/go";
import { MdDashboardCustomize } from "react-icons/md";
import { IoDiamondSharp } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = [
  {
    name: "Responsive Design",
    icon: <GoNote />,
    title:
      "Responsive design is an approach that allows websites and applications to adapt and provide an optimal user experience across various devices and screen sizes.",
  },
  {
    name: "Front-End",
    icon: <MdDashboardCustomize />,
    title:
      "MERN front-end development: Building user interfaces with React and css libraries.",
  },
  {
    name: "Back-End",
    icon: <IoDiamondSharp />,
    title:
      "Back-end development: Creating the server-side components of a web application, handling data processing, storage, and integration with the front-end for a complete user experience.",
  },
];

function Service() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="lg:p-10 p-5" data-aos="fade-down">
      <div className="lg:pb-10 pb-5">
        <h6 className="text-primary text-[16px] uppercase">FEATURES</h6>
        <h2 className="text-[28px] font-semibold">What I Do</h2>
        <hr className="w-[70px] border-primary border" />
      </div>
      <div className="lg:grid grid-cols-3 gap-7 pt-5 mb-10">
        {Services.map((service, i) => (
          <div
            key={i}
            className="lg:mb-0 mb-10 shadow-lg text-black text-left p-7 rounded-md bg-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-500 hover:text-white"
          >
            <span className="inline-block text-[60px] font-light text-primary">
              {service?.icon}
            </span>
            <h4 className="lg:text-[22px] text-[18px] font-semibold pb-3">
              {service?.name}
            </h4>
            <p className="text-[15px] font-light">{service?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
