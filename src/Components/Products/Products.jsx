import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/CartSlice";
import { getProducts } from "../../store/ProductsSlice";
import Filter from "../Filter/Filter";
import style from "./Products.module.scss";

export default function Products() {
  const { products } = useSelector((state) => state.products);
  let [modalData, setModalData] = useState("");
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProducts(1));
  }, [dispatch]);

  let getData = (state) => {
    setModalData(state);
  };
  return (
    <>
      <div className={`${style.products} py-5`}>
        <div className="container">
          <div className={`${style.title}`}>
            <h2>Products</h2>
            <p>Trendy</p>
          </div>
          <div className="row py-3">
            <div className="col-lg-3">
              <Filter />
            </div>
            {products.slice(0, 19).map((item) => (
              <div className="col-lg-3 col-md-6" key={item.id}>
                <div className={`${style.item}`}>
                  <img
                    src={item.images[0]}
                    alt="product-Images"
                    className="w-100"
                    onMouseOver={(e) => (e.currentTarget.src = item.images[1])}
                    onMouseOut={(e) => (e.currentTarget.src = item.images[0])}
                  />
                  <h3 className={`${style.Itemtitle}`}>{item.title}</h3>
                  <button className={`${style.myBtn} btn btn-danger`}>
                    {item.price} $
                  </button>
                  <div className={`${style.ItemBtn}`}>
                    <i
                      className="fa-regular fa-eye"
                      onClick={() => getData(item)}
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    ></i>
                    <button
                      className={`${style.Btn} btn btn-danger`}
                      onClick={() => dispatch(addToCart(item))}
                    >
                      Add To Cart
                    </button>
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </div>
                <div
                  className={`${style.Modal} modal fade`}
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className={`${style.modalTitle} modal-title fs-5`}
                          id="staticBackdropLabel"
                        >
                          {modalData.title}
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className={`${style.body} modal-body`}>
                        <img
                          src={modalData.images}
                          alt="productImg"
                          className={`${style.modalImg} w-100`}
                        />
                        <button
                          className={`${style.modalPrice} btn btn-danger`}
                        >
                          {modalData.price} $
                        </button>
                        <p className="text-muted">{modalData.description}</p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className={`${style.modalClose} btn btn-secondary`}
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
