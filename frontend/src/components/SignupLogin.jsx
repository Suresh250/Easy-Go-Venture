import React, { useState, useEffect } from "react";
import { FiMail, FiPhone, FiUser, FiLock, FiUserCheck } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import '../css/SignUpLogin.css'

const SignUpLogin = () => {
  const [isSignUp, setIsSignUp] = useState(true); // true for sign-up, false for login
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    firstName: "",
    lastName: "",
    gender: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmailOrPhone = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    return emailRegex.test(input) || phoneRegex.test(input);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[0-9]).{6,}$/;
    return passwordRegex.test(password);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!validateEmailOrPhone(formData.emailOrPhone)) {
      newErrors.emailOrPhone = "Invalid email or phone number";
    }
    if (isSignUp) {
      if (!formData.firstName) {
        newErrors.firstName = "First name is required";
      }
      if (!formData.lastName) {
        newErrors.lastName = "Last name is required";
      }
      if (!formData.gender) {
        newErrors.gender = "Gender is required";
      }
      if (!formData.birthday) {
        newErrors.birthday = "Birthday is required";
      }
      if (!validatePassword(formData.password)) {
        newErrors.password =
          "Password must be at least 6 characters long and contain at least one number";
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      // Additional logic to handle form submission can go here, such as an API call
    }
  };

  return (
    <>
    <div className="outer-container outer-container-md">
      <div className="container-custom">
        <div className="main-card main-card-md" data-aos="fade-up">
          <div className="left-section left-section-md">
            <h1 className="title" data-aos="fade-down">
              Welcome to EasyGo Venture
            </h1>
            <div className="paragraph paragraph-md" data-aos="fade-down">
              <p>
                EasyGo Venture is your ultimate travel companion, offering a seamless experience from start to finish. Whether you're booking flights, arranging cabs, securing hotels, or hiring a knowledgeable tour guide, we handle it all so you can focus on what truly matters—enjoying your vacation. Our mission is to make your journey stress-free and unforgettable by taking care of every detail, ensuring that your getaway is as smooth and enjoyable as possible. Let us take the hassle out of travel so you can sit back, relax, and explore the world with ease.
              </p>
            </div>
          </div>
  
          <div className="right-section right-section-md">
            <form onSubmit={handleSubmit}>
              {!isSignUp && (
                <>
                  <div className="input-container" data-aos="fade-left">
                    <input
                      type="text"
                      name="emailOrPhone"
                      placeholder="Email or Phone No"
                      className="input-field"
                      value={formData.emailOrPhone}
                      onChange={handleChange}
                      required
                    />
                    <FiMail className="ml-2" />
                    {errors.emailOrPhone && (
                      <p style={{ color: "red" }}>{errors.emailOrPhone}</p>
                    )}
                  </div>
  
                  <div className="input-container mt-5" data-aos="fade-left">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="input-field"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <FiLock className="ml-2" />
                    {errors.password && (
                      <p style={{ color: "red" }}>{errors.password}</p>
                    )}
                  </div>
  
                  <div className="mt-5" data-aos="fade-left">
                    <button className="button" type="submit">
                      Login
                    </button>
                  </div>
                </>
              )}
  
              {isSignUp && (
                <>
                  <div className="signup-input-container" data-aos="fade-right">
                    <input
                      type="text"
                      name="emailOrPhone"
                      placeholder="Email or Phone No"
                      className="input-field"
                      value={formData.emailOrPhone}
                      onChange={handleChange}
                      required
                    />
                    <FiMail className="ml-2" />
                    {errors.emailOrPhone && (
                      <p style={{ color: "red" }}>{errors.emailOrPhone}</p>
                    )}
                  </div>
  
                  <div className="signup-grid signup-grid-md">
                    <div className="signup-input-container" data-aos="fade-right">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="input-field"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                      <FiUser className="ml-2" />
                      {errors.firstName && (
                        <p style={{ color: "red" }}>{errors.firstName}</p>
                      )}
                    </div>
  
                    <div className="signup-input-container" data-aos="fade-right">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="input-field"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                      <FiUserCheck className="ml-2" />
                      {errors.lastName && (
                        <p style={{ color: "red" }}>{errors.lastName}</p>
                      )}
                    </div>
                  </div>
  
                  <div className="signup-grid mt-5" data-aos="fade-right">
                    <label className="gender-label">Gender</label>
                    <select
                      name="gender"
                      className="gender-select"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && (
                      <p style={{ color: "red" }}>{errors.gender}</p>
                    )}
                  </div>
                </>
              )}
  
              <div className="birthday-grid birthday-grid-md" data-aos="fade-right">
                <label className="birthday-label">Birthday</label>
                <div className="date-picker-container">
                  <input
                    type="date"
                    name="birthday"
                    className="input-full outline-none"
                    value={formData.birthday}
                    onChange={handleChange}
                    required
                  />
                  {errors.birthday && (
                    <p className="error-message">{errors.birthday}</p>
                  )}
                </div>
              </div>
  
              <div className="password-input-container" data-aos="fade-right">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input-full outline-none"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <FiLock className="ml-2" />
                {errors.password && (
                  <p className="error-message">{errors.password}</p>
                )}
              </div>
  
              <div className="confirm-password-container" data-aos="fade-right">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="input-full outline-none"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <FiLock className="ml-2" />
                {errors.confirmPassword && (
                  <p className="error-message">{errors.confirmPassword}</p>
                )}
              </div>
  
              <div className="create-account-btn" data-aos="fade-right">
                <button type="submit">Create Account</button>
              </div>
  
              <div className="toggle-btn">
                <button onClick={() => setIsSignUp(!isSignUp)}>
                  {isSignUp ? "Login Instead" : "Create Account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>  
  );
};

export default SignUpLogin;
