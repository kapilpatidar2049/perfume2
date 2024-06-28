import React, { useState } from "react";
import "../Css/Signup.css";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook1.png";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const [tab, setRegistorTab] = useState(1);
  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    gender: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const registorTab = (id) => {
    setRegistorTab(id);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "gender") {
      setFormData({ ...formData, gender: value });
      setFormErrors({ ...formErrors, gender: "" });
    } else {
      setFormData({ ...formData, [name]: value });
      if (name === "f_name") {
        setFormErrors({ ...formErrors, f_name: "" });
      }
      if (name === "l_name") {
        setFormErrors({ ...formErrors, l_name: "" });
      }
      if (name === "email") {
        setFormErrors({ ...formErrors, email: "" });
      }
      if (name === "password") {
        setFormErrors({ ...formErrors, password: "" });
      }
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.gender) {
      errors.gender = "Gender is required";
    }
    if (!formData.f_name.trim()) {
      errors.f_name = "First name is required";
    }
    if (!formData.l_name.trim()) {
      errors.l_name = "Last name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      errors.email = "Please include an @ in the email address";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleClick = () => {
    localStorage.setItem("firstName", formData.f_name);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
     
    }    
  };

  try {
    const response = await fetch("http://192.168.0.105:2000/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Response:", data);
      navigate("/");
    } else {
      const errorData = await response.json();
      console.error("Error:", errorData);
      // Handle error response here, if needed
    }
  } catch (error) {
    console.error("Error:", error);
  }
  // login form
  
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [loginFormErrors, setLoginFormErrors] = useState({
    email: "",
    password: ""
  });

  const loginHandleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };
  const validateEmail = (email) => {
    // Regular expression for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };


  const loginValidateForm = () => {
    const errors = {};
    if (!loginFormData.email.trim()) {
      errors.email = "Email is required";
    } else if (!loginFormData.email.includes("@")) {
      errors.email = "Please include an @ in the email address";
    } else if (!/^\S+@\S+\.\S+$/.test(loginFormData.email)) {
      errors.email = "Invalid email format";
    }
    if (!loginFormData.password.trim()) {
      errors.password = "Password is required";
    }
    
    setLoginFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const loginHandleSubmit1 = (e) => {
    e.preventDefault();
    
    // Reset errors
    setLoginFormErrors({
      email: "",
      password: ""
    });
    // Validate email
    if (!validateEmail(loginFormData.email)) {
      setLoginFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email"
      }));
      return;
    }

    // Validate password
    if (loginFormData.password.length < 6) {
      setLoginFormErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters"
      }));
      return;
    }

    // If both email and password are valid, proceed with login
    // Your login logic goes here
  }; 
  const loginHandleSubmit = async (event) => {
    event.preventDefault();
    
    // Reset errors
    setLoginFormErrors({
      email: "",
      password: ""
    });
  
    const isValid = loginValidateForm();
    if (isValid) {
      try {
        console.log("Login Form Data:", loginFormData); 
        const response = await fetch("http://192.168.0.105:2000/login/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginFormData),
        });
  
        if (response.ok) {
          // Redirect to lo
          const data = await response.json();
          console.log('log in successfully', data);
          // Save the authentication token to localStorage
          localStorage.setItem("token", data.token);
          // Redirect to the dashboard page after successful login page upon successful sign-in
          navigate("/loginDashboard");
        } else {
          const errorData = await response.json();
          console.error("Error:", errorData);
          
          // Check if email is invalid
          if (errorData.error === "Invalid email") {
            setLoginFormErrors((prevErrors) => ({
              ...prevErrors,
              email: "Invalid email"
            }));
          } else if (errorData.error === "Invalid password") {
            // Check if password is invalid
            setLoginFormErrors((prevErrors) => ({
              ...prevErrors,
              password: "Invalid password"
            }));
          } else if (errorData.error === "Invalid email or password") {
            // Both email and password are invalid
            setLoginFormErrors({
              email: "Invalid email",
              password: "Invalid password"
            });
          }
        }
      } catch (error) {
        console.error("Error:", error);
        console.log(error, 'err email password')
      }
    }
  };
  return (
    <>
      <div className={tab == 1 ? "main" : "main2"}>
        <div className="main1">
          <button className="signin" onClick={() => registorTab(1)}>
            Sign up
          </button>
          <button className="registor" onClick={() => registorTab(2)}>
         Login
          </button>
        </div>
        <div className={tab == 1 ? "show-content" : "content"}>
          <form id="myForm" action="post" className="form6" onSubmit={handleSubmit}>
            <h4>CREATE YOUR ACCOUNT</h4>
            <p>
              Welcome! We’re delighted to see you here. Please fill in your
              details below and continue exploring our house of scent design.
            </p>
            <div>
              <button className="google-btn">
                <img src={google} className="google" />
                Continue With GOOGLE
              </button>
            </div>
            <div>
              <button className="facebook-btn">
                <img src={facebook} className="facebook" />
                Continue With FACEBOOK
              </button>
            </div>
            <div className="form-group mt-5 ">
              <h6>Gender</h6>
              <div class="form-check form-check-inline">
                <label class="form-check-label" for="inlineRadio1">
                  <input
                    className="radio-btn form-check-input"
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleInputChange}
                  />
                  Female
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label" for="inlineRadio2">
                  <input
                    className="radio-btn form-check-input"
                    type="radio"
                    name="gender"
                    id="inlineRadio2"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleInputChange}
                  />
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label" for="inlineRadio2">
                  <input
                    class="radio-btn form-check-input"
                    type="radio"
                    name="gender"
                    id="inlineRadio3"
                    value="Gender Neutral"
                    checked={formData.gender === "other"}
                    onChange={handleInputChange}
                  />
                  Gender Neutral
                </label>
              </div>
              {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>*/}
            </div>
            {formErrors.gender && (
              <div style={{ color: "red" }}>{formErrors.gender}</div>
            )}
            <div className="form-group ">
              <label for="">First Name</label>
              <input
                type="name"
                className="form-control"
                placeholder="Enter your name"
                name="f_name"
                value={formData.f_name}
                onChange={handleInputChange}
              />
              {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>*/}
            </div>
            {formErrors.f_name && (
              <div style={{ color: "red" }}>{formErrors.f_name}</div>
            )}
            <div className="form-group ">
              <label for="">last Name</label>
              <input
                type="l_name"
                className="form-control"
                id="l_name"
                aria-describedby="emailHelp"
                placeholder="Enter your name"
                name="l_name"
                value={formData.l_name}
                onChange={handleInputChange}
              />
              {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>*/}
            </div>
            {formErrors.l_name && (
              <div style={{ color: "red" }}>{formErrors.l_name}</div>
            )}
            <div className="form-group3 ">
              <label>Email address</label>
              <input
                type="email"
                className="form-control1"
                id="InputEmail1"
                aria-describedby="emailHelp7"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>*/}
            </div>
            {formErrors.email && (
              <div style={{ color: "red" }}>{formErrors.email}</div>
            )}
            <div className="form-group ">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            {formErrors.password && (
              <div style={{ color: "red" }}>{formErrors.password}</div>
            )}
            <button
              type="submit"
              className="form-submit-btn mt-4"
              onClick={handleClick}
            >
              Sign up
            </button>
          </form>
      </div>
    {/*Register/sigin/login */}
        <div className={tab == 2 ? "show-content" : "content"}>
          <form id="myForm2" action="post" className="form5" onSubmit={loginHandleSubmit}>
            <div>
              <button className="google-btn">
                <img src={google} className="google" />
                Continue With GOOGLE
              </button>
            </div>
            <div>
              <button className="facebook-btn">
                <img src={facebook} className="facebook" />
                Continue With FACEBOOK
              </button>
            </div>
            <div className="form-group1 mt-5 ">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
              value={loginFormData.email}
              onChange={loginHandleInputChange}
              />
              {loginFormErrors.email && (
                <div style={{ color: "red" }}>{loginFormErrors.email}</div>
              )}
              {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>*/}
            </div>
            <div className="form-group1 ">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
              value={loginFormData.password}
              onChange={loginHandleInputChange}
              />
              {loginFormErrors.password && (
                <div style={{ color: "red" }}>{loginFormErrors.password}</div>
              )}
            </div>
            <button type="submit" className="form-submit-btn mt-4">
            Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup