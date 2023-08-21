import { home, plant, recycle } from "../assets";

export default function Partners() {
  return (
    <section className="partners">
      <p className="primary b-600 ">Our partners</p>
      <h1>Sustainability collaborators</h1>
      <div className="blocks">
        <div className="block">
          <img src={plant} alt="plant" />
          <h4 className="primary capitalize">Environmental NGOs</h4>
          <p>
            We partner with Environmental NGO’s to create awareness campaign
            that educates the public about the environmental impact of plastic
            waste and the benefits of recycling and upcycling.
          </p>
        </div>
        <div className="block">
          <img src={home} alt="home" />
          <h4 className="primary capitalize">Housing NGOs</h4>
          <p>
            We partner with Housing NGO’s to provide affordable and sustainable
            housing for rural and less developed areas using recycled plastic
            waste.
          </p>
        </div>
        <div className="block">
          <img src={recycle} alt="recycle" />
          <h4 className="primary capitalize">Recycling Companies</h4>
          <p>
            We partner with recycling companies who are committed to
            environmental change and development. These companies work with
            environmental NGO’s to reduce plastic wastes and with the Housing
            NGO’s to construct houses for the less privileged.
          </p>
        </div>
      </div>
      <button className="partner-button">Partner with Us!</button>
    </section>
  );
}
