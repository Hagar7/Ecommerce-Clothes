import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories} from "../../store/CatgoriesSlice";
import { filterByPrice, getProducts } from "../../store/ProductsSlice";
import style from "./Filter.module.scss";

export default function Filter() {
  let { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <>
      <div className={`${style.filters} py-5`}>
        <h4>Price</h4>
        <div className={`${style.range}`}>
          <input
            type="range"
            min={25}
            max={1000}
            onChange={(e) => dispatch(filterByPrice(e.target.value))}
            className={`${style.filtersRange} form-range`}
          />
          <label htmlFor="test">{}</label>
        </div>
      </div>
      <div className={`${style.categoryFilter}`}>
        <h4>Categories</h4>
        {categories.slice(0, 5).map((item) => (
          <div className={`${style.formCheck} form-check`} key={item.id}>
            <input
              className="form-check-input"
              type="checkbox"
              value={item.name}
              id="flexCheckDefault"
              onClick={() => dispatch(getProducts(item.id))}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
