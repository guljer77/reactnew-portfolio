import React, { useEffect, useState } from "react";
import Projects from "../Portfolio/all_product";
import Aos from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [projects, setProjects] = useState(Projects);
  const toggler = id => {
    const newItem = Projects?.filter(item => item?.category === id);
    setProjects(newItem);
  };
  return (
    <div className="lg:p-10 p-5" data-aos="fade-down">
      <div className="pb-5">
        <h4 className="text-[24px] font-semibold">Awesome Projects</h4>
        <hr className="border border-primary w-[80px]" />
      </div>
      <div>
        <ul className="flex items-center justify-around lg:w-[50%] w-full bg-gray-200 rounded-full py-2">
          <li
            onClick={() => setProjects(Projects)}
            className="text-[16px] cursor-pointer"
          >
            All
          </li>
          <li
            onClick={() => toggler("React Js")}
            className="text-[16px] cursor-pointer"
          >
            React Js
          </li>
          <li
            onClick={() => toggler("Next.JS")}
            className="text-[16px] cursor-pointer"
          >
            Next.JS
          </li>
          <li
            onClick={() => toggler("Full Stack")}
            className="text-[16px] cursor-pointer"
          >
            Full Stack
          </li>
        </ul>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5 pt-5">
        {projects.map((items, i) => (
          <div key={i} className="p-5 rounded-md bg-gray-100 shadow-lg">
            <img src={items?.image} alt="" className="w-full h-auto" />
            <h4 className="my-3 text-[18px] font-semibold">{items?.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
