import { works } from "@/data/works";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Works() {
  return (
    <div className="container-fluid px-3 py-3">
      <div className="py-5 works-bg px-4 rounded-3 shadow">
        <section className="mb-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
          <div>
            <h1>My Works</h1>
            <p>
              <small>
                My work combines a step-by-step procedure ensuring customer
                satisfaction is met.
              </small>
            </p>
          </div>

          <div>
            <Link href="#" className="btn btn-sm btn-outline-success">
              Get In Depth{" "}
              <span>
                <i className="bi bi-chevron-right" />
              </span>
            </Link>
          </div>
        </section>

        <hr />

        <div>
          {works?.map((work, index) => (
            <div
              className="row py-2 align-items-center border-bottom mb-3"
              key={work?.id}
            >
              <div
                className={`col-md-6 col-sm-12 d-flex flex-column justify-content-center ${
                  index % 2 === 0 ? "order-md-1" : "order-md-2"
                }`}
              >
                {/* Button is now wrapped in a div to avoid taking full width */}
                <div className="mb-5">
                  <button className="border rounded-pill btn btn-sm">
                    {work?.tag}
                  </button>
                </div>

                <div>
                  <h5 className="work-title">{work?.title}</h5>
                  <p className="work-description">{work?.description}</p>
                </div>
              </div>

              <div
                className={`col-md-6 col-sm-12 d-flex align-items-center justify-content-center ${
                  index % 2 === 0 ? "order-md-2" : "order-md-1"
                }`}
              >
                <Image
                  src={work?.image}
                  width={300}
                  height={300}
                  priority
                  className="img-fluid shadow"
                  alt="Work Image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;
