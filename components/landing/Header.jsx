"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <h1 className="text-center header-title">Dalienst Owino Oduor</h1>

          <p
            className="header-description text-center mt-4 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Offering strategic business consulting, digital transformation
            expertise, and technology solutions to drive growth, efficiency, and
            innovation. Integrating technology and modern software to empower
            your business.
          </p>

          <div className="d-flex gap-3 mt-4 justify-content-center">
            <Link href="#" className="primary-btn btn btn-sm rounded">
              Get In Touch
              <span className="ms-2">
                <i className="bi bi-arrow-up-right"></i>
              </span>
            </Link>

            <Link href="#" className="secondary-btn btn btn-sm rounded">
              Learn More
              <span className="ms-2">
                <i className="bi bi-arrow-down-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="px-4 rounded">
        <Image
          src="/coding.jpg"
          alt="Dalienst Oduor"
          layout="responsive"
          width={1920}
          height={500}
          style={{
            width: "100%",
          }}
        />
      </div> */}
    </>
  );
}

export default Header;
