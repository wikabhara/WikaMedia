"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Home", href: "/" },
  { name: "Arts", href: "/category/arts" },
  { name: "Automobiles", href: "/category/automobiles" },
  { name: "Books", href: "/category/books" },
  { name: "Business", href: "/category/business" },
  { name: "Fashion", href: "/category/fashion" },

  { name: "Food", href: "/category/food" },
  { name: "Health", href: "/category/health" },
  { name: "Politics", href: "/category/politics" },
  { name: "Science", href: "/category/science" },
  { name: "Technology", href: "/category/technology" },
  { name: "World", href: "/category/world" },
];

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleOpenSearch = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      handleCloseSearch();
    }
  };

  return (
    <>
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {categories.map((category) => (
                <li key={category.href}>
                  <Link href={category.href}>{category.name}</Link>
                </li>
              ))}
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
      </div>

      <dialog
        id="search_modal"
        className={`modal ${isSearchOpen ? "modal-open" : ""}`}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Pencarian</h3>
          <form onSubmit={handleSearchSubmit}>
            <div className="form-control">
              <input
                type="text"
                placeholder="Ketik untuk mencari berita..."
                className="input input-bordered w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleCloseSearch}>
                Batal
              </button>
              <button type="submit" className="btn btn-primary">
                Cari
              </button>
            </div>
          </form>
        </div>
        <div className="modal-backdrop" onClick={handleCloseSearch}></div>
      </dialog>
    </>
  );
}
