import React from "react";
import Title from "./Titles";
import { TourseInfo } from "../data";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title
        first="FEATURED"
        second="TOURS
"
      />

      <div className="section-center featured-center">
        {TourseInfo.map((elle) => {
          const { id, image, date, title, text, contry, days, amount } = elle;
          return (
            <>
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{text}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{" "}
                      {contry}
                    </p>
                    <p>{days}</p>
                    <p>{amount}</p>
                  </div>
                </div>
              </article>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
