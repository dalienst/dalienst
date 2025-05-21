import { services } from "@/data/services";
import Link from "next/link";
import React from "react";

function Services() {
  return (
    <div className="container-fluid px-3 py-3 border-bottom" id="services">
      <div className="py-5 services-bg px-4 text-white rounded-3">
        <section className="mb-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
          <div>
            <h1>My Services</h1>
            <p>
              <small>
                Technology oriented solutions to boost your business.
              </small>
            </p>
          </div>

          <div>
            <Link
              href="mailto:oduordalienst@gmail.com"
              target="_blank"
              className="btn btn-sm btn-outline-light"
            >
              Schedule Discussion{" "}
              <span>
                <i className="bi bi-chevron-right" />
              </span>
            </Link>
          </div>
        </section>

        <div className="row py-3">
          {services?.map((service) => (
            <>
              <div className="col-md-4 col-sm-12 mb-3">
                <div className="card h-100 service-card">
                  <div className="card-body">
                    <i className="bi bi-grid-3x3-gap-fill service-icon"></i>
                    <h6 className="card-title service-title mt-3">
                      {service?.title}
                    </h6>
                    <p className="card-text service-description">
                      <small>{service?.description}</small>
                    </p>

                    
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
