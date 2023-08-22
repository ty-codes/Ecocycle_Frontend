import { useState } from "react";
import { CameraIcon, ProfileIcon } from "../assets/svg";

export default function Register() {
  const [active, setActive] = useState(0);

  return (
    <div className="register-page">
      <div className="column register-block">
        <h2 className="header-text">Welcome to Ecocycle!</h2>
        <p className="header-text">Set up your profile to get started</p>
        <div className="register-wrapper">
          <div className="form-wrapper">
            <div className="avatar center">
              <ProfileIcon />
              <CameraIcon className="edit" />
            </div>
            <form>
              <div className="flex">
                <div className="input-wrap">
                  <label className="b-600" htmlFor="first-name">
                    First name
                  </label>
                  <input
                    className="grey"
                    id="first-name"
                    type="text"
                    name="first-name"
                    placeholder="Jane"
                    required
                  />
                </div>
                <div className="input-wrap">
                  <label className="b-600" htmlFor="first-name">
                    Last name
                  </label>
                  <input
                    className="grey"
                    id="last-name"
                    type="text"
                    name="last-name"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div className="flex">
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
                  <label className="b-600" htmlFor="phone">
                    Phone number
                  </label>
                  <input
                    className="grey"
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="phone number"
                    required
                  />
                </div>
              </div>
              <div className="flex">
                <div className="input-wrap">
                  <label className="b-600" htmlFor="state">
                    State
                  </label>
                  <input
                    className="grey"
                    id="state"
                    type="text"
                    name="state"
                    placeholder="Lagos"
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
              </div>
              <div className="usertype-block">
                <label htmlFor="register" className="b-600">
                  Register as a
                </label>
                <div className="flex flex-wrap">
                  <p
                    onClick={() => setActive(0)}
                    className={
                      active === 0
                        ? "usertype active center b-600"
                        : "usertype center b-600"
                    }
                  >
                    Depositor
                  </p>
                  <p
                    onClick={() => setActive(1)}
                    className={
                      active === 1
                        ? "usertype active center b-600"
                        : "usertype center b-600"
                    }
                  >
                    Collector
                  </p>
                  <p
                    onClick={() => setActive(2)}
                    className={
                      active === 2
                        ? "usertype active center b-600"
                        : "usertype center b-600"
                    }
                  >
                    Collaborator
                  </p>
                  <p
                    onClick={() => setActive(3)}
                    className={
                      active === 3
                        ? "usertype active center b-600"
                        : "usertype center b-600"
                    }
                  >
                    Craftsman
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="input-wrap">
                  <label className="b-600" htmlFor="city">
                    City
                  </label>
                  <input
                    className="grey"
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Lagos"
                    required
                  />
                </div>
                <div className="input-wrap">
                  <label className="b-600" htmlFor="street">
                    Street
                  </label>
                  <input
                    className="grey"
                    id="street"
                    type="text"
                    name="street"
                    placeholder=""
                  />
                </div>
              </div>

              <button type="submit">Continue</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
