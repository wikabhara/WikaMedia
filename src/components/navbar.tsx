import React from "react";
import Wmedialogo from "@/assets/img/Wmedia1.png";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-2xl"
          >
            <IoIosArrowDropdown />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <a>Entertaiment</a>
            </li>
            <li>
              <a>Sports</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/">
          <img src={Wmedialogo.src} alt="Wmedia Logo" className="h-10" />
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle text-xl">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
