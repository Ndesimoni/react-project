import React from "react";
import Title from "./Titles";
import { ArrServices } from "../data";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title first="OUR" second="SERVICES" />

      <div className="section-center services-center">
        {ArrServices.map((services) => {
          const { id, text, icon, title } = services;

          return (
            <>
              <article className="service" key={id}>
                <span className="service-icon">
                  <i className={icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{text}</h4>
                  <p className="service-text">{title}</p>
                </div>
              </article>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
