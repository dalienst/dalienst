import { works } from "@/data/works";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Works() {
  return (
    <div className="container-fluid px-3 py-5" id="works">
      <div className="py-5 works-bg px-4 rounded-3 shadow">
        <section className="mb-4 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
          <div>
            <h1 className="display-5 fw-bold">My Works</h1>
            <p className="text-muted">
              <small>
                Delivering innovative solutions with a focus on impact and
                client satisfaction.
              </small>
            </p>
          </div>
          {/* TODO: Add products page */}
          <div>
            <Link
              href="mailto:oduordalienst@gmail.com"
              className="btn btn-sm primary-btn"
              aria-label="Contact for project details"
            >
              Start Building{" "}
              <i className="bi bi-chevron-right" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <div className="row">
          {works.map((work) => (
            <div key={work.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100 work-card">
                <Image
                  src={work.image}
                  width={300}
                  height={300}
                  className="card-img-top img-fluid"
                  alt={work.title}
                  priority={work.id === 1}
                />
                <div className="card-body">
                  <div className="mb-2">
                    <span className="badge bg-primary">{work.category}</span>
                    {work.status !== "Completed" && (
                      <span className="badge bg-warning ms-2">
                        {work.status}
                      </span>
                    )}
                  </div>
                  <h5 className="card-title work-title">{work.title}</h5>
                  <p className="card-text work-description">
                    {work.description}
                  </p>
                  <div className="mb-3">
                    {work.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="badge tech-badge me-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* <ul className="list-unstyled mb-3">
                    {work.impact.slice(0, 2).map((item, index) => (
                      <li key={index} className="mb-1">
                        <i
                          className="bi bi-check-circle-fill text-primary me-2"
                          aria-hidden="true"
                        />
                        <small>{item}</small>
                      </li>
                    ))}
                  </ul> */}
                  <Link
                    href={work.link}
                    className="btn secondary-btn"
                    aria-label={`View details for ${work.title}`}
                  >
                    View Project
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

export default Works;
