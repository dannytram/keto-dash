import React from "react";

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
            <div className="login__container"></div>
            <label>Username</label>
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
                        <button onClick ={loginHandler}>Sign In</button>
                        <p> Don't Have an Acccount? <span>Sign Up</span></p>
                    </>
                ) : (
                    <>
                        <button onClick ={signupHandler}>Sign Up</button>
                        <p>Have an Account? <span>Sign In</span></p>
                    </>
                )}
            </div>
        </section>
    );
};

export default LoginPage;
