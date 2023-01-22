import style from "./signin.css"

export default function SignIn() {
  return (
    <div className="sign-in">
        <div className="top">
            <div className="wrapper">
                <img className="net-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"/>
            </div>
        </div>
        <div className="form-container">
            <form className="sign-in-form">
                <h1 className="title-sign-in">Sign In</h1>
                <div className="ft-email">
                    <span>Email or Phone Number</span>
                    <input className="email-input" type="text"/>
                </div>
                <input className="input-pass" type="password" placeholder="Password"/>
                <button className="sign-up-btn">Sign In</button>
                <div className="rem-me-bar">
                <div className="radio-but">
                    <input type="checkbox"/>
                    <span>Remember me</span>
                </div>
                    <span>Need help?</span>
                </div>
                <p className="sign-up-ft">New to Netflix? <span className="sign-link">Sign up now.</span></p>
            </form>
        </div>
    </div>
  )
}
