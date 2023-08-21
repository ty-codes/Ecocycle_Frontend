import { BottleCollection, EcoHouse, PlasticVase } from "../assets";

export default function Offers() {
    return (
        <section>
            <p className="primary b-600 ">Our services</p>
            <h1>What we offer</h1>
            <div className="blocks">
                <div className="block">
                    <img src={BottleCollection} alt="retailers" />
                    <h4 className="primary capitalize">Collection centers</h4>
                    <p>
                        Depositors can access collection centers at nearby locations where they can drop off their plastic 
                        wastes, and collectors and NGO collaborators can pick them up for sustainable usage
                    </p>
                    <a className="orange-text" href="/">Learn more</a>
                </div>
                <div className="block">
                    <img src={PlasticVase} alt="retailers" />
                    <h4 className="primary capitalize">Eco-marketplace</h4>
                    <p>
                        We connect Eco craftsmen who mak esustainable household products
                        from plastic waste to an e-commerce marketplace where they can showcase their 
                        products and turn waste to money.
                    </p>
                    <a className="orange-text" href="/">Learn more</a>
                </div>
                <div className="block">
                    <img src={EcoHouse} alt="retailers" />
                    <h4 className="primary capitalize">Sustainable development</h4>
                    <p>
                        We partner with developmental NGOs and recycling companies to provide afordable housing 
                        and other sustainable resources to local and rural areas to ensure decent housing needs and 
                        living improvements.
                    </p>
                    <a className="orange-text" href="/">Learn more</a>
                </div>
            </div>
        </section>
    )
}


