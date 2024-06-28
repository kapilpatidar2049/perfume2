import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import '../Css/Checkout.css';
import image from '../../assets/faqImg.webp';
import axios from "axios";

const HelpContact = () => {
  const navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    full_name: "",
    order_name: "",
    phone_no: "",
    comment: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.full_name.trim()) {
      errors.full_name = "Full Name is required";
    }
    if (!formData.order_name.trim()) {
      errors.order_name = "Order Number is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      errors.email = "Please include an @ in the email address";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phone_no.trim()) {
      errors.phone_no = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phone_no)) {
      errors.phone_no = "Phone number must be 10 digits.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleClick = async (event) => {
    event.preventDefault();
  
    const isValid = validateForm();
    if (isValid) {
      try {
        const response = await axios.post("http://192.168.0.101:2000/api/contact-page", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (response.status >= 200 && response.status < 300) {
          const data = response.data;
          console.log("Response:", data);
          if (data) {
            // Clear form data
            setFormData({
              email: "",
              full_name: "",
              order_name: "",
              phone_no: "",
              comment: "",
            });
  
            // Show success message and redirect after delay
            localStorage.setItem("token", data.token);
            localStorage.setItem("email", formData.email);
            localStorage.setItem("full_name", formData.full_name);
            localStorage.setItem("order_name", formData.order_name);
            localStorage.setItem("phone_no", formData.phone_no);
            localStorage.setItem("comment", formData.comment);
            setShowSuccessMessage(true);
            setTimeout(() => {
              navigate("/");
            }, 1000);
          }
        } else {
          console.error("Error:", response.statusText);
          navigate("/error-page");
        }
      }  catch (error) {
        console.error("Error:", error);
        if (error.response) {
          console.error("Server Response:", error.response.data);
        }
        console.log("Server Error:", error.message);
      }
    }
  };





  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setShowSuccessMessage(true);
      // Submit form or do something
      console.log("Form submitted:", formData);
    } else {
      setShowSuccessMessage(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className='shippingImg img-fluid faqImg container'>
          <div className='shippingHeading'><h1>CONTACT US <br /></h1></div>
        </div>
        <div className='shippingSmall mx-3'>
          <img src={image} className='img-fluid shippingImgSmall' alt="FAQ" />
          <h1 className='shippingSmallHead text-center mt-3 p-3'>FREQUENTLY ASKED <br />QUESTIONS</h1>
        </div>
        <div className="contact row">
          <div className="col-lg-8 mt-5">
            <h1>Contact Us </h1>
            <p className="mt-5">
              We are always looking forward to hearing back from you. To contact a
              customer service representative, you can fill out the form below. <br /><br />
              Our customer service agent will get back to you in 24-48 business hours. 
              We're available 9:30 AM - 6:30 PM, Monday to Saturday. <br /><br />
              You can also reach us at care@themancompany.com or call us at +91 96670 31212. <br /><br />
              For queries regarding corporate gifting, please contact corporategifting@themancompany.com.
            </p>

            <div className='col-11 mt-5'>
              <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="lg-11 mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    id="email"
                    placeholder="Email"
                    required
                  />
                  {formErrors.email && (
                    <div style={{ color: "red", fontWeight:"400", fontFamily: "Jost"}}>{formErrors.email}</div>
                  )}
                </div>
                {/* Full name */}
                <div className="lg-11 mb-3">
                  <label htmlFor="full_name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                  />
                  {formErrors.full_name && (
                    <div style={{ color: "red"  ,fontWeight:"400", fontFamily: "Jost"}}>{formErrors.full_name}</div>
                  )}
                </div>
                {/* Order no */}
                <div className="lg-11 mb-3">
                  <label htmlFor="order_name" className="form-label">Order Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="order_name"
                    name="order_name"
                    value={formData.order_name}
                    onChange={handleInputChange}
                    placeholder="Order Number"
                    required
                  />
                  {formErrors.order_name && (
                    <div style={{ color: "red", fontWeight:"400", fontFamily: "Jost" }}>{formErrors.order_name}</div>
                  )}
                </div>
                {/* Phone Number */}
                <div className="lg-11 mb-3">
                  <label htmlFor="phone_no" className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone_no"
                    name="phone_no"
                    value={formData.phone_no}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                  />
                  {formErrors.phone_no && (
                    <div style={{ color: "red" ,fontWeight:"400", fontFamily: "Jost" }}>{formErrors.phone_no}</div>
                  )}
                </div>
                {/* comment */}
                <div className="lg-11 mb-3">
                  <label htmlFor="comment" className="form-label">Leave Our Team a comment</label>
                  <textarea
                    className="form-control"
                    id="comment"
                    rows="3"
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    placeholder="Add a comment for our team preparing your order if you have any special request..."
                  ></textarea>
                </div>
                <div className='subscribeInput text-right'>
                  <button className='Submit_btn' type="submit"  onClick={handleClick}>Submit</button>
                </div>
              </form>
              {showSuccessMessage && (
                <div className="mt-5">
                  <h3>Submitted Data</h3>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Full Name:</strong> {formData.full_name}</p>
                  <p><strong>Order Number:</strong> {formData.order_name}</p>
                  <p><strong>Phone Number:</strong> {formData.phone_no}</p>
                  <p><strong>comment:</strong> {formData.comment}</p>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-4 mt-5 contact1">
            <h1>Address</h1>
            <p className="mt-5">
              Helios Lifestyle Private Limited <br /><br />
              Spazedge Tower, Tower-B, <br /><br />
              Office No. 522-526, Sector 47, <br /><br />
              Gurugram - 122002, Haryana, India
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpContact;
