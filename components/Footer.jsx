"use client";
import { services } from "@/data/services";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const menu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/#about",
  },
  {
    id: 3,
    title: "Services",
    link: "/#services",
  },
  {
    id: 4,
    title: "Works",
    link: "/#works",
  },
  {
    id: 5,
    title: "Contact",
    link: "/#contact",
  },
];

const socials = [
  {
    id: 1,
    title: "Linkedin",
    icon: <FaLinkedinIn className="social-icon" />,
    link: "https://www.linkedin.com/in/dalienst-oduor-877a21203/",
  },
  {
    id: 2,
    title: "Github",
    icon: <i className="bi bi-github social-icon"></i>,
    link: "https://github.com/dalienst",
  },
  {
    id: 3,
    title: "Twitter",
    icon: <i className="bi bi-x social-icon"></i>,
    link: "https://x.com/dalienstafrica",
  },
];

function Footer() {
  return (
    <>
      <div className="container-fluid px-3 py-3" id="footer">
        <div className="py-3 services-bg px-3 text-white rounded-3">
          <div className="bg-white rounded py-5">
            <div className="container mx-auto">
              <h3 className="text-center text-dark mb-2">
                Ready to elevate your business to the next level?
              </h3>
              <p
                className="text-center text-dark mx-auto"
                style={{ maxWidth: "500px" }}
              >
                Ready to elevate your business higher levels? Let me create
                solutions that drive results and growth.
              </p>

              <div className="d-flex justify-content-center">
                <Link
                  href="mailto:oduordalienst@gmail.com"
                  className="btn footer-btn btn-sm"
                  target="_blank"
                >
                  <span>
                    <i className="bi bi-envelope-fill me-2"></i>
                  </span>
                  Let&lsquo;s Talk
                </Link>
              </div>
            </div>
          </div>

          <div className="py-5 px-3 mt-3">
            <div className="row">
              <div className="col-md-6 col-sm-12 mb-3">
                <h2>Dalienst Owino Oduor</h2>
                <p className="footer-text">
                  Offering strategic business consulting, digital transformation
                  expertise, and technology solutions to drive growth,
                  efficiency, and innovation. Integrating technology and modern
                  software to empower your business.
                </p>
              </div>

              <div className="col-md-6 col-sm-12 mb-3">
                <div className="row">
                  <div className="col-md-4 col-sm-12 mb-3">
                    <h4>Menu</h4>
                    <ul className="list-unstyled">
                      {menu.map((item) => (
                        <li key={item.id}>
                          <Link
                            href={item.link}
                            className="text-decoration-none footer-link"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-md-4 col-sm-12 mb-3">
                    <h4>Socials</h4>
                    <ul className="list-unstyled">
                      {socials.map((item) => (
                        <li key={item.id}>
                          <Link
                            href={item.link}
                            className="text-decoration-none footer-link"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-md-4 col-sm-12 mb-3">
                    <h4>Services</h4>
                    <ul className="list-unstyled">
                      {services?.map((service) => (
                        <li key={service.id}>{service.title}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="py-3">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Dalienst Owino Oduor. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
