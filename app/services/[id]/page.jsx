import { services } from "@/data/services";
import { works } from "@/data/works";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function ServiceDetail({ params }) {
  const { id } = params;
  const service = services.find((service) => service.id === parseInt(id));
  const relatedProjects = works.filter((work) =>
    service.relatedProjects.includes(work.id)
  );

  return (
    <>
      <div className="container-fluid px-3 py-3" id="service">
        <section className="services-bg text-white rounded-3 p-4 mb-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <div>
              <h1 className="display-5 fw-bold">{service.title}</h1>
              <p className="text-light">{service.description}</p>
            </div>
            <Link
              href="mailto:oduordalienst@gmail.com"
              className="btn btn-outline-light btn-sm mt-3 mt-md-0"
              aria-label={`Contact for ${service.title} consultation`}
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>

        <section className="px-4">
          <h2 className="about-heading">What We Offer</h2>
          <ul className="list-unstyled">
            {service.whatWeOffer.map((offer, index) => (
              <li key={index} className="mb-2">
                <i
                  className="bi bi-check-circle-fill text-primary me-2"
                  aria-hidden="true"
                />
                {offer}
              </li>
            ))}
          </ul>
        </section>

        {relatedProjects.length > 0 && (
          <section className="px-4">
            <h2 className="about-heading">Featured Projects</h2>
            <div className="row">
              {relatedProjects.map((project) => (
                <div
                  key={project.id}
                  className="col-lg-4 col-md-6 col-sm-12 mb-4"
                >
                  <div className="card h-100 work-card">
                    <Image
                      src={project.image}
                      width={300}
                      height={200}
                      className="card-img-top"
                      alt={project.title}
                      priority={project.id === 1}
                    />
                    <div className="card-body">
                      <div className="mb-2">
                        <span className="badge bg-primary">
                          {project.category}
                        </span>
                        {project.status !== "Completed" && (
                          <span className="badge bg-warning ms-2">
                            {project.status}
                          </span>
                        )}
                      </div>
                      <h5 className="card-title work-title">{project.title}</h5>
                      <p className="card-text work-description">
                        {project.description}
                      </p>
                      <Link
                        href={project.link}
                        className="btn secondary-btn"
                        aria-label={`View details for ${project.title}`}
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
