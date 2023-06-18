import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../store/CartSlice";
import style from "./SideBar.module.scss";

export default function SideBar({ isOpen, setIsOpen }) {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const close = () => {
    setIsOpen(false);
  };

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <>
      <div
        className={`${style.side}`}
        style={{ width: isOpen ? "300px" : "0px", transition: "all 0.5s ease" }}
      >
        <div className={`${style.header}`}>
          <h6>Shopping Cart ({getTotalQuantity() || 0}) </h6>
          <i className="fa-solid fa-xmark" onClick={close}></i>
        </div>
        {cart.map((item) => (
          <div className={`${style.body} p-3`} key={item.id}>
            <div>
              <img src={item.images[0]} alt="product" />
            </div>
            <div className={`${style.center}`}>
              <h6>{item.name}</h6>
              <div className={`${style.amount}`}>
                <span onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </span>
                <span>{item.quantity}</span>
                <span onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </span>
              </div>
            </div>
            <div className={`${style.price}`}>
              <i
                className="fa-solid fa-xmark"
                onClick={() => dispatch(removeItem(item.id))}
              ></i>
              <span>{item.price} $</span>
            </div>
          </div>
        ))}
        <div className={`${style.btns}`}>
          <Link className={`${style.myBtn} btn btn-danger`} to="cart">
            View Cart
          </Link>
        </div>
      </div>
    </>
  );
}
