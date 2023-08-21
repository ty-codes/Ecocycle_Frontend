import styled from "styled-components";
import { hero } from "../assets";
import { useNavigate } from "react-router-dom";
import { device } from "../constants";

export default function Hero() {
    const navigate = useNavigate();
    return (
        <header className="hero">
            <div className="hero-flex">
                <div className="text-block">
                    <h1>Transforming Waste into a Sustainable Future</h1>
                    <p>
                        Welcome to Ecocycle Nigeria, where sustainability meets innovation. We're 
                        on a mission to transform the way Nigeria addresses plastic waste, creating 
                        a cleaner and greener future for our communitites.
                    </p>
                    <button onClick={() => navigate("/register")}>Get started</button>
                </div>

                <img className="hero-img" src={hero} alt="hero" />
            </div>
        </header>
    )
};
