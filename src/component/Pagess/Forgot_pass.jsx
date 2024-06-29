import React, { useState } from "react";
import "../Css/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Forgot_pass = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

 
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email) {
            setError("Email is required");
            return;
          } 
        try {
          const response = await axios.post("http://192.168.0.107:2000/forgot-password", { email });
    
          if (response.status !== 200) {
            throw new Error("Failed to send reset link");
          }else {
            // Extract token from response or generate it
            const token = 'your_generated_token'; // Example token, replace with actual value
            setSuccessMessage("Reset link sent successfully! Check your email.");
          }
          
        } catch (error) {
          setError(error.message);
        }
      };
  
  return (
    <>   
      <div className="container main-contain8 ">
        <form
          id="myForm2"
          action="post"
          className="form8"
          onSubmit={handleSubmit}
        >
          <h4 className="text-center mt-5"> Forgot your password</h4>
          <p className="text-center mt-3    ">Please provide your registered email address and we will get back to you shortly.</p>
          <div className="form-group1 mt-5 ">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <div style={{ color: "red" }}>{error}</div>}
          </div>
          <button type="submit" className="form-submit-btn8 mt-4">
            Send Link
          </button>
          {successMessage && <p>{successMessage}</p>}
          <h6 className="mt-4 text-center">
            Don't have an Account Yet? <Link to="/signup"> Sign up</Link>
          </h6>
        </form>
      </div>
     
    </>
  );
}

export default Forgot_pass;
