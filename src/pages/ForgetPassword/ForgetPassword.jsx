import React, { useState } from "react";
import style from "./ForgetPassword.module.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  

  return (
    <main className={style.authContainer}>
      <div>

        <div>
          <h2>Forget Password</h2>

          <div>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {emailError && <p className="input-error-message">{emailError}</p>}
          </div>

          <button>Send</button>
        </div>

      </div>
    </main>
  );
};

export default ForgetPassword;
