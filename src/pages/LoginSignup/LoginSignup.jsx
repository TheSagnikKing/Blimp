import React, { useRef, useState } from "react";
import style from "./LoginSignup.module.css";
import { PhoneInput } from "react-international-phone";
import { PhoneNumberUtil } from "google-libphonenumber";
import { toastStyle } from "../../utils/toastStyles";
import toast from "react-hot-toast";
import api from "../../api/api";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LoginSignup = () => {

  const navigate = useNavigate()
  const {
    user,
    setUser,
    setIsAuthenticated
  } = useAuth()


  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [signinLoader, setSigninLoader] = useState("")

  // signin error states
  const [signinEmailError, setSigninEmailError] = useState("");
  const [signinPasswordError, setSigninPasswordError] = useState("");

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [signupPhoneNumber, setSignupPhoneNumber] = useState("");

  // signup error states
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [signupEmailError, setSignupEmailError] = useState("");
  const [signupPasswordError, setSignupPasswordError] = useState("");
  const [signupConfirmPasswordError, setSignupConfirmPasswordError] =
    useState("");
  const [signupPhoneNumberError, setSignupPhoneNumberError] = useState("");
  const [invalidnumber, setInvalidNumber] = useState(false);

  const [signupLoader, setSignupLoader] = useState(false);
  const [countryflag, setCountryFlag] = useState("gb");
  const [countryCode, setCountryCode] = useState("");

  const phoneRef = useRef();
  const phoneUtil = PhoneNumberUtil.getInstance();

  const isPhoneValid = (phone) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
  };

  const handlePhoneChange = (phone, meta) => {
    setSignupPhoneNumberError("");
    const { country } = meta;

    const isValid = isPhoneValid(phone);

    if (isValid) {
      setSignupPhoneNumber(phone);
      setCountryCode(country?.dialCode);
      setCountryFlag(country?.iso2);
      setInvalidNumber(false);
    } else {
      setInvalidNumber(true);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // At least 8 chars, 1 uppercase, 1 lowercase, 1 number
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  const signupHandler = async () => {
    let hasError = false;

    // Reset errors before checking
    setFirstnameError("");
    setLastnameError("");
    setSignupEmailError("");
    setSignupPasswordError("");
    setSignupConfirmPasswordError("");
    setSignupPhoneNumberError("");

    if (!firstname.trim()) {
      setFirstnameError("First name is required");
      hasError = true;
    }

    if (!lastname.trim()) {
      setLastnameError("Last name is required");
      hasError = true;
    }

    if (!signupEmail.trim()) {
      setSignupEmailError("Email is required");
      hasError = true;
    } else if (!validateEmail(signupEmail)) {
      setSignupEmailError("Invalid email format");
      hasError = true;
    }

    if (!signupPhoneNumber.trim()) {
      setSignupPhoneNumberError("Phone number is required");
      hasError = true;
    } else if (invalidnumber) {
      setSignupPhoneNumberError("Invalid phone number");
      hasError = true;
    }

    if (!signupPassword.trim()) {
      setSignupPasswordError("Password is required");
      hasError = true;
    } else if (!validatePassword(signupPassword)) {
      setSignupPasswordError(
        "Password must be at least 8 characters long and contain uppercase, lowercase, and a number"
      );
      hasError = true;
    }

    if (!signupConfirmPassword.trim()) {
      setSignupConfirmPasswordError("Confirm your password");
      hasError = true;
    } else if (signupPassword !== signupConfirmPassword) {
      setSignupConfirmPasswordError("Passwords do not match");
      hasError = true;
    }

    if (hasError) return;

    // If all validations pass
    const signupData = {
      fullname: `${firstname} ${lastname}`,
      email: signupEmail,
      password: signupPassword,
      phone_number: Number(signupPhoneNumber.replace("+", "").slice(countryCode.length)),
      country_code: Number(countryCode),
    };

    try {
      setSignupLoader(true)
      const { data } = await api.post("/signup", signupData);

      if (data.code === 200) {
        toast.success("Your account has been created successfully!", {
          duration: 3000,
          style: toastStyle,
        });
      } else {
        toast.error(data.message, { duration: 3000, style: toastStyle });
      }

    } catch (error) {
      toast.error("Signup failed", { duration: 3000, style: toastStyle });
    } finally {
      setSignupLoader(false)
    }
  };


  const signinHandler = async () => {
    let hasError = false

    setSigninEmailError("");
    setSigninPasswordError("");

    if (!signinEmail.trim()) {
      setSigninEmailError("Email is required");
      hasError = true;
    } else if (!validateEmail(signinEmail)) {
      setSigninEmailError("Invalid email format");
      hasError = true;
    }

    if (!signinPassword.trim()) {
      setSigninPasswordError("Password is required");
      hasError = true;
    } else if (!validatePassword(signinPassword)) {
      setSigninPasswordError(
        "Password must be at least 8 characters long and contain uppercase, lowercase, and a number"
      );
      hasError = true;
    }

    if (hasError) return

    const signindata = {
      emailOrPhoneNumber: signinEmail,
      password: signinPassword
    }

    try {
      setSigninLoader(true)
      const { data } = await api.post("/login", signindata);

      if (data.code === 200) {
        toast.success("You’ve signed in successfully!", {
          duration: 3000,
          style: toastStyle,
        });

        localStorage.setItem("usersignindata", JSON.stringify(data?.data))
        setUser(data?.data)
        localStorage.setItem("usersignin", "true")
        setIsAuthenticated(true)
        navigate("/account")
      } else {
        toast.error(data.message, { duration: 3000, style: toastStyle });
      }

    } catch (error) {
      toast.error("Signup failed", { duration: 3000, style: toastStyle });
    } finally {
      setSigninLoader(false)
    }

  }

  return (
    <main className={style.authContainer}>
      <div>
        <div>
          <h2>Log In</h2>

          <div>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              value={signinEmail}
              onChange={(e) => setSigninEmail(e.target.value)}
            />

            {signinEmailError && (
              <p className="input-error-message">{signinEmailError}</p>
            )}
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={signinPassword}
              onChange={(e) => setSigninPassword(e.target.value)}
            />

            {signinPasswordError && (
              <p className="input-error-message">{signinPasswordError}</p>
            )}
          </div>

          <button onClick={signinHandler} disabled={signinLoader}>
            {signinLoader ? <ClipLoader
              color="#fff"
              size={"3rem"}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> : "Login"}
          </button>

        </div>

        <div>
          <h2>Sign Up</h2>

          <div>
            <div>
              <label>First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              {firstnameError && (
                <p className="input-error-message">{firstnameError}</p>
              )}
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              {lastnameError && (
                <p className="input-error-message">{lastnameError}</p>
              )}
            </div>
          </div>

          <div>
            <label>Email ID</label>
            <input
              type="text"
              placeholder="Enter your email ID"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            {signupEmailError && (
              <p className="input-error-message">{signupEmailError}</p>
            )}
          </div>

          <div>
            <label>Phone number</label>
            <PhoneInput
              aria-labelledby="mobileLabel"
              forceDialCode={true}
              defaultCountry={countryflag}
              value={signupPhoneNumber}
              ref={phoneRef}
              onChange={(phone, meta) => handlePhoneChange(phone, meta)}
            />
            {signupPhoneNumberError && (
              <p className="input-error-message">{signupPhoneNumberError}</p>
            )}
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
            {signupPasswordError && (
              <p className="input-error-message">{signupPasswordError}</p>
            )}
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={signupConfirmPassword}
              onChange={(e) => setSignupConfirmPassword(e.target.value)}
            />
            {signupConfirmPasswordError && (
              <p className="input-error-message">{signupConfirmPasswordError}</p>
            )}
          </div>

          <button onClick={signupHandler} disabled={signupLoader}>
            {signupLoader ? <ClipLoader
              color="#fff"
              size={"3rem"}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> : "Create My Account"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default LoginSignup;
