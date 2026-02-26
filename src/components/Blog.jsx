import React from "react";
import { Link } from "react-router-dom";

const Blog = (props) => {

  const blogs = [
    props.image13,
    props.image14,
    props.image15,
    props.image16,
    props.image17,
    props.image18,
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
          <h1 className="text-5xl font-bold">Our Blog</h1>
        </div>
      </div>

      {/* BLOG SECTION */}
      <div className="py-20 bg-gray-100 px-6">

        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogs.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >
              <img
                src={image}
                alt="blog"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <p className="text-sm text-gray-500 mb-2">
                  Oct. 29, 2019 · Admin · 3 Comments
                </p>

                <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition">
                  Why Lead Generation is Key for Business Growth
                </h3>

                <p className="text-gray-600 text-sm mb-5">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>

                <button className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300">
                  Continue →
                </button>

              </div>
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

export default Blog;