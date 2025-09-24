import React from "react";
import style from "./LoginSignup.module.css";

const LoginSignup = () => {
  return (
    <main className={style.authContainer}>
      <div>
        <div>
          <h2>Log In</h2>

          <div>
            <label>Username / Email</label>
            <input type="text" />
          </div>

          <div>
            <label>Password</label>
            <input type="text" />
          </div>

          <button>Login</button>
        </div>

        <div>
          <h2>Sign Up</h2>

          <div>
            <div>
              <label>First Name</label>
              <input type="text" />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>

          <div>
            <label>Email ID</label>
            <input type="text" />
          </div>

          <div>
            <label>Password</label>
            <input type="text" />
          </div>

          <div>
            <label>Confirm Password</label>
            <input type="text" />
          </div>

          <button>Create My Account</button>
        </div>
      </div>
    </main>
  );
};

export default LoginSignup;
