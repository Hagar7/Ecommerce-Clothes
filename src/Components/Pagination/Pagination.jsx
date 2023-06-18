import { useDispatch } from "react-redux";
import { getProducts } from "../../store/ProductsSlice";

import style from "./Pagination.module.scss";

export default function Pagination() {
  let dispatch = useDispatch();

  let pageNumber = new Array(5).fill(1).map((e, index) => index + 1);

  return (
    <nav
      aria-label="Page navigation example"
      className={`${style.pagination} d-flex justify-content-center py-3`}
    >
      <ul className="pagination">
        {pageNumber.map((num, index) => (
          <li
            className="page-item"
            onClick={() => dispatch(getProducts(num))}
            key={index}
          >
            <span className="page-link">{num}</span>
          </li>
        ))}
        {/* <li className="page-item">
      <span className="page-link"  aria-label="Next" onClick={()=>dispatch(increasePage(pageNumber))}>
        <span aria-hidden="true">&raquo;</span>
      </span>
    </li> */}
      </ul>
    </nav>
  );
}
