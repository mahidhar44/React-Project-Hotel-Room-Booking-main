import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "fast service",
        info:
          "we will provide fast service",
      },
      {
        icon: <FaHiking />,
        title: "luxury",
        info:
          "we have luxury hotel rooms with good maintainance ",
      },
   
      {
        icon: <FaBeer />,
        title: "service",
        info:
          "we will provide better service as compared to remaining ",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
