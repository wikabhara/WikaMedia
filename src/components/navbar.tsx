"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleOpenSearch = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
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
              <Link href="/arts">Arts</Link>
            </li>
            <li>
              <Link href="/politics">Politics</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/">
          <Image
            src="/Wmedia1.png"
            alt="Wmedia Logo"
            className="h-10 w-auto"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-ghost btn-circle text-xl"
          onClick={handleOpenSearch}
        >
          <FaSearch />
        </button>
      </div>
      <dialog
        id="search_modal"
        className={`modal ${isSearchOpen ? "modal-open" : ""}`}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Pencarian</h3>
          <div className="form-control">
            <input
              type="text"
              placeholder="Ketik untuk mencari berita..."
              className="input input-bordered w-full"
            />
          </div>
          <div className="modal-action">
            <button className="btn" onClick={handleCloseSearch}>
              Tutup
            </button>
          </div>
        </div>

        <div className="modal-backdrop" onClick={handleCloseSearch}></div>
      </dialog>
    </div>
  );
}
