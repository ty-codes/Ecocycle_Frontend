import { NavBar, Footer } from "../components";
import { GPSIcon, SearchIcon } from "../assets/svg";
import { centres } from "../constants";
import { useState } from "react";
import styled from "styled-components";

export default function Centres() {
  const [query, setQuery] = useState("");
  const [tabQuery, setTabQuery] = useState("");

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
        <p className={tabQuery === "near" ? "tab active" : "tab"} onClick={() => setTabQuery("near")}>Near</p>
        <p className={tabQuery === "popular" ? "tab active" : "tab"} onClick={() => setTabQuery("popular")}>Popular</p>
        <p className={tabQuery === "largest" ? "tab active" : "tab"} onClick={() => setTabQuery("largest")}>
          Largest
        </p>
        <p className={tabQuery === "new" ? "tab active" : "tab"} onClick={() => setTabQuery("new")}>New</p>
        <p className={tabQuery === "rated" ? "tab active" : "tab"} onClick={() => setTabQuery("rated")}>Most Rated</p>
        <p className={tabQuery === "smallest" ? "tab active" : "tab"} onClick={() => setTabQuery("smallest")}>Smallest</p>
        <p className={tabQuery === "closest" ? "tab active" : "tab"} onClick={() => setTabQuery("closest")}>
        Closest
        </p>
      </div>
      <section className="products">
        {centres
          .filter((el) => el.name.toLowerCase().includes(query.toLowerCase()))
          .map((site, key) => (
            <div className="product" key={`prod-${key}`}>
              <div className="relative">
                <img className="cursor-pointer" src={site.image} alt={`${site.name}`} />
              </div>
              <div className="flex site-flex"
              >
                <img className="user-avatar" src={site.user_avatar} alt={`owner_${site.name}`} />
                <div className="details">
                <h6 className="b-600 capitalize">{site.name}</h6>
                <div className="flex">
                  <div className="tiny-text flex">
                  <Ratings rate={site.rating}>
                      <input
                        className="rating"
                        max="5"
                        step="0.5"
                        type="range"
                        value={site.rating}
                      />
                    </Ratings>
                    <p className="tiny-text grey capitalize">
                      {site.reviews} reviews
                    </p>
                  </div>
                </div>
                <div className="flex">
                    <GPSIcon />
                    <p className="small-text">{site.location}</p>
                </div>
              </div>
              </div>
              
            </div>
          ))}
      </section>
      <Footer />
    </div>
  );
}

const Ratings = styled.div`
  .rating {
    --dir: right;
    --fill: gold;
    --fillbg: rgba(100, 100, 100, 0.15);
    --heart: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.328l-1.453-1.313q-2.484-2.25-3.609-3.328t-2.508-2.672-1.898-2.883-0.516-2.648q0-2.297 1.57-3.891t3.914-1.594q2.719 0 4.5 2.109 1.781-2.109 4.5-2.109 2.344 0 3.914 1.594t1.57 3.891q0 1.828-1.219 3.797t-2.648 3.422-4.664 4.359z"/></svg>');
    --star: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"/></svg>');
    --stars: 5;
    --starsize: 1.3vw;
    --symbol: var(--star);
    --value: ${(props) => props.rate};
    --w: calc(var(--stars) * var(--starsize));
    --x: calc(100% * (var(--value) / var(--stars)));
    block-size: var(--starsize);
    inline-size: var(--w);
    position: relative;
    touch-action: manipulation;
    -webkit-appearance: none;
    background-color: transparent;
    margin-bottom: 1%;
    // filter: drop-shadow(2px 4px 6px black);

    @media (max-width: 992px) {
        --starsize: 1.2em;
    }
  }

  .rating:disabled {
    filter: opacity(0.6);
  }

  [dir="rtl"] .rating {
    --dir: left;
  }
  .rating::-moz-range-track {
    background: linear-gradient(
      to var(--dir),
      var(--fill) 0 var(--x),
      var(--fillbg) 0 var(--x)
    );
    block-size: 100%;
    mask: repeat left center/var(--starsize) var(--symbol);
  }
  .rating::-webkit-slider-runnable-track {
    background: linear-gradient(
      to var(--dir),
      var(--fill) 0 var(--x),
      var(--fillbg) 0 var(--x)
    );
    block-size: 100%;
    mask: repeat left center/var(--starsize) var(--symbol);
    -webkit-mask: repeat left center/var(--starsize) var(--symbol);
  }
  .rating::-moz-range-thumb {
    height: var(--starsize);
    opacity: 0;
    width: var(--starsize);
  }
  .rating::-webkit-slider-thumb {
    height: var(--starsize);
    opacity: 0;
    width: var(--starsize);
    -webkit-appearance: none;
  }
  .rating,
  .rating-label {
    display: block;
    font-family: "Montserrat", ui-sans-serif, system-ui, sans-serif;
  }
  .rating-label {
    /* margin-block-end: 1rem; */
  }

  .rating--nojs::-moz-range-track {
    background: var(--fillbg);
  }
  .rating--nojs::-moz-range-progress {
    background: var(--fill);
    block-size: 100%;
    mask: repeat left center/var(--starsize) var(--star);
  }
  .rating--nojs::-webkit-slider-runnable-track {
    background: var(--fillbg);
  }
  .rating--nojs::-webkit-slider-thumb {
    background-color: var(--fill);
    box-shadow: calc(0rem - var(--w)) 0 0 var(--w) var(--fill);
    opacity: 1;
    width: 1px;
  }
  [dir="rtl"] .rating--nojs::-webkit-slider-thumb {
    box-shadow: var(--w) 0 0 var(--w) var(--fill);
  }

  input {
    padding: 0;
    border-radius: none;
    border: none;
  }
`;
