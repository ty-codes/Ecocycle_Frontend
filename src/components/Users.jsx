import { depositor, collector, craftsmen } from "../assets";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const navigate = useNavigate();
  return (
    <section className="users">
      <p className="b-600 primary">Our users</p>
      <h1>Be a part of Ecocycle</h1>

      <div className="user-flex flex">
        <img src={depositor} alt="depositor" />

        <div className="text-block">
          <h3>Depositors</h3>
          <p>
            Effortlessly contribute to a sustainable environment by connecting 
            with our waste collection network. Safely deposit recyclable materials 
            in designated bins for hassle-free pickup and proper disposal.
          </p>
          <button onClick={() => navigate("/login")}>Deposit your product!</button>
        </div>
      </div>
      <div className="user-flex flex">
        <div className="text-block">
          <h3>Eco-craftsmen</h3>
          <p>
            Every piece of plastic has a story to tell, a potential waiting 
            to be unlocked. We also believe in giving plastic a new purpose, crafting each 
            creation with dedication and a touch of ingenuity.
          </p>
          <button onClick={() => navigate("/login")}>Showcase your product!</button>
        </div>
        <img src={craftsmen} alt="craftsmen" />
      </div>
      <div className="user-flex flex">
        <img src={collector} alt="collector" />
        <div className="text-block">
          <h3>Collectors</h3>
          <p>
            Be a part of Ecocycle's Network and play a pivotal role in transforming waste into valuable resources. 
            Join hands with us to reduce plastic waste and contribute towards sustainable environmental goals.
          </p>
          <button onClick={() => navigate("/login")}>Get started</button>
        </div>
      </div>
    </section>
  );
}
