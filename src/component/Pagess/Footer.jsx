import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logoyellow2.png';
import paytm from '../../assets/paytm.png';
import razor from '../../assets/razorpay.png';
import upi from '../../assets/upi.png';
import phone from '../../assets/PhonePe.png';
import gpay from '../../assets/gpay.png';



const Footer = ({ }) => {
  return (

    <>
      <div className='footer mb-1' id='footer'>
        <div className='footer2 row pb-3'>
          <div className='row logo_row'>
            <div className='col-lg-6  '>
              <Link to='/' className='linkss'><img src={logo} /></Link>
            </div>
            <div className='col-lg-6 col-xs-12 footer_list_sub'>
              <p>Subscribe to Our NewsLetter :</p>
              <div className='subscribeInput'>
                <input type='email' placeholder='dazy@gmail.com' className='input_type mt-2' />
                <button className='Submit_btn'> Submit </button>
              </div>
            </div>
          </div>
          <div className='col-lg-1 coll1'></div>
          <div className='col-lg-2 col-xs-6 footer_list'>
            <p>Our Kits :</p>
            <ul>
            <Link to='/TravelKit' className='linkss'><li> Travel Kit </li></Link>
            <Link to='/HimAndHerKit' className='linkss'><li> Him & Her Kit </li></Link>
            <Link to='/FamilyKit' className='linkss'><li> Family Kit </li></Link>
            <Link to='/KidsKit' className='linkss'><li> Kids Kit </li></Link>
            <Link to='/' className='linkss'><li> DIY Kit </li></Link>
            </ul>
          </div>
          <div className='col-lg-2 col-xs-6 footer_list'>
            <p>Products :</p>
            <ul>
            <Link to='/' className='linkss'><li> All Perfume </li></Link>
            <Link to='/Create_perfume' className='linkss'><li> Create Perfume </li></Link>
            <Link to='/HimPage' className='linkss'><li> For Him </li></Link>
            <Link to='/HerPage' className='linkss'><li> For Her </li></Link>
            <Link to='/KidsPage' className='linkss'><li> For Kids</li></Link>
            <Link to='/ExploreKit' className='linkss'><li> Explorer Kit </li></Link>
            <Link to='/GiftPerfume' className='linkss'><li> Gifting </li></Link>
            </ul>
          </div>
          <div className='col-lg-3 col-xs-6 footer_list coll2'>
            <p>Support :</p>
            <ul>
              <Link to='/faq_page' className='linkss'><li> FAQ </li></Link>
              <Link to='/Shipping' className='linkss'> <li> Shipping & Returns </li></Link>
              <Link to='/Privacy' className='linkss'> <li>  Privacy Policy </li></Link>
              <Link to='/Terms_conditions' className='linkss'>  <li>Terms & Conditions </li> </Link>
              <Link to='/ReturnRefund' className='linkss'> <li> Return & Refund </li></Link>
              <Link to='/Contact' className='linkss'> <li> Contact Us </li></Link>
            </ul>
          </div>
          <div className='col-lg-2 col-xs-6 footer_list'>
            <p>Quick Link :</p>
            <ul>
              <Link to='/AboutUs' className='linkss'><li> About Us </li></Link>
              <Link to='/Blogs' className='linkss'><li> Blogs </li></Link>
              <li> How It Works </li>
              <Link to='/Quizes' className='linkss'><li> Personality Quiz </li></Link>
              <Link to='/Bulk' className='linkss'><li> Bulk Ordering </li></Link>
            </ul>
          </div>
          <div className='col-lg-2 col-xs-6 footer_list'>
            <p>Reach Us :</p>
            <ul>
              <li><i className="fa-solid fa-phone-volume"/>&nbsp;  <i className="fa-regular fa-envelope"/></li>
              
              <li> Social Media <br /><i className="fa-brands fa-facebook"/> &nbsp;<i className="fa-brands fa-instagram" /></li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className="col-lg-6 col-6 text-center">
            <p>Copyright © 2024. All rights reserved. </p>
          </div>
          <div className="col-lg-6 col-6 text-center">
            <img src={paytm} alt="" width={40} />&nbsp;&nbsp;
            <img src={razor} alt="" width={40} />&nbsp;&nbsp;
            <img src={upi} alt="" width={40} />&nbsp;&nbsp;
            <img src={phone} alt="" width={40} />&nbsp;&nbsp;
            <img src={gpay} alt="" width={40} />
          </div>
        </div>
      </div>
    </>


  )
}

export default Footer
