import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-5">
      <div>
        <Link to={"/"}>
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">WebLearn's Blog</h2>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-x-5">
          <li className="lg:text-lg">
            <button>
              <Link to={"/"}>Home</Link>
            </button>
          </li>
          <li className="lg:text-lg">
            <button>
              <Link to={"/blog"}>Blog</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
