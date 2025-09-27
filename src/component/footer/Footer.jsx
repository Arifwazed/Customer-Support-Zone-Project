import React from "react";
import social1 from "../../assets/social1.png";
import social2 from "../../assets/social2.png";
import social3 from "../../assets/social3.png";
import social4 from "../../assets/social4.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 md:px-20">
        <aside>
          <h1 className="text-xl font-bold text-white">CS — Ticket System</h1>
          <p className="text-[#A1A1AA] md: w-[300px]">
            {/* Lorem Ipsum is simply dummy text of the <br />printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard <br /> dummy text ever since the 1500s, when an <br /> unknown printer took a galley of type and <br /> scrambled it to make a type specimen book. */}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </aside>
        <nav className="text-[#A1A1AA]">
          <h6 className="footer-title font-semibold">Company</h6>
          <a className="link link-hover ">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav className="text-[#A1A1AA]">
          <h6 className="footer-title font-semibold">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav className="text-[#A1A1AA]">
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav className="text-[#A1A1AA]">
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover flex items-center">
            {" "}
            <img src={social1} alt="" className="mr-2 w-3.5 h-3.5" /> @CS —
            Ticket System
          </a>
          <a className="link link-hover flex items-center">
            {" "}
            <img src={social2} alt="" className="mr-2 w-3.5 h-3.5" />
            @CS — Ticket System
          </a>
          <a className="link link-hover flex items-center">
            {" "}
            <img src={social3} alt="" className="mr-2 w-3.5 h-3.5" />
            @CS — Ticket System
          </a>
          <a className="link link-hover flex items-center">
            {" "}
            <img src={social4} alt="" className="mr-2 w-3.5 h-3.5" />
            support@cst.com
          </a>
        </nav>
      </footer>
      <hr className="border-1 border-gray-800"/>
      <footer className="footer sm:footer-horizontal footer-center bg-neutral text-neutral-content p-4 md:px-20">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
