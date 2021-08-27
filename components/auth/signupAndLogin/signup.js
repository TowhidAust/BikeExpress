import { useState } from "react";
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

export default function SignUp() {
    const [rightPanelActiveClass, setRightPanelActiveClass] = useState('');
    const signUpButtonClickHandler = (e) => {
        setRightPanelActiveClass('right-panel-active');
    }
    const signInButtonClickHandler = (e) => {
        setRightPanelActiveClass('');
    }
  
    return (
        <div className="signup-login-container">
            <div className={`container ${rightPanelActiveClass}`} id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><AiOutlineGoogle color="#542d2d"/></a>
                            <a href="#" className="social"><FaFacebookF color="#542d2d"/></a>
                            {/* <a href="#" className="social"><FcGoogle/></a> */}
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="/">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><AiOutlineGoogle color="#542d2d"/></a>
                            <a href="#" className="social"><FaFacebookF color="#542d2d"/></a>
                            {/* <a href="#" className="social"><FcGoogle/></a> */}
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={(e)=>{signInButtonClickHandler(e)}}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={(e)=>{signUpButtonClickHandler(e)}}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
