import React from "react";
import style from "./Slider.module.scss";

export default function Slider() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className={`${style.slider} carousel slide`}
        data-bs-ride="false"
      >
        <div className={`${style.carouselIndicators} carousel-indicators`}>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className={`${style.car} carousel-item active`}>
            <img
              src="./images/444.jpg"
              className="d-block w-100"
              alt="slider"
            />
            <div
              className={`${style.caption} carousel-caption d-none d-lg-block`}
            >
              <h5>Trendy Products</h5>
              <p>
                Fashion & Clothing is the one makes you look awesome and unique
                from others!
              </p>
            </div>
          </div>
          <div className={`${style.car} carousel-item `}>
            <img
              src="./images/544.jpg"
              className="d-block w-100"
              alt="slider"
            />
            <div
              className={`${style.caption} carousel-caption d-none d-lg-block`}
            >
              <h5>Trendy Products</h5>
              <p>
                Fashion & Clothing is the one makes you look awesome and unique
                from others!
              </p>
            </div>
          </div>
          <div className={`${style.car} carousel-item `}>
            <img
              src="./images/744.jpg"
              className="d-block w-100"
              alt="slider"
            />
            <div
              className={`${style.caption} carousel-caption d-none d-lg-block`}
            >
              <h5>Trendy Products</h5>
              <p>
                Fashion & Clothing is the one makes you look awesome and unique
                from others!
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
