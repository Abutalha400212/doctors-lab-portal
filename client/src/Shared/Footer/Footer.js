import React from "react";
import { Link } from "react-router-dom";
import footer from '../../assets/images/footer.png'
const Footer = () => {
  return (
    <div className="p-10 rounded-xl" style={{background:`url(${footer})`,
    backgroundSize:'cover'
    }}>
      <footer className="footer mb-5  bg-neutral text-black lg:justify-around">
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <div className="mt-20">
          <div className="footer footer-center text-black font-semibold">
            <p>Copyright © 2022 - All right reserved by DoctorsLab</p>
          </div>
      </div>
    </div>
  );
};

export default Footer;
