import { NavBar, Footer } from "../components";
import { ProfileIcon, SearchIcon, BookmarkIcon } from "../assets/svg";
import { products } from "../constants";
import { useState } from "react";

// `Elevate your home organization with our one-of-a-kind Laundry Basket crafted entirely from repurposed plastic bottle caps. Designed to seamlessly blend style and sustainability, this unique basket not only provides ample storage space but also serves as a powerful reminder of the potential that lies within plastic waste.

// const productDescription = ``Each basket is meticulously handcrafted, showcasing the beauty of upcycled materials while offering a functional and eco-conscious storage solution. Every bottle cap that adorns the basket tells a story of transformation - from waste to wonder.`;

export default function Marketplace() {
  const [query, setQuery] = useState("");
  const [tabQuery, setTabQuery] = useState("");
  // console.log(products.filter(el => el.name))

  return (
    <div className="page">
      <NavBar />
      <div className="searchbar flex">
        <input
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
        <SearchIcon />
      </div>
      <div className="tabs">
        <p className={tabQuery === "" ? "tab active" : "tab"} onClick={() => setTabQuery("")}>All</p>
        <p className={tabQuery === "kitchen" ? "tab active" : "tab"} onClick={() => setTabQuery("kitchen")}>Kitchen</p>
        <p className={tabQuery === "decorations" ? "tab active" : "tab"} onClick={() => setTabQuery("decorations")}>Decorations</p>
        <p className={tabQuery === "bedroom" ? "tab active" : "tab"} onClick={() => setTabQuery("bedroom")}>
          Bedroom items
        </p>
        <div className={tabQuery === "garden" ? "tab active" : "tab"} onClick={() => setTabQuery("garden")}>Garden</div>
      </div>
      <section className="products">
        {products
          .filter((el) => el.name.toLowerCase().includes(query.toLowerCase()) && (tabQuery ? el.type === tabQuery : true))
          .map((product, key) => (
            <div className="product" key={`prod-${key}`}>
              <div>
                <img src={product.image} alt={`${product.name}`} />
                <BookmarkIcon />
              </div>
              <div className="details">
                <p className=" small-text b-600 capitalize">{product.name}</p>
                <p className="small-text grey">{product.description}</p>
                <div className="flex">
                  <p className="tiny-text flex grey capitalize">
                    <ProfileIcon />
                    <p className="tiny-text grey capitalize">
                      {product.username}
                    </p>
                  </p>
                  <p className="tiny-text b-600 grey">{product.sold} sold</p>
                </div>
                <div className="flex">
                  <p className="orange-text">NGN {product.price}</p>
                  <button className="small-text b-600 outlined-btn">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          ))}
      </section>
      <Footer />
    </div>
  );
}
