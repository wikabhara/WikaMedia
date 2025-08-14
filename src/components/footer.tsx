import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/about" className="link link-hover">
          About us
        </Link>
      </nav>
      <aside>
        <p>
          WikaMedia Industries Ltd.
          <br />
        </p>
        <p>Copyright © 2025 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a>
            <FaTwitter />
          </a>
          <a>
            <FaYoutube />
          </a>
          <a>
            <FaFacebook />
          </a>
          <a>
            <FaInstagram />
          </a>
        </div>
      </nav>
    </footer>
  );
}
