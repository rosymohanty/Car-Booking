import React from "react";
import { Link } from "react-router-dom";

const Pricing = (props) => {

  const cars = [
    props.image1,
    props.image2,
    props.image3,
    props.image4,
    props.image5,
    props.image6,
    props.image7,
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
          <h1 className="text-5xl font-bold">Pricing</h1>
        </div>
      </div>

      {/* PRICING SECTION */}
      <div className="py-20 bg-gray-100 px-6">

        <div className="max-w-7xl mx-auto space-y-8">

          {cars.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              {/* CAR INFO */}
              <div className="flex items-center gap-6 w-full md:w-1/3 mb-6 md:mb-0">
                <img
                  src={img}
                  alt={`Car ${index + 1}`}
                  className="w-28 h-20 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-bold text-lg">
                    Chevrolet SUV Car
                  </h3>
                  <p className="text-yellow-500 text-sm">
                    ⭐⭐⭐⭐☆
                  </p>
                </div>
              </div>

              {/* PER HOUR */}
              <div className="text-center w-full md:w-1/4 mb-4 md:mb-0">
                <p className="text-sm text-gray-500">Per Hour</p>
                <h4 className="text-xl font-bold text-green-500">₹300</h4>
                <p className="text-xs text-gray-400">+ fuel surcharges</p>
              </div>

              {/* PER DAY */}
              <div className="text-center w-full md:w-1/4 mb-4 md:mb-0">
                <p className="text-sm text-gray-500">Per Day</p>
                <h4 className="text-xl font-bold text-green-500">₹2000</h4>

                <button className="mt-3 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition duration-300">
                  Rent a Car
                </button>

                <p className="text-xs text-gray-400 mt-1">
                  + fuel surcharges
                </p>
              </div>

              {/* LEASING */}
              <div className="text-center w-full md:w-1/4">
                <p className="text-sm text-gray-500">Leasing</p>
                <h4 className="text-xl font-bold text-blue-600">
                  Available
                </h4>
                <p className="text-xs text-gray-400">
                  Contact us
                </p>
              </div>

            </div>
          ))}

        </div>

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

export default Pricing;