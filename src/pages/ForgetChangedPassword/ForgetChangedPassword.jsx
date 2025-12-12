import React, { useState } from "react";
import style from "./ForgetChangedPassword.module.css";
import toast from "react-hot-toast";
import { toastStyle } from "../../utils/toastStyles";
import api from "../../api/api";
import { ClipLoader } from "react-spinners";
import { useLocation, useNavigate } from "react-router-dom";

const ForgetChangedPassword = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const {state} = location


  const [password, setPassword] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validatePassword = (value) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
  };

  const [changePasswordLoader, setChangePasswordLoader] = useState(false);

  const handleSubmit = async () => {
    let hasError = false;

    // Reset errors first
    setPasswordError("");
    setConfirmPasswordError("");

    // Password validations
    if (!password.trim()) {
      setPasswordError("Password is required");
      hasError = true;
    } else if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 chars long & contain uppercase, lowercase, and a number"
      );
      hasError = true;
    }

    // Confirm password validations
    if (!confirmPasswordValue.trim()) {
      setConfirmPasswordError("Confirm Password is required");
      hasError = true;
    } else if (password !== confirmPasswordValue) {
      setConfirmPasswordError("Passwords do not match");
      hasError = true;
    }

    if (hasError) return;

    try {
      setChangePasswordLoader(true);
      const { data } = await api.post(`/change-password/${state.resetToken}`, {
        password,
      });

      if (data.code === 200) {
        toast.success(data.message, {
          duration: 3000,
          style: toastStyle,
        });
        navigate("/login-signup");
      } else {
        toast.error(data.message, { duration: 3000, style: toastStyle });
      }
    } catch (error) {
      toast.error("Forget password failed", {
        duration: 3000,
        style: toastStyle,
      });
    } finally {
      setChangePasswordLoader(false);
    }
  };

  return (
    <main className={style.authContainer}>
      <div>
        <div>
          <h2>Change Password</h2>

          {/* Password */}
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <p className="input-error-message">{passwordError}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPasswordValue}
              onChange={(e) => setConfirmPasswordValue(e.target.value)}
            />
            {confirmPasswordError && (
              <p className="input-error-message">{confirmPasswordError}</p>
            )}
          </div>

          <button onClick={handleSubmit}>
            {changePasswordLoader ? (
              <ClipLoader
                color="#fff"
                size={"3rem"}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Confirm"
            )}
          </button>
        </div>
      </div>
    </main>
  );
};

export default ForgetChangedPassword;
