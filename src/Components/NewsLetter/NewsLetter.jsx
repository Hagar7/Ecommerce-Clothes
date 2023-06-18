import React from "react";
import style from "./NewsLetter.module.scss";
export default function NewsLetter() {
  return (
    <div className={`${style.news}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 ">
            <div className={`${style.icon} text-center`}>
              <i className="fa-regular fa-envelope"></i>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className={`${style.title}`}>
              <h3>Join Our Newsletter</h3>
              <p className="text-muted">
                Subscribe to our newsletter and get 10% off your first purchase
              </p>
            </div>
          </div>
          <div className="col-lg-6  py-4">
            <div className="input-group flex-nowrap">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email Address"
                aria-label="email"
                aria-describedby="addon-wrapping"
              />
              <span className="input-group-text" id="addon-wrapping">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
