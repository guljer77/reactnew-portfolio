import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Profile from "../assets/profile.jpg";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
import { IoMdHome, IoMdClose } from "react-icons/io";
import { FcManager } from "react-icons/fc";
import { MdStorage } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { LiaBarsSolid } from "react-icons/lia";

function Main() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex items-start justify-between">
      <div className="lg:block hidden w-[22%] overflow-hidden h-screen shadow-lg">
        <div className="text-white fixed w-[22%] h-screen bg-slate-900">
          <div className="mx-auto w-full mt-[20px]">
            <div className="mx-auto w-[150px] shadow-lg rounded-full h-[150px] bg-gray-700 flex items-center justify-center">
              <img
                src={Profile}
                alt=""
                className="w-[135px] h-[135px] inline-block rounded-full"
              />
            </div>
          </div>
          <div className="flex items-center justify-center pt-[10px]">
            <div>
              <h4 className="text-[22px] font-semibold">M. Guljer Hossain</h4>
              <div className="flex items-center justify-center space-x-3 pt-2">
                <span className="text-[18px] shadow-lg w-[30px] h-[30px] bg-slate-700 rounded-full flex items-center justify-center">
                  <FaGithub className="block" />
                </span>
                <span className="text-[18px] shadow-lg w-[30px] h-[30px] bg-slate-700 rounded-full flex items-center justify-center">
                  <FaLinkedinIn className="block" />
                </span>
                <span className="text-[18px] shadow-lg w-[30px] h-[30px] bg-slate-700 rounded-full flex items-center justify-center">
                  <FaFacebook className="block" />
                </span>
              </div>
            </div>
          </div>
          <div className="pt-[50px] pl-10">
            <ul className="space-y-5">
              <li className="text-[15px] font-light">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  <IoMdHome className="inline-block mr-2 text-[24px]" /> Home
                </NavLink>
              </li>
              <li className="text-[15px] font-light">
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  <FcManager className="inline-block mr-2 text-[22px]" /> About
                </NavLink>
              </li>
              <li className="text-[15px] font-light">
                <NavLink
                  to="/service"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  <MdStorage className="inline-block mr-2 text-[22px]" />
                  Service
                </NavLink>
              </li>
              <li className="text-[15px] font-light">
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  <FaBriefcase className="inline-block mr-2 text-[20px]" />
                  Portfolio
                </NavLink>
              </li>
              <li className="text-[15px] font-light">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  <FaEnvelope className="inline-block mr-2 text-[20px]" />
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="absolute bottom-3">
            <p className="w-[70%] mx-auto text-left text-[14px] font-light">
              &copy; Copyright 2024 Designed By Guljer
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[78%] w-full clearfix z-40">
        <Outlet />
      </div>
      <div className="lg:hidden block">
        <div
          onClick={() => setMenu(!menu)}
          className="absolute cursor-pointer top-0 right-5 pt-5 z-50 text-primary"
        >
          {menu ? (
            <IoMdClose className="text-[24px]" />
          ) : (
            <LiaBarsSolid className="text-[24px]" />
          )}
        </div>
      </div>
      {menu && (
        <div className="w-[300px] absolute top-0 left-0 z-50">
          <div className="text-white fixed w-[300px] h-screen bg-slate-900">
            <div className="mx-auto w-full mt-[20px]">
              <div className="mx-auto w-[150px] shadow-lg rounded-full h-[150px] bg-gray-700 flex items-center justify-center">
                <img
                  src={Profile}
                  alt=""
                  className="w-[135px] h-[135px] inline-block rounded-full"
                />
              </div>
            </div>
            <div className="flex items-center justify-center pt-[10px]">
              <div>
                <h4 className="text-[22px] font-semibold">M. Guljer Hossain</h4>
                <div className="flex items-center justify-center space-x-3 pt-2">
                  <span className="text-[18px] shadow-lg w-[30px] h-[30px] bg-slate-700 rounded-full flex items-center justify-center">
                    <FaGithub className="block" />
                  </span>
                  <span className="text-[18px] shadow-lg w-[30px] h-[30px] bg-slate-700 rounded-full flex items-center justify-center">
                    <FaLinkedinIn className="block" />
                  </span>
                  <span className="text-[18px] shadow-lg w-[30px] h-[30px] bg-slate-700 rounded-full flex items-center justify-center">
                    <FaFacebook className="block" />
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-[50px] pl-10">
              <ul className="space-y-5">
                <li className="text-[15px] font-light">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    <IoMdHome className="inline-block mr-2 text-[24px]" /> Home
                  </NavLink>
                </li>
                <li className="text-[15px] font-light">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    <FcManager className="inline-block mr-2 text-[22px]" />{" "}
                    About
                  </NavLink>
                </li>
                <li className="text-[15px] font-light">
                  <NavLink
                    to="/service"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    <MdStorage className="inline-block mr-2 text-[22px]" />
                    Service
                  </NavLink>
                </li>
                <li className="text-[15px] font-light">
                  <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    <FaBriefcase className="inline-block mr-2 text-[20px]" />
                    Portfolio
                  </NavLink>
                </li>
                <li className="text-[15px] font-light">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    <FaEnvelope className="inline-block mr-2 text-[20px]" />
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="absolute bottom-3">
              <p className="w-[70%] mx-auto text-left text-[14px] font-light">
                &copy; Copyright 2024 Designed By Guljer
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
