import React from "react";
import "./CSS/signup.css";

function signup() {

    return (<div className="signup">
        <div className="signup-container">
            <h1>Sign Up</h1>

            <div className="signup-fields">
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
            </div>

            <div className="signup-agree">
                <input type="checkbox" />
                <p>By contiuning,I agree to the terms of use & privacy policy.</p>
            </div>

            <p className="signup-login">Already have an account <span>Sign Up</span></p>

            <button>Continue</button>

        </div>
    </div>)
}


export default signup;