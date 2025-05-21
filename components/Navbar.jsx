"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathName = usePathname();
  return (
    <>
      <nav className="navbar navbar-expand-md bg-white sticky-top border-bottom">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand navbar-logo">
            Dalienst Oduor
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            aria-controls="collapsibleNavbar"
          >
            <i className="bi bi-list text-dark"></i>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  href="/"
                  className={`${
                    pathName === "/"
                      ? "nav-link active text-secondary"
                      : "nav-link text-dark"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/#about"
                  className={`${
                    pathName === "/#about"
                      ? "nav-link active text-secondary"
                      : "nav-link text-dark"
                  }`}
                  aria-label="About"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/#services"
                  className={`${
                    pathName === "/#services"
                      ? "nav-link active text-secondary"
                      : "nav-link text-dark"
                  }`}
                  aria-label="Services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/#works"
                  className={`${
                    pathName === "/#works"
                      ? "nav-link active text-secondary"
                      : "nav-link text-dark"
                  }`}
                  aria-label="Works"
                >
                  Works
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/#footer"
                  className={`${
                    pathName === "/#footer"
                      ? "nav-link active text-secondary"
                      : "nav-link text-dark"
                  }`}
                  aria-label="Contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
