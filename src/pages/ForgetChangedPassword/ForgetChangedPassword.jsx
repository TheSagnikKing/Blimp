import React from "react";
import style from "./ForgetChangedPassword.module.css";
import { useState } from "react";

const ForgetChangedPassword = () => {

  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")

  return (
    <main className={style.authContainer}>
      <div>
        <div>
          <h2>Change Password</h2>

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

          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Enter your confirm password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {passwordError && (
              <p className="input-error-message">{passwordError}</p>
            )}
          </div>

          <button>Confirm</button>

        </div>
      </div>
    </main>
  );
};

export default ForgetChangedPassword;
