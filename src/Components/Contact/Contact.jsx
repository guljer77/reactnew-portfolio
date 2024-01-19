import React, { useEffect } from "react";
import { FaPhoneAlt, FaEnvelopeOpen, FaHome } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="lg:p-10 p-5 bg-gray-100" data-aos="fade-down">
      <div className="pb-5">
        <h4 className="text-[24px] font-semibold">Get In Touch</h4>
        <hr className="border border-primary w-[80px]" />
      </div>
      <div className="lg:flex items-start justify-between gap-10">
        <div className="lg:w-[40%] w-full px-5 py-10 bg-white shadow-lg lg:mb-0 mb-5">
          <div className="flex items-center gap-5 pb-10">
            <h4 className="border flex items-center justify-center border-primary w-[45px] h-[45px] rounded-full">
              <FaEnvelopeOpen className="text-primary inline-block" size={24} />
            </h4>
            <div>
              <h4 className="text-[18px] font-semibold">Email:</h4>
              <p className="text-[16px]">guljer.net@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-5 pb-10">
            <h4 className="border flex items-center justify-center border-primary w-[45px] h-[45px] rounded-full">
              <FaPhoneAlt className="text-primary inline-block" size={24} />
            </h4>
            <div>
              <h4 className="text-[18px] font-semibold">Phone:</h4>
              <p className="text-[16px]">+880 1792790977</p>
            </div>
          </div>
          <div className="flex items-center gap-5 pb-10">
            <h4 className="border flex items-center justify-center border-primary w-[45px] h-[45px] rounded-full">
              <FaHome className="text-primary inline-block" size={24} />
            </h4>
            <div>
              <h4 className="text-[18px] font-semibold">Location:</h4>
              <p className="text-[16px]">Vatara, Dhaka</p>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6139.186549379321!2d90.4222404782301!3d23.805005817580437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b3d31ad205%3A0x95540f8e4f93bdab!2sVatara%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1705643802890!5m2!1sen!2sbd"
              style={{border:0, width: "100%", height: "320px"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="lg:w-[60%] w-full px-5 py-10 bg-white shadow-lg ">
          <div className="py-5">
            <p className="text-[16px] text-primary">Any Question Please Ask Me?</p>
          </div>
          <form action="" className="pb-[18px]">
            <input type="text" name="name" placeholder="Enter Your Name" className="text-[16px] mb-5 py-2 px-3 border border-primary outline-0 w-full" />
            <input type="email" name="email" placeholder="Enter Your Email" className="text-[16px] mb-5 py-2 px-3 border border-primary outline-0 w-full" />
            <input type="text" name="text" placeholder="Enter Your Subject" className="text-[16px] mb-5 py-2 px-3 border border-primary outline-0 w-full" />
            <textarea name="message" placeholder="Enter Your Message" id="" cols="30" rows="10" className="outline-0 resize-none py-2 px-3 border border-primary w-full"></textarea>
            <input type="submit" value="Message" className="border border-primary bg-primary text-white px-5 py-2 mt-5" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
