import React from "react";
import "./CSS/signup.css";

function signin() {

    return (<div className="signup">
        <div className="signup-container">
            <h1>Sign In</h1>

            <div className="signup-fields">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
            </div>

            <div className="signup-agree">
                <input type="checkbox" />
            </div>

            <p className="signup-login">Already have an account <span>Sign in</span></p>

            <button>Continue</button>

        </div>
    </div>)
}


export default signin;