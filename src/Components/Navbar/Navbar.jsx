import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

export default function Navbar({ toggle }) {
  const { cart } = useSelector((state) => state.cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <>
      <nav className={`${style.myNav} navbar navbar-expand-lg  `}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="">
            <h2 className={`${style.logo}`}>Shoppy</h2>
          </NavLink>
          <button
            className={`${style.navbarToggle} navbar-toggler`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " nav-link mainBG txtFont" : "nav-link"
                  }
                  aria-current="page"
                  to=""
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " nav-link mainBG txtFont" : "nav-link"
                  }
                  to="shop"
                >
                  Shop
                </NavLink>
              </li>
            </ul>
            <ul className={`${style.icons} navbar-nav ms-auto mb-2 mb-lg-0`}>
              <li className="nav-item">
                <i className="fa-solid fa-cart-shopping" onClick={toggle}>
                  <span>{getTotalQuantity() || 0}</span>
                </i>
              </li>
              <li className="nav-item">
                <i className="fa-solid fa-heart">
                  <span>0 </span>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
