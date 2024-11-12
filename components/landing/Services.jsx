import Link from "next/link";
import React from "react";

function Services() {
  return (
    <div className="container-fluid px-3 py-3">
      <div className="py-5 services-bg px-3 text-white rounded-3">
        <section className="mb-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
          <div>
            <h1>My Service</h1>
            <p>
              <small>
                Technology oriented solutions to boost your business.
              </small>
            </p>
          </div>

          <div>
            <Link href="#" className="btn btn-sm btn-outline-light">
              Schedule Discussion{" "}
              <span>
                <i className="bi bi-chevron-right" />
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
