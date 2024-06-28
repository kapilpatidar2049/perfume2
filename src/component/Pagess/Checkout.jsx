import React from 'react'
import "../Css/Checkout.css";
import bottle_show from '../../assets/bottle-cyclinder.png'
import payements_method from '../../assets/pay_logo1.png'
import paytm from '../../assets/paytm.png';
import razor from '../../assets/razorpay.png';
import upi from '../../assets/upi.png';
import phone from '../../assets/PhonePe.png';
import gpay from '../../assets/gpay.png';

const checkout = () => {
  return (
    <>
     <div className="container mt-5">
          <div className='row mt-5'>
            <div className='col-lg-8 mt-5'>
              <div class="lg-6 mb-3 mt-5">
                <label for="exampleFormControlInput1" class="form-label ">
                  First Name
                </label>
                <input
                  type="firstName"
                  class="form-control "
                  id="exampleFormControlInput1"
                  placeholder="First Name"

                />
              </div>

              <div class="lg-6 mb-3">
                <label for="exampleFormControlInput2" class="form-label  mt-2">
                  Last Name
                </label>
                <input
                  type="lastName"
                  class="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Last Name"
                /> <div class="valid-feedback">Looks good!</div>
              </div>

              <div class="lg-6 mb-3">
                <label for="exampleFormControlInput3" class="form-label   mt-2">
                  Phone Number
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput3"
                  placeholder="Phone Number"
                />
              </div>

              <div class="lg-6 mb-3">
                <label for="exampleFormControlInput4" class="form-label   mt-2">
                  City
                </label>
                <input
                  type="city"
                  class="form-control"
                  id="exampleFormControlInput4"
                  placeholder="City"
                />
              </div>

              <div class="lg-6 mb-3">
                <label for="exampleFormControlInput5" class="form-label   mt-2">
                  Address Details
                </label>
                <input
                  type="city"
                  class="form-control"
                  id="exampleFormControlInput5"
                  placeholder="Enter Additional Address Details e.g: Block No/ Floor No/ Unit No"
                />
              </div>

              <div class="lg-6 mb-3">
                <label for="exampleFormControlInput6" class="form-label   mt-2">
                  Zip Code
                </label>
                <input
                  type="zipCode"
                  class="form-control"
                  id="exampleFormControlInput6"
                  placeholder="eg. 123456 "
                />
              </div>

              <div class="lg-6 mb-3">
                <label for="exampleFormControlTextarea1" class="form-label   mt-2" >Leave Our team a note</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Add a note for our team preparing your order if you have any special request..."></textarea>
              </div>

              <div class="col-12 my-3">
                <button class="btn paymentbutton" type="submit"> Continue to Payment</button>
              </div>
            </div>
            <div className=" col-lg-4 mt-5">
              <div className="cart-summary px-3 mt-5">
                <h3 className="mt-2 hover-txt">Order Summary</h3>
                <div className='row'>
                  <div className='col-lg-4 col-6 small-bottle-show'><img src={bottle_show} /></div>
                  <div className='col-lg-8 col-6'>  <p>Perfume Creation</p>
                    <p>first and second fragnace name</p>
                    <p>Text: Ashvini</p>
                    <p>Qty: 1</p>
                  </div>
                </div>
                <div className="txt">
                  <p className="mt-4 hover-txt ">Sub Total</p>
                  <p className="mt-4 hover-txt price">₹ 5400 </p>
                </div>
                <div className="txt">
                  <p className="mt-4 hover-txt">Shipping</p>
                  <p className="mt-4 hover-txt price">₹ 100</p>
                </div>

                <hr />
                <div className="txt">
                  <p className="mt-2 hover-txt">Totals</p>
                  <p className="mt-2 hover-txt price">₹ 5550</p>
                </div>
                {/*<p className="mt-4">Points earned</p>*/}


                <div className='mt-5 text-center'>
                  <h5>Available Payments method</h5>
                  <img src={paytm} alt="" width={40} />&nbsp;&nbsp;
                  <img src={razor} alt="" width={40} />&nbsp;&nbsp;
                  <img src={upi} alt="" width={40} />&nbsp;&nbsp;
                  <img src={phone} alt="" width={40} />&nbsp;&nbsp;
                  <img src={gpay} alt="" width={40} />
                </div>


              </div>
            </div>
          </div>
        </div>
   </>
  )
}

export default checkout
