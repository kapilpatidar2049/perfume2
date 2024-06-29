import React, { useState } from "react";
import "../Css/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook1.png";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });

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

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
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
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleClick = async (event) => {
    event.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      try {
        const response = await axios.post("http://192.168.0.107:2000/api/signup/", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status >= 200 && response.status < 300) {
          const data = response.data;
          console.log("Response:", data);
          if (data) {
            localStorage.setItem("recentlySignedUpEmail", formData.email);
            localStorage.setItem("recentlySignedUpPassword", formData.password);
            localStorage.setItem("token", data.token);
            localStorage.setItem("name", formData.f_name);
            setShowSuccessMessage(true);
            setTimeout(() => {
              navigate("/login");
            }, 1000);
          }
        } else {
          console.error("Error:", response.statusText);
          navigate("/error-page");
        }
        console.log(response)
      } catch (error) {
        if (error.response && error.response.status === 400 && error.response.data.error === "Email already exists") {
          setFormErrors({ ...formErrors, email: "Email is already registered" });
        } else {
          console.log("Error:", error);
        }
      }
    }
  };
  return (
    <>
      <div className="container mt-0">

        <div className="main-contain ">
          <form
            id="myForm"
            action="post"
            className="form6"
            onSubmit={handleClick}
          >
            <h4 className="text-center m-5 checkheading">CREATE YOUR ACCOUNT</h4>
            <p>
              Welcome! We’re delighted to see you here. Please fill in your
              details below and continue exploring our house of scent design.
            </p>
            <div className="mt-3">
              <button className="google-btn">
                <img src={google} alt="google" className="google" />
                Continue With GOOGLE
              </button>
            </div>
            <div>
              <button className="facebook-btn">
                <img src={facebook}  alt="facebook" className="facebook" />
                Continue With FACEBOOK
              </button>
            </div>
            <div className="form-group mt-5 ">
              <h6>Gender</h6>
              <div class="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineRadio1">
                  <input
                    className="radio-btn "
                    type="radio"
                    name="gender"
                    id="inlineRadio"
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
                    className="radio-btn "
                    type="radio"
                    name="gender"
                    id="inlineRadio2"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleInputChange}
                  />{" "}
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label" for="inlineRadio3 ">
                  <input
                    class="radio-btn "
                    type="radio"
                    name="gender"
                    id="inlineRadio3"
                    value="other"
                    checked={formData.gender === "other"}
                    onChange={handleInputChange}
                  />
                  Other
                </label>
              </div>
            </div>
            {formErrors.gender && (
              <div style={{ color: "red" }}>{formErrors.gender}</div>
            )}
            <div className="form-group ">
              <label for="">First Name</label>
              <input
                type="name"
                className="form-control f-c"
                name="f_name"
                value={formData.f_name}
                onChange={handleInputChange}
              />
            </div>
            {formErrors.f_name && (
              <div style={{ color: "red" }}>{formErrors.f_name}</div>
            )}
            <div className="form-group ">
              <label for="">last Name</label>
              <input
                type="l_name"
                className="form-control f-c"
                id="l_name"
                aria-describedby="emailHelp"

                name="l_name"
                value={formData.l_name}
                onChange={handleInputChange}
              />
            </div>
            {formErrors.l_name && (
              <div style={{ color: "red" }}>{formErrors.l_name}</div>
            )}
            <div className="form-group3 ">
              <label>Email address</label>
              <input
                type="email"
                className="form-control f-c"
                id="InputEmail1"
                aria-describedby="emailHelp7"

                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            {formErrors.email && (
              <div style={{ color: "red" }}>{formErrors.email}</div>
            )}
            <div className="form-group-pass mt-2">
              <label for="exampleInputPassword1">Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control f-c"
                  id="exampleInputPassword1"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="toggle-password-btn"
                  onClick={passwordVisibility}
                >
                  <i
                    className={showPassword ? "far fa-eye-slash" : "far fa-eye"}
                  ></i>
                </button>
              </div>
            </div>
            {formErrors.password && (
              <div style={{ color: "red" }}>{formErrors.password}</div>
            )}
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control f-c"

                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
            {formErrors.confirmPassword && (
              <div style={{ color: "red" }}>{formErrors.confirmPassword}</div>
            )}
            <button
              type="submit"
              className="form-submit-btn mt-4"
              onClick={handleClick}
            >
              Sign up
            </button>
            <p className="mt-4">
              Already have an Account? <Link to="/login"> Sign in here </Link>
            </p>
            {showSuccessMessage && (
              <div className="success-message">
                Signup successful! Please Login ...
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
