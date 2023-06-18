import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCategories,
  getProductsOfCategory,
} from "../../store/CatgoriesSlice";
import style from "./Categories.module.scss";

export default function Categories() {
  let dispatch = useDispatch();
  let { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <div className={`${style.categories}`}>
        <div className="container">
          <div className={`${style.items}`}>
            {categories.slice(0, 5).map((item) => (
              <Link
                to={`categories/${item.id}`}
                onClick={() => dispatch(getProductsOfCategory(item.id))}
                key={item.id}
              >
                <div className={`${style.item}`}>
                  <img src={item.image} alt="categoryImg" />
                  <h5>{item.name}</h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
