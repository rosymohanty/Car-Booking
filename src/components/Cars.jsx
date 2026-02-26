import React from "react";
import { Link } from "react-router-dom";

const Car = (props) => {

  const cars = [
    props.image1, props.image2, props.image3,
    props.image4, props.image5, props.image6,
    props.image7, props.image1, props.image2,
    props.image3, props.image4, props.image5
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

        {/* PAGE TITLE */}
        <div className="text-center text-white mt-24 animate-fadeIn">
          <h1 className="text-5xl font-bold">Choose Your Car</h1>
        </div>
      </div>

      {/* CAR GRID */}
      <div className="py-20 bg-gray-100 px-6">

        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

          {cars.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >
              <img
                src={image}
                alt={`Car ${index + 1}`}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 text-center">

                <h4 className="text-xl font-bold mb-2">
                  Mercedes Grand Sedan
                </h4>

                <div className="flex justify-between text-gray-600 text-sm mb-4">
                  <p>Chevrolet</p>
                  <p className="text-green-500 font-bold">$500/day</p>
                </div>

                <div className="flex justify-center gap-4">
                  <button className="bg-green-400 px-4 py-2 rounded-lg font-semibold hover:bg-green-500 hover:scale-105 transition duration-300">
                    Book Now
                  </button>

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition duration-300">
                    Details
                  </button>
                </div>

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
            <p className="text-gray-400 hover:text-green-400 cursor-pointer transition">Terms & Conditions</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Customer Support</h4>
            <p className="text-gray-400 hover:text-green-400 cursor-pointer transition">FAQ</p>
            <p className="text-gray-400 hover:text-green-400 cursor-pointer transition">Payment Options</p>
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

export default Car;