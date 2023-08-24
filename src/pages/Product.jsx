import { NavBar, Footer } from "../components";
import { ProfileIcon, BookmarkIcon } from "../assets/svg";
import { products } from "../constants";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Product() {
  const [tabQuery, setTabQuery] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  var name = searchParams.get("vendor")?.replace("%", " ");
  var id = searchParams.get("product");
  console.log(id, name);
  const activeProduct = products[id - 1];
  console.log(activeProduct);

  return (
    <div className="page">
      <NavBar />
      <div className="active-product-header element-pd">
        <img src={activeProduct.image} alt={`${activeProduct.name}`} />
        <div className="active-product-details">
          <h5 className="b-600 capitalize">{activeProduct.name}</h5>
          <p className="grey">{activeProduct.description}</p>
          <div className="flex">
            <div className="flex">
              <p className="small-text flex grey capitalize">
                <ProfileIcon />
                <p className="small-text grey capitalize">
                  {activeProduct.username}
                </p>
              </p>
            </div>
            <p className="small-text b-600 grey">{activeProduct.sold} sold</p>
          </div>
          <div className="flex">
            <h5 className="orange-text b-600">NGN {activeProduct.price}</h5>
          </div>
          <div>
            <button className="small-text b-600">Buy now</button>
            <button className="small-text b-600 cart">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="tabs w-100">
        <p
          className={tabQuery === "" ? "tab active" : "tab"}
          onClick={() => setTabQuery("")}
        >
          Description
        </p>
        <p
          className={tabQuery === "reviews" ? "tab active" : "tab"}
          onClick={() => setTabQuery("reviews")}
        >
          Reviews
        </p>
        <p
          className={tabQuery === "specifications" ? "tab active" : "tab"}
          onClick={() => setTabQuery("specifications")}
        >
          Specifications
        </p>
      </div>
      <p className="element-pd">
        Elevate your home organization with our one-of-a-kind Laundry Basket
        crafted entirely from repurposed plastic bottle caps. Designed to
        seamlessly blend style and sustainability, this unique basket not only
        provides ample storage space but also serves as a powerful reminder of
        the potential that lies within plastic waste.
        <p />
        <br />
        <p>
          Each basket is meticulously handcrafted, showcasing the beauty of
          upcycled materials while offering a functional and eco-conscious
          storage solution. Every bottle cap that adorns the basket tells a
          story of transformation - from waste to wonder.
        </p>
      </p>
      <h4 className="capitalize element-pd mt_3">Other items by {name}</h4>
      <section className="products">
        {products
          .filter((el) =>
            el.username.toLowerCase().includes(name.toLowerCase())
          )
          .slice(0, 3)
          .map((product, key) => (
            <div className="product" key={`prod-${key}`}>
              <div className="relative">
                <img
                  className="cursor-pointer"
                  onClick={() => navigate(`/product/${key + 1}`)}
                  src={product.image}
                  alt={`${product.name}`}
                />
                <BookmarkIcon className="bookmark" />
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
