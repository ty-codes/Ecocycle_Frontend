import { man } from "../assets";
import { Logo } from "../components";
import { CFacebookIcon, CGoogleIcon } from "../assets/svg";

export default function Login() {
  return (
    <div className="login-page">
      <img className="login-image" src={man} alt="recycle" />
      <div className="login-block">
        <div className="login-wrapper">
          <Logo />
          <h2>Let's get you started!</h2>
          <form>
            <div className="input-wrap">
              <label className="b-600" htmlFor="email">
                Email
              </label>
              <input
                className="grey"
                id="email"
                type="email"
                name="email"
                placeholder="Email address"
                required
              />
            </div>
            <div className="input-wrap">
              <label className="b-600" htmlFor="password">
                Password
              </label>
              <input
                className="grey"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <p className="small-text grey ">
              By signing up you agree to{" "}
              <span className="primary"> Ecocycle terms of service </span>
              and acknowledge the{" "}
              <span className="primary"> privacy policy </span>
            </p>
            <button type="submit">Sign in</button>
            <div className="or-divider b-600">OR</div>
            <div className="button-group">
              <div className="social-login">
                <CGoogleIcon />
                <p className="b-600">Continue with Google</p>
              </div>
              <div className="social-login">
                <CFacebookIcon />
                <p className="b-600">Continue with Facebook</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
