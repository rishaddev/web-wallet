import "./LoginStyle.css";

import Logo from "./Logo";

function Login() {
  return (
    <>
      <div className="topBar">
        <Logo />
      </div>

      <div className="loginContainer">
        <div className="loginCard">
          <div className="loginTxt">
            <span style={{ color: "#fff" }}>Log</span>
            <span style={{ color: "#4188f1" }}>in.</span>
          </div>

          <form action="" className="loginForm">
            <p className="loginp1">Enter Username</p>
            <input type="text" className="loginInput" />

            <p className="loginp1">Enter Password</p>
            <input type="password" className="loginInput" />

            <button type="submit" className="btn3">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
