import { services } from "@/data/services";
import Link from "next/link";
import React from "react";

function Services() {
  return (
    <div className="container-fluid px-3 py-3 border-bottom" id="services">
      <div className="py-5 services-bg px-4 text-white rounded-3">
        <section className="mb-4 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
          <div>
            <h1 className="display-5 fw-bold">My Services</h1>
            <p className="text-light">
              <small>
                Creative, tech-driven solutions to elevate your business.
              </small>
            </p>
          </div>
          <div>
            <Link
              href="mailto:oduordalienst@gmail.com"
              target="_blank"
              className="btn btn-sm btn-outline-light rounded-3"
              aria-label="Schedule a discussion about services"
            >
              Schedule Discussion{" "}
              <span>
                <i className="bi bi-chevron-right" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </section>

        <div className="row py-3">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100 service-card">
                <div className="card-body">
                  <i
                    className={`${service.icon} service-icon`}
                    aria-hidden="true"
                  ></i>
                  <h6 className="card-title service-title mt-3">
                    {service.title}
                  </h6>
                  <p className="card-text service-description">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.id}`}
                    className="btn btn-sm btn-outline-light rounded-3"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More{" "}
                    <i className="bi bi-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
