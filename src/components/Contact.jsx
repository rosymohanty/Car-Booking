import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
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
          <h1 className="text-5xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="py-20 bg-gray-100 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <h4 className="font-bold text-lg mb-2">Address</h4>
              <p className="text-gray-600">
                198 West 21th Street, Suite 721 New York NY 10016
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <h4 className="font-bold text-lg mb-2">Phone</h4>
              <p className="text-gray-600">+1235 2355 98</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <h4 className="font-bold text-lg mb-2">Email</h4>
              <p className="text-gray-600">info@yoursite.com</p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white p-10 rounded-xl shadow-xl">

            <h2 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 hover:scale-105 transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

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

export default Contact;