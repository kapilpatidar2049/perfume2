import React, { useState, useEffect } from "react";
import "../Css/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook1.png";

const Login = () => {
  const navigate = useNavigate();

  const [loginFormData, setLoginFormData] = useState({
    email: localStorage.getItem("recentlySignedUpEmail") || "",
    password: localStorage.getItem("recentlySignedUpPassword") || "",
  });
  const [loginFormErrors, setLoginFormErrors] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const recentlySignedUpEmail = localStorage.getItem("recentlySignedUpEmail");
    const recentlySignedUpPassword = localStorage.getItem("recentlySignedUpPassword");
    if (recentlySignedUpEmail && recentlySignedUpPassword) {
      setLoginFormData({
        email: recentlySignedUpEmail,
        password: "",
      });
    }
  }, []);



  const loginHandleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   setUserName("");
  //   localStorage.removeItem("token");
  //   navigate("/login");
  //   localStorage.removeItem("f_name");
  // };
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const loginValidateForm = () => {
    const errors = {};
    // const isEmailValid = validateEmail(loginFormData.email);
    // const isPasswordValid = loginFormData.password.trim().length >= 6;

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

  const loginHandleSubmit = async (e) => {
    e.preventDefault();

    setLoginFormErrors({
      email: "",
      password: "",
    });
    //     Validate email
    if (!validateEmail(loginFormData.email)) {
      setLoginFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email",
      }));
      return;
    }
    if (!loginValidateForm()) {
      return;
    }

    try {
      const response = await fetch("http://192.168.0.107:2000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormData),
      });
      if (response.ok) {
        console.log(response);
        const data = await response.json();
        if (data) {
          console.log("try to fetch usaername" + response);
          localStorage.setItem("token", data.token);
          localStorage.setItem("name", data.result.user.f_name);  // Store the first name
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("token", "true");
          setIsLoggedIn(true);
          setUserName(data.name); // Set the user's first name
          navigate("/loginDashboard");
          console.log("log in successfully", data);
          console.log(data.result.user.f_name)
          // console.log("name", data.result.name);
        }
      } else {
        if (response.status === 401) {
          console.error("Unauthorized - Please log in again");
          // history.push("/login");
          setLoginFormErrors((prevErrors) => ({
            ...prevErrors,
            email: "Invalid Email ",
            password: "Invalid Password",
          }));
        } else {
          const errorData = await response.json();
          console.error("Error:", errorData);
          if (errorData.errors) {
            if (errorData.errors.email) {
              setLoginFormErrors((prevErrors) => ({
                ...prevErrors,
                email: errorData.errors.email,
              }));
            }
            if (errorData.errors.password) {
              setLoginFormErrors((prevErrors) => ({
                ...prevErrors,
                password: errorData.errors.password,
              }));
            }
          }
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="container mt-0">

        <div className="main-contain">
          <form
            id="myForm2"
            action="post"
            className="form5"
            onSubmit={loginHandleSubmit}
          >
            <h4 className="text-center m-5 checkheading"> SIGN IN</h4>
            <p>
              We’re delighted to see you here again at PUREFUME. Please log in
              below with your email and password, and continue exploring our house
              of scent design.
            </p>
            <div className="mt-3">
              <button className="google-btn">
                <img src={google} className="google" />
                Continue With GOOGLE
              </button>
            </div>
            <div className="mt-2">
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
                
                name="email"
                value={loginFormData.email}
                onChange={loginHandleInputChange}
              />
              {loginFormErrors.email && (
                <div style={{ color: "red" }}>{loginFormErrors.email}</div>
              )}
              {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>*/}
            </div>
            <div className="form-group-pass mt-3">
              <label for="exampleInputPassword1">Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="exampleInputPassword1"

                  name="password"
                  value={loginFormData.password}
                  onChange={loginHandleInputChange}
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
              {loginFormErrors.password && (
                <div style={{ color: "red" }}>{loginFormErrors.password}</div>
              )}

              <Link to="/Forgot_pass" className="forgot-pass">
                <div className="mt-2"> Forgot Password ?</div>
              </Link>
            </div>
            <button type="submit" className="form-submit-btn mt-4">
              Login
            </button>
            <p className="mt-4">
              Don't have an Account Yet? <Link to="/signup"> Sign up</Link>
            </p>
          </form>
        </div>{" "}
      </div>

    </>
  );
};

export default Login;
