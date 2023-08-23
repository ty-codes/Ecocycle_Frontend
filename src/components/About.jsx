import { useNavigate } from "react-router-dom";
import { AboutCollage } from ".";

export default function About() {
  const navigate = useNavigate();
  return (
    <section className="about">
      <div className="section-flex flex">
        <AboutCollage />

        <div className="text-block">
          <p className="b-600 primary">About us</p>
          <h1>Who we are</h1>
          <p>
            Ecocycle Nigeria is a comprehensive solution designed to tackle the
            plastic waste problem in Nigeria by focusing on upcycling,
            education, and raising awareness about responsible plastic
            consumption. This product aims to reduce the environmental impact of
            plastic waster while also generating economic opportunities and
            fostering a culture of sustainability.
          </p>
          <button onClick={() => navigate("/register")}>Learn more</button>
        </div>
      </div>
    </section>
  );
}
