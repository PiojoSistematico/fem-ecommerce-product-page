import { useState } from "react";
import logo from "./assets/images/logo.svg";
import cart from "./assets/images/icon-cart.svg";
import avatar from "./assets/images/image-avatar.png";
import shoes from "./assets/images/image-product-1.jpg";

import iconPlus from "./assets/images/icon-plus.svg";
import iconMinus from "./assets/images/icon-minus.svg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <picture>
          <img src={logo} alt="" />
          <ul>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div>
            <a href="#">
              <img src={cart} alt="" />
            </a>
            <a href="#">
              <img src={avatar} alt="" />
            </a>
          </div>
        </picture>
        <main>
          <section title="slider">
            <picture>
              <img src={shoes} alt="" />
            </picture>
            <ul>
              <li>
                <button>
                  <img src={shoes} alt="" />
                </button>
              </li>
              <li>
                <button>
                  <img src={shoes} alt="" />
                </button>
              </li>
              <li>
                <button>
                  <img src={shoes} alt="" />
                </button>
              </li>
              <li>
                <button>
                  <img src={shoes} alt="" />
                </button>
              </li>
            </ul>
          </section>
          <section title="details">
            <h2>Sneaker Company</h2>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div>
              <div>
                <span>$125.00</span>
                <span>50%</span>
              </div>
              <span> $250.00</span>
            </div>
            <div>
              <div>
                <button>
                  <img src={iconMinus} alt="" />
                </button>

                <span>0</span>
                <button>
                  <img src={iconPlus} alt="" />
                </button>
              </div>
              <button>
                <img src={cart} alt="" /> <span>Add to cart</span>
              </button>
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default App;
