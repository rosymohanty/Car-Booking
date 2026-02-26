import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO SECTION */}
      <div className="min-h-[70vh] bg-cover bg-center bg-[url('./Assests/stylish-elegant-couple-car-salon_1157-24309.avif')]">

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
          <h1 className="text-5xl font-bold">About Us</h1>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-green-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

          <div className="md:w-1/2 transform hover:scale-105 transition duration-500">
            <img
              src={props.image8}
              alt="Carbook Team"
              className="rounded-lg shadow-xl"
            />
          </div>

          <div className="md:w-1/2 text-white">
            <p className="uppercase tracking-widest font-bold text-sm mb-3">
              ABOUT US
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Welcome to Carbook
            </h2>

            <p className="mb-4 leading-relaxed">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>

            <p className="mb-6 leading-relaxed">
              On her way she met a copy. The copy warned the Little Blind Text.
            </p>

            <button className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition duration-300">
              Search Vehicle
            </button>
          </div>

        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">
          Happy Clients
        </h2>

        <div className="flex flex-wrap justify-center gap-10 px-6">
          {[props.image19, props.image20, props.image21].map((img, index) => (
            <div
              key={index}
              className="bg-gray-100 w-80 p-8 rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <img
                src={img}
                alt="client"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />

              <p className="text-gray-600 mb-4">
                Far far away, behind the word mountains.
              </p>

              <h3 className="font-bold text-lg">Roger Scott</h3>
              <p className="text-blue-600 font-medium">
                {index === 0
                  ? "System Analyst"
                  : index === 1
                  ? "Marketing Manager"
                  : "Interface Designer"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <div className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Do You Want To Earn With Us? <br /> So Don't Be Late.
        </h1>

        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:scale-105 transition duration-300">
          Become A Driver
        </button>
      </div>

      {/* STATS SECTION */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">
          {[
            { number: "60", text: "Years Experienced" },
            { number: "1,090", text: "Total Cars" },
            { number: "2,590", text: "Happy Customers" },
            { number: "67", text: "Total Branches" },
          ].map((item, index) => (
            <div
              key={index}
              className="transform hover:scale-110 transition duration-300"
            >
              <h1 className="text-4xl font-bold text-blue-600">
                {item.number}
              </h1>
              <p className="text-gray-600 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 px-10">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-bold mb-4">
            CAR<span className="text-green-400">BOOK</span>
          </h2>

          <p className="text-gray-400 mb-6">
            Far far away, behind the word mountains.
          </p>

          <div className="flex gap-6 text-xl">
            <i className="fab fa-twitter hover:text-green-400 transition"></i>
            <i className="fab fa-facebook-f hover:text-green-400 transition"></i>
            <i className="fab fa-instagram hover:text-green-400 transition"></i>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default About;