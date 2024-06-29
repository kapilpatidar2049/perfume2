import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import shop from "../../assets/shopping.png";
import satisfaction from "../../assets/satisfaction.png";
import page from "../../assets/page.png";
import gift from "../../assets/giftCard.svg";
import freeship from "../../assets/freeshipImg.svg";
import shopbottle1 from "../../assets/shop-bottle2.png";
import shopbottle2 from "../../assets/shop-bottle3.png";
import bottle from "../../assets/Bottle2.png";
import discount_img from "../../assets/discount.png";
import paytm from '../../assets/paytm.png';
import razor from '../../assets/razorpay.png';
import upi from '../../assets/upi.png';
import phone from '../../assets/PhonePe.png';
import gpay from '../../assets/gpay.png';
import "bootstrap/dist/css/bootstrap.min.css";
import '../Css/AddCart.css';
import FAQ from './FAQ';


const Addcart = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedImage = queryParams.get('selectedImage');
  const [counts, setCounts] = useState({
    item1: 1,
    item2: 1,
    item3: 1,
    item4: 1,  });

  const updateCount = (itemId, action) => {
    setCounts(prevCounts => {
      const newCounts = { ...prevCounts };
      if (action === 'increment') {
        newCounts[itemId]++;
      } else if (action === 'decrement' && newCounts[itemId] > 1) {
        newCounts[itemId]--;
      }
      return newCounts;
    });
  };
  return (
    <>
    <div className="container ">        
        <div className="row ">
            <div className="cart1-detail col-lg-8">
              <div className="row ">
                <div className=" col-lg-10">
                  <div className="heading">
                    <h3>SHOPPING BAG </h3>
                  </div>
                  <h5 className='mb-4 price'>Subtotal: ₹ 5400 </h5>
                  <div className='giftbox align-center'>
                    <img src={gift} alt="" />
                    <p>Get 1 free gift upon ₹ 3000 spend.</p>
                  </div>
                  <div className="row bottle-img mb-5">
                    <div className='col-lg-3 col-6'>
                      <img src={bottle} alt="" className="bottle-detail" />
                      <h6 className="add mt-2 "> <button onClick={() => updateCount('item1', 'decrement')} className="cart1-buton "> − </button> {counts.item1} <button onClick={() => updateCount('item1', 'increment')} className="cart1-buton"> + </button> </h6>
                    </div>
                    <div className='col-lg-9 col-md-9 col-6 mt-5'>
                      <h6>Lorem ipsum dolor sit, amet consectetur adipisicing</h6>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing.Lorem ipsum
                        dolor sit, amet consectetur adipisicing. </p>
                      <h5 className="mt-3 price">₹ 5000</h5>
                    </div>
                  </div>
                  <h4 className='giftPackage'>Need a gift package</h4>
                  <div className="row mb-5">
                    <div className=' col-lg-3 col-6'>
                      <img src={bottle} alt="" className="bottle-detail" />
                    </div>
                    <div className=' col-lg-9 col-6 mt-5'>
                      <h6>Lorem ipsum dolor sit, amet consectetur adipisicing</h6>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing.Lorem ipsum
                        dolor sit, amet consectetur adipisicing. </p>
                      <h5 className="mt-3 price">₹ 5000</h5>
                      <button type='button' className='cartbutton mt-2'>ADD TO CART</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 Carrt'>
              <div className="cart1-summary mt-5 p-2">
                <h3 className="mt-2 hover-txt">Order Summary</h3>
                <div className="txt">
                  <p className="mt-4 hover-txt ">Sub Total</p>
                  <p className="mt-4 hover-txt">₹ 5400 </p>
                </div>
                <div className="txt">
                  <p className="mt-2 hover-txt">Shipping</p>
                  <p className="mt-2  hover-txt">₹ 100</p>
                </div>
                <div className='giftbox align-center mt-2'>
                  <img src={freeship} alt="" />
                  <p>Get free delivery upon ₹ 2000 </p>
                </div>
                <div className="row mx-2">
                  <div class="col-lg-8 mt-2 discount-text">
                    <span><img src={discount_img} alt="" className="discount-img" /></span>
                    <input
                      type="text"
                      className="input1"
                      placeholder="Use Promocode"
                      aria-label="First name"
                    />
                  </div>
                  <div class="col-lg-4 mt-2">
                    <button type="button" class="use-btn btn-outline-secondary">
                      Use
                    </button>
                  </div>
                </div>
                <hr />
                <div className="txt">
                  <p className="mt-2 hover-txt">Totals</p>
                  <p className="mt-2 hover-txt">₹ 5550</p>
                </div>
              
                <div class="check-btn mt-2">
                  <button type="button" class="checkout-btn btn-outline-secondary">
                    Checkout
                  </button>
                </div>
                <div className="row arrow1 ">
                  <h5><Link to='/' className="continue-shop"> 
                    Continue Shopping
                  &nbsp;  <i className=" fa-solid fa-arrow-right arroww" />
                </Link></h5>
                </div>
              </div>
              <div className='text-center mt-3 price'>
                AVAILABLE PAYMENT METHODS
                <div className='text-center'>
                  <img src={paytm} alt="" width={40} />&nbsp;&nbsp;
                  <img src={razor} alt="" width={40} />&nbsp;&nbsp;
                  <img src={upi} alt="" width={40} />&nbsp;&nbsp;
                  <img src={phone} alt="" width={40} />&nbsp;&nbsp;
                  <img src={gpay} alt="" width={40} />
                </div>
              </div>
            </div>
          </div>

          <div class="row section text-center">
            <div class="">
              <div class="card1">
                <div class="first_sectiontext-center">
                  <img src={satisfaction} alt="" />
                  <h4>Satisfaction Guaranteed</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, Quis labore vel
                    mollitia neque consequuntur aperiam.
                  </p>
                </div>
              </div>
            </div>
          </div>
         
      </div>
      <div>
      <FAQ/>
      </div>
    </>
  );
};

export default Addcart; 
