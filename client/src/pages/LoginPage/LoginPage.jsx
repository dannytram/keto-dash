import React from "react";
import { Link } from "react-router-dom"
import "./LoginPage.scss";
import Logo from "../../assets/images/Logo.png"

const LoginPage = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        loginHandler,
        signupHandler,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;

    return (
        <section className="login">
            <div className="login__container">
                <div className="login__logo-container">
                    <Link to="/">
                        <img className="login__logo" src={Logo} alt="Keto Dash" href="/" />
                    </Link>
                </div>
                <label>Email</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="login__errorMsg">{emailError}</p>
                <label> Password </label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="login__errorMsg">{passwordError}</p>
                <div className="login__btn">
                    {hasAccount ? (
                        <>
                            <button onClick={loginHandler}>Sign In</button>
                            <p>
                                Don't Have an Acccount?
                                <span onClick={() => setHasAccount(!hasAccount)}> Sign Up</span>
                            </p>
                        </>
                    ) : (
                        <>
                            <button onClick={signupHandler}>Sign Up</button>
                            <p>
                                Have an Account?
                                <span onClick={() => setHasAccount(!hasAccount)}> Sign In</span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
