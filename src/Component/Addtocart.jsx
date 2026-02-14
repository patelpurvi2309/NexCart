import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import { removecart } from '../slice/cartSlice';

const Addtocart = () => {

  const cartItems = useSelector(state => state.cart.items);

  const dispatch = useDispatch();
  const totalprice = cartItems.reduce((total, item) => {
    return total + Math.ceil(item.price * 80) * item.quantity;
  }, 0);


  return (
    <div className="container">
      {cartItems.length === 0 ? (
        <h2 className='text-center pt-5'>your cart is empty</h2>
        
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="row border p-3 mb-3 d-flex justify-content-between align-items-center">

            <div >
              <div className='cursor-pointer position-relative'>
                <span className='position-absolute top-0 end-0' ><RxCross2 onClick={() => dispatch(removecart(item.id))} /></span>
              </div>
            </div>

            <div className="col-lg-3">
              <img src={item.thumbnail} alt={item.title} className="img-fluid" />
              <h3 className='ms-5 text-success'>Added to cart</h3>
            </div>

            <div className="col-lg-6 ">
              <div className=''>
                <h4>{item.title}</h4>
                <p>Quantity: {item.quantity}</p>
                <h5>Price: ₹{Math.ceil(item.price * 80)}</h5>

                <h3>Sub Total :<span className='text-success'> ₹{Math.ceil(item.price * 80) * item.quantity}</span> </h3>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="text-end border-top pt-3">
        <h4>Total Amount : ₹{totalprice}</h4>
      </div>
    </div>
  );
};

export default Addtocart;
