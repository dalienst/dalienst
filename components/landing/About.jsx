import { aboutSummary } from "@/data/aboutSummary";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="container-fluid bg-white px-3" id="about">
      <div className="py-5 px-4">
        <div className="row py-3">
          <div className="col-md-6 col-sm-12 mb-3">
            <p className="text-uppercase fw-bold text-secondary mb-0">About</p>
            <h3 className="about-heading">
              Providing Solutions to Drive Business Growth and Efficiency
            </h3>
          </div>

          <div className="col-md-6 col-sm-12 mb-3">
            {/* <p className="about-text">
              I specialize in delivering impactful services tailored to elevate
              business performance. From strategic consulting to technology
              integration, I offer solutions designed to streamline operations,
              enhance productivity, and adapt to evolving markets. My approach
              is rooted in creating measurable results, helping clients achieve
              growth and maintain a competitive edge in today’s dynamic business
              environment.
            </p> */}

            <p className="about-text">
              I provide targeted solutions to drive business growth and
              operational efficiency. With services ranging from strategic
              planning to digital transformation, I work closely with clients to
              streamline processes, enhance productivity, and build future-ready
              operations. My goal is to turn business challenges into
              opportunities for sustainable success and measurable impact.
            </p>

            {/* <p className="about-text">
              I offer a comprehensive range of services designed to empower
              businesses to thrive in today’s fast-paced digital landscape. From
              strategic planning and digital transformation to technology
              implementation and data-driven insights, my solutions are tailored
              to address each business&apos;s unique needs and goals. With a focus on
              operational efficiency and sustainable growth, I help companies
              streamline processes, improve productivity, and enhance customer
              engagement. Through personalized consultation and hands-on
              support, I work closely with clients to turn challenges into
              opportunities, drive meaningful change, and build resilient,
              future-ready enterprises. Let’s create impactful, lasting
              solutions that take your business to the next level.
            </p> */}

            <div className="row">
              {aboutSummary?.map((item) => (
                <div className="col-md-4 col-sm-12 mb-3" key={item.id}>
                  <div className="card h-100 rounded-5 bg-light">
                    <div className="card-body">
                      {item?.icon}

                      <p className="card-text mt-3 fw-bold about-summary">
                        <small>{item.title}</small>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
