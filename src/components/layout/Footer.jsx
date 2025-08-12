"use client";

import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-primary">
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">ECO LANDSCAPING</h2>
          <p className="mb-4 text-sm">
            Best Landscape Design & Maintenance services in the Columbus OH
          </p>
          <div className="flex space-x-4">
            <a href="#">
              <BsFacebook size={20} />
            </a>
            <a href="#">
              <BsTwitter size={20} />
            </a>
            <a href="#">
              <BsInstagram size={20} />
            </a>
            <a href="#">
              <BsYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-sm font-semibold mb-4">ADDRESS</h3>
          <p className="text-sm">
            Desa Bangsal Rt 11 Rw 02 <br />
            Bangsal Mojokerto <br />
            Jawa Timur Indonesia
          </p>
          <p className="mt-3 text-sm">Phone: +1 800 123 45 67</p>
          <p className="text-sm">Email: email@example.com</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold mb-4">NAVIGATION</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-sm font-semibold mb-4">OUR SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Garden design installation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Lawn maintenance
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Hardscape construction
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Irrigation systems
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between text-sm">
          <span>© 2023 Eco landscaping services. All rights reserved.</span>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
