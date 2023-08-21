import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon
} from "../assets/svg";
import { Logo, LoadingComponent } from ".";
import { useState } from "react";
import { CheckOutlined } from "@ant-design/icons";

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function simulateSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      setSubmitted(true);
    }, 2000);
  }
  return (
    <footer>
      <div className="links">
        <div className="logo-and-socials">
          <Logo />
          <div className="socials">
            <span className="social">
              <LinkedinIcon />
            </span>
            <span className="social">
              {" "}
              <FacebookIcon />
            </span>
            <span className="social">
              {" "}
              <TwitterIcon />
            </span>
            <span className="social">
              <InstagramIcon />
            </span>
          </div>
        </div>
        <ul>
          <li>Company</li>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">See my rates</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Terms of Service</a>
          </li>
        </ul>
        <ul>
          <li>FAQs</li>
          <li>
            <a href="/">Help</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
        </ul>
        <div className="subscribe">
          <h4>Stay Updated</h4>
          <p>
            Subscribe to our newsletter to receive plastic recycling updates and
            information
          </p>
          <form class="subscription-form" onSubmit={(e) => simulateSubmit(e)}>
            <input
              class="searchbox"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button disabled={loading} type="submit">
              {loading ? (
                <LoadingComponent />
              ) : submitted ? (
                <CheckOutlined />
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        </div>
      </div>
      <hr />

      <div className="copyrights">
        <p>All rights reserved</p>
        <a href="/">© Copyright {new Date().getFullYear()}</a>
        <a href="/">EcoCycle</a>
      </div>
    </footer>
  );
}
