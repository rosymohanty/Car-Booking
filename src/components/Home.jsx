import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO SECTION */}
      <div className="min-h-screen bg-cover bg-center bg-[url('./Assests/3XHQcs.jpg')]">

        {/* NAVBAR */}
        <div className="flex justify-between items-center px-10 py-6 text-white">
          <h1 className="text-2xl font-extrabold tracking-wider">
            CAR<span className="text-green-400">BOOK</span>
          </h1>

          <ul className="flex gap-8 font-semibold">
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

        {/* HERO TEXT */}
        <div className="text-center text-white mt-40 animate-fadeIn">
          <h1 className="text-5xl font-bold mb-6">
            Fast & Easy Way To Rent A Car
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-20 bg-white px-6">

        <div className="bg-blue-600 p-8 rounded-xl shadow-xl w-full max-w-md transform hover:scale-105 transition duration-300">
          <h2 className="text-white text-2xl font-bold mb-6 text-center">
            Make your trip
          </h2>

          <input className="w-full p-3 mb-4 rounded-lg" placeholder="Pick-up location" />
          <input className="w-full p-3 mb-4 rounded-lg" placeholder="Drop-off location" />
          <input type="date" className="w-full p-3 mb-4 rounded-lg" />
          <input type="time" className="w-full p-3 mb-4 rounded-lg" />

          <button className="w-full bg-green-400 py-3 rounded-lg font-bold hover:bg-green-500 transition">
            Rent A Car Now
          </button>
        </div>

        <div className="max-w-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            Better Way to Rent Your Perfect Cars
          </h2>
          <p className="text-gray-600">
            Choose location → Select deal → Reserve your rental
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:scale-105 transition">
            Reserve Your Perfect Car
          </button>
        </div>
      </div>

      {/* FEATURED CARS */}
      <div className="bg-gray-100 py-20 px-6">
        <h2 className="text-center text-4xl font-bold mb-12">
          Featured Vehicles
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[props.image1, props.image2, props.image3].map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img src={image} alt="car" className="h-56 w-full object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold mb-2">
                  Mercedes Grand Sedan
                </h4>
                <p className="text-green-500 font-bold mb-4">$500/day</p>

                <div className="flex justify-center gap-4">
                  <button className="bg-green-400 px-4 py-2 rounded-lg hover:bg-green-500 transition">
                    Book Now
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIAL SECTION */}
      <div className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Happy Clients</h2>

        <div className="flex flex-wrap justify-center gap-10">
          {[props.image19, props.image20, props.image21].map((img, index) => (
            <div
              key={index}
              className="bg-gray-100 w-80 p-8 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <img
                src={img}
                alt="client"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <p className="text-gray-600 mb-4">
                Far far away, behind the word mountains.
              </p>
              <h3 className="font-bold">Roger Scott</h3>
            </div>
          ))}
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
            <p className="text-gray-400">About</p>
            <p className="text-gray-400">Services</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Customer Support</h4>
            <p className="text-gray-400">FAQ</p>
            <p className="text-gray-400">Contact</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400">info@yourdomain.com</p>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default Home;