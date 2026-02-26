import React from "react";
import { Link } from "react-router-dom";

const Services = (props) => {

  const services = [
    { img: props.image9, title: "Wedding Ceremony" },
    { img: props.image10, title: "City Transfer" },
    { img: props.image11, title: "Airport Transfer" },
    { img: props.image12, title: "Whole City Tour" },
  ];

  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO SECTION */}
      <div className="min-h-[60vh] bg-cover bg-center bg-[url('./Assests/stylish-elegant-couple-car-salon_1157-24309.avif')]">

        {/* NAVBAR */}
        <div className="flex justify-between items-center px-10 py-6 text-white">
          <h1 className="text-2xl font-extrabold tracking-wider">
            CAR<span className="text-green-400">BOOK</span>
          </h1>

          <ul className="hidden md:flex gap-8 font-semibold">
            {["/", "/about", "/services", "/pricing", "/cars", "/blog", "/contact"].map((path, index) => (
              <li key={index}>
                <Link
                  to={path}
                  className="hover:text-green-400 transition duration-300 hover:scale-110"
                >
                  {path.replace("/", "") || "Home"}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* TITLE */}
        <div className="text-center text-white mt-24 animate-fadeIn">
          <h1 className="text-5xl font-bold">Our Services</h1>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="py-20 bg-gray-100 px-6 text-center">

        <p className="uppercase tracking-widest text-blue-600 font-semibold mb-2">
          Services
        </p>

        <h2 className="text-4xl font-bold mb-12">
          Our Latest Services
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-24 h-24 mx-auto mb-6 object-contain"
              />

              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* CTA SECTION */}
      <div className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Do You Want To Earn With <br /> Us? So Don't Be Late.
        </h1>

        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:scale-105 hover:bg-gray-100 transition duration-300">
          Become A Driver
        </button>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-bold mb-4">
              CAR<span className="text-green-400">BOOK</span>
            </h2>
            <p className="text-gray-400">
              Far far away, behind the word mountains.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Information</h4>
            <p className="text-gray-400 hover:text-green-400 cursor-pointer transition">About</p>
            <p className="text-gray-400 hover:text-green-400 cursor-pointer transition">Services</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Customer Support</h4>
            <p className="text-gray-400 hover:text-green-400 cursor-pointer transition">FAQ</p>
            <p className="text-gray-400 hover:text-green-400 cursor-pointer transition">Contact</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400">203 Fake St. Mountain View</p>
            <p className="text-gray-400">+2 392 3929 210</p>
            <p className="text-gray-400">info@yourdomain.com</p>
          </div>

        </div>

        <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6 text-sm">
          ©2025 All rights reserved | Made with ❤️ by Carbook
        </div>
      </footer>

    </div>
  );
};

export default Services;