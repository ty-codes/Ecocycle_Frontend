import { Offers, About, Footer , Hero, NavBar, Users, Partners,Impact} from "../components";

export default function Landing() {
    return (
        <div className="page">
            <NavBar />
            <Hero />
            <About />
            <Offers />
            <Users />
            <Impact />
            <Partners />
            <Footer />
        </div>
    )
}