import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Bulk.css';
import banner_bulk_image from '../../assets/banner_bulk.png';
import axios from "axios";

const Bulk = () => {
    
  const navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formDataa, setformDataa] = useState({
        name: '',
        email: '',
        phone: '',
        item_name: '',
        no_item: '',
        info_box: ''
 });

 const [formErrors, setFormErrors] = useState({});

 const handleInputChange = (event) => {
        const { name, value } = event.target;
        setformDataa({ ...formDataa, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
    };

  const validateForm = () => {
    const errors = {};

    if (!formDataa.name.trim()) {
      errors.name = "Full Name is required";
    }
    if (!formDataa.item_name.trim()) {
        errors.item_name = "Item Name is required";
      }
    if (!formDataa.no_item.trim()) {
      errors.no_item = "Number of item is required";
    }
    if (!formDataa.phone.trim()) {
      errors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formDataa.phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }
    if (!formDataa.email.trim()) {
      errors.email = "Email is required";
    } else if (!formDataa.email.includes("@")) {
      errors.email = "Please include an @ in the email address";
    } else if (!/^\S+@\S+\.\S+$/.test(formDataa.email)) {
      errors.email = "Invalid email format";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleClick = async (event) => {
    event.preventDefault();
  
    const isValid = validateForm();
    if (isValid) {
      try {
        const response = await axios.post("http://192.168.0.101:2000/api/bulks-page", formDataa, {
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (response.status >= 200 && response.status < 300) {
          const data = response.data;
          console.log("Response:", data);
          if (data) {
         
            setformDataa({
              email: "",
              name: "",
              item_name: "",
              phone: "",
              no_item: "",
              info_box: "",
            });
  
            // Show success message and redirect after delay
            localStorage.setItem("token", data.token);
            localStorage.setItem("email", formDataa.email);
            localStorage.setItem("name", formDataa.name);
            localStorage.setItem("item_name", formDataa.item_name);
            localStorage.setItem("phone", formDataa.phone);
            localStorage.setItem("no_item", formDataa.no_item);
            localStorage.setItem("info_box", formDataa.info_box);
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
        console.log("Form submitted:", formDataa);
      } else {
        setShowSuccessMessage(false);
      }
};


    return (
        <>
            <div className="container">
                <div className="banner_bulk">
                    <img src={banner_bulk_image} alt="" />
                </div>

              {/* form  */}
              <div className="container">
                    <div className="card_second_section">
                        <h1>Bulk Order Inquiry / Corporate Gifting Form</h1>
                        <div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formDataa.name}
                                    placeholder="Enter Your Full Name"
                                    onChange={handleInputChange}
                                    required
                                />{formErrors.name && (
                                    <div style={{ color: "red" ,fontWeight:"400", fontFamily: "Jost"}}>{formErrors.name}</div>
                                  )}
                            </div>

                            <div className="form-group mt-2">
                                <label htmlFor="email">Email address </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formDataa.email}
                                    placeholder="purefume@gmail.com"
                                    onChange={handleInputChange}
                                    required
                                />
                                {formErrors.email && (
                                    <div style={{ color: "red", fontWeight:"400", fontFamily: "Jost"}}>{formErrors.email}</div>
                                  )}
                            </div>

                            <div className="form-group  mt-2">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    value={formDataa.phone}
                                    placeholder="Enter Your Phone Number"
                                    onChange={handleInputChange}
                                />
                                {formErrors.phone && (
                                    <div style={{ color: "red", fontWeight:"400", fontFamily: "Jost" }}>{formErrors.phone}</div>
                                  )}
                            </div>

                            <div className="form-group mt-2">
                                <label htmlFor="item">Item Name </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="item_name"
                                    name="item_name"
                                    value={formDataa.item_name}
                                    placeholder="Enter Item Name"
                                    onChange={handleInputChange}
                                />
                                {formErrors.item_name && (
                                    <div style={{ color: "red", fontWeight:"400", fontFamily: "Jost" }}>{formErrors.item_name}</div>
                                  )}
                            </div>

                            <div className="form-group mt-2">
                                <label htmlFor="no_item">Number Of Items </label>
                                <input
                                type="text"
                                className="form-control"
                                id="no_item"
                                name="no_item"
                                value={formDataa.no_item}
                                placeholder="Enter Number of items (Digit)"
                                onChange={handleInputChange}
                            /> {formErrors.no_item && (
                                <div style={{ color: "red", fontWeight:"400", fontFamily: "Jost" }}>{formErrors.no_item}</div>
                              )}
                                
                            </div>

                            <div className="form-group mt-2">
                                <label htmlFor="info_box"></label>
                                <textarea
                                    className="form-control"
                                    id="info_box"
                                    name="info_box"
                                    rows="3"
                                    value={formDataa.info_box}
                                    onChange={handleInputChange}
                                    placeholder="Additional Information (Optional)"
                                ></textarea>
                            </div>

                            <button type="submit" className="bulk_submit_btn btn-primary " onClick={handleClick}>
                                SUBMIT
                            </button>
                        </form>
                        {showSuccessMessage && (
                            <div className="mt-5">
                              <h3>Submitted Data</h3>
                              <p><strong>Email:</strong> {formDataa.email}</p>
                              <p><strong>Full Name:</strong> {formDataa.name}</p>
                              <p><strong>Item Name:</strong> {formDataa.item_name}</p>
                              <p><strong>Item Number:</strong> {formDataa.no_item}</p>
                              <p><strong>Phone Number:</strong> {formDataa.phone}</p>
                              <p><strong>Information:</strong> {formDataa.info_box}</p>
                            </div>
                          )}
                          </div>
                        <div className="bulk_para mt-5">
                        <p>Gifts are silent expressions of love and appreciation, and what better way to express love and appreciation than with the gift of skincare and perfume, a thoughtful gesture that shows how much you care!</p>

                        <p>Bella Vita Organic is here to help you with these gifting needs; with our online platform, you can conveniently place a bulk order and deliver it to any location you desire. This user-friendly ordering form is designed to simplify the bulk ordering process, and ensure  that you get a seamless and delightful ordering experience. </p>

                        <h3>Corporate Gifting:</h3>

                        <p>Our range of high-quality skincare and perfume is ideal for corporate gifting. Whether you wish to strengthen relationships with your clients or showcase gratitude and reward your hard-working employees, our products are a sure way to convey appreciation. Make a statement with Bella Vita Organic and create memorable moments for your business partners, clients, and employees.</p>

                        <h3>Party Gifting: </h3>

                        <p>We at Bella Vita Organic understand the importance of celebration and special occasions, whether weddings, memorable occasions, or birthdays; Our products work as party favours, return gifts, and event giveaways. You can delight your guests with our skincare and perfume items that  they can cherish and enjoy throughout! Let Bella Vita Organic be a part of your joyous moments and make them even more special. </p>

                        <p>So, step into the world of Bella Vita Organic and discover the joy of gifting with a touch of luxury and care. Trust us to make your gifting experience memorable, hassle-free, and special.</p>

                        <h3>Why is corporate gifting important for employees</h3>

                        <p>Corporate gifting is essential as it showcases appreciation, posts morale, and enhances loyalty and employee engagement. </p>

                        <h3>Who needs corporate gifting</h3>

                        <p>Corporate gifting benefits employers, organisations, and businesses that aim to strengthen relationships, recognize efforts and wish to create a positive work environment. </p>

                        <h3>What are the benefits of corporate gift items</h3>

                        <p>Corporate gifting benefits in various ways, like enhancing the brand image, fostering goodwill, and improving the relationship between clients and employees. </p>

                        <h3>Can the gift hampers be customised</h3>

                        <p>Customising gift hampers to align with specific preferences, themes, or branding is possible.</p>


                        <h3>Terms and Conditions: </h3>

                        <p><strong>Minimum Order Value:</strong> The minimum order value for Bulk orders should be Rs. 25,000. Orders less than this amount will not be considered. </p>

                        <p><strong>Pricing & Discounts:</strong> Depending on the size and value of their purchase, bulk clients will be given preferential pricing and discounts. The exact price and discount structure will be provided upon request depending on the chosen products. </p>

                        <p><strong>Order Placement:</strong> Customers must submit a formal inquiry through our website to bulk purchase. Once we receive your Bulk ordering request, our account manager will contact you and assist you in finalising the purchase. </p>

                        <p><strong>Delivery Period:</strong> Once placed, you can expect the order to reach you within seven business days. However, consider that several factors, like product availability and shipping issues, could impact the delivery schedule. Our account manager will communicate the changes and delays to you. </p>

                        <p><strong>Shipping and Handling:</strong> The size, weight of the purchase, and delivery location will be considered while deciding the shipping and handling costs. </p>

                        <p><strong>Payment Requirements: </strong> Bella Vita Organic allows bank transfers, credit cards, and other prearranged payment options for large purchases. The order confirmation will include payment information; you must make a full payment to confirm the order. </p>

                        <p><strong>Product Availability:</strong> Although we try and make sure that every item in our catalogue is available for wholesale purchases, there may be times when certain SKUs may be out of stock or discontinued; in these circumstances, the account manager will get in touch with you and either will find an appropriate substitute or will provide a refund. </p>

                        </div>
                        
                    </div>
              </div>
                
               
            </div>
        </>
    )
}

export default Bulk