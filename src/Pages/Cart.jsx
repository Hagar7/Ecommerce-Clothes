import { useDispatch, useSelector } from "react-redux";

import style from '../Stlyes/Cart.module.scss'
import { decrementQuantity, incrementQuantity, removeItem } from "../store/CartSlice";

export default function Cart() {
  const {cart}=useSelector(state=>state.cart)
const dispatch = useDispatch()





 const getTotal = ()=>{
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach(item => {
        totalQuantity+= item.quantity;
        totalPrice+= item.price * item.quantity
    });
    return {totalPrice, totalQuantity }
 }

  return (
    <>
 
 
        <div className={`${style.cart} py-5`}>
          <div className="container">
            <h3>Shopping Cart</h3>

            <table className="table caption-top">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
              {(cart).map((item)=>
                    <tr key={item.id}>
                      <th scope="row">#1</th>
                      <td>
                        <div className={`${style.tableContent}`}>
                          <img src={item.images[0]} alt=""/>
                          <h6>{item.title}</h6>
                        </div>
                      </td>
                      <td>
                        <h5>{item.price}$</h5>
                      </td>
                      <td>
                        {" "}
                        <div className={`${style.price}`}>
                          <span onClick={()=>dispatch(decrementQuantity(item.id))}>
                            -
                          </span>
                          <span>{item.quantity}</span>
                          <span onClick={()=>dispatch(incrementQuantity(item.id))}>
                            +
                          </span>
                        </div>
                      </td>
                      <td>
                        <i
                          className="fa-solid fa-xmark"
                          onClick={()=>dispatch(removeItem(item.id))}
                        ></i>
                      </td>
                    </tr>
              )}
              </tbody>
            </table>
            <div className="float-end">
              <button className="btn btn-danger m-2">
              {getTotal().totalQuantity} Items
              </button>
              <button className="btn btn-danger">
              {getTotal().totalPrice} $
              </button>
            </div>
            <div className="clearfix"></div>
            <button className="btn btn-dark my-3 float-end">
              Go To CheckOut
            </button>
            <div className="clearfix"></div>
          </div>
        </div>
    
    </>
  );
}
