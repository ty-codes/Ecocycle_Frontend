import { bin, PlasticBottles, globe } from "../assets";

export default function Impact() {
  return (
    <section className="impact">
      <p className="b-600 primary">Our key impact</p>
      <h1>Why choose Ecocycle</h1>
      <p className="subtitle">
        Every plastic bottle you recycle, every piece of waste you repurpose,
        contributes to a more sustainable tomorrow.
      </p>

      <div className="impact-block">
        <div className="text-block">
          <h3>Empower Change</h3>

          <img src={globe} alt="globe" />
        </div>
        <p>
          Together, we can raise awareness, promote responsible consumption, and
          inspire a culture of environmental consciousness.
        </p>
      </div>
      <div className="impact-block start">
        <div className="text-block">
          <h3>Transform Waste into Possibilities</h3>

          <img src={PlasticBottles} alt="PlasticBottles" />
        </div>
        <p>
          Join us in upcycling plastic waste into valuable products, reducing
          our environmental footprint while creating economic opportunities.
        </p>
      </div>
      <div className="impact-block" style={{ justifyContent: "end" }}>
        <div className="text-block">
          <h3>Be a Catalyst for Change</h3>

          <img src={bin} alt="recycling bin" />
        </div>
        <p>
          Your actions matter. By being part of EcoCycle Nigeria, you're not
          just recycling – you're pioneering a movement.
        </p>
      </div>
    </section>
  );
}
