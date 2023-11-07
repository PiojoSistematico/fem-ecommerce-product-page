import { useState } from "react";
import shoes from "./assets/images/image-product-1.jpg";

import Menu from "./components/Menu";

import cart from "./assets/images/icon-cart.svg";
import iconPlus from "./assets/images/icon-plus.svg";
import iconMinus from "./assets/images/icon-minus.svg";
import iconNext from "./assets/images/icon-next.svg";
import iconPrevious from "./assets/images/icon-previous.svg";
import { Button } from "react-aria-components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu></Menu>
      <main className="font-KumbhSans text-neutral-2 flex flex-col items-center justify-between text-base font-normal">
        <section title="slider">
          <picture className="max-h-[40%]">
            <img src={shoes} alt="" className="w-full object-contain" />
          </picture>
          <div>
            <Button>
              <img src={iconPrevious} alt="" />
            </Button>
            <Button>
              <img src={iconNext} alt="" />
            </Button>
          </div>
          <ul className="hidden">
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
        <section title="details" className="flex flex-col gap-4 p-8">
          <h2 className="text-primary-1 font-bold uppercase">
            Sneaker Company
          </h2>
          <h1 className="text-neutral-1 text-2xl font-bold capitalize">
            Fall Limited Edition Sneakers
          </h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-4">
              <span className="text-neutral-1 text-2xl font-bold capitalize">
                $125.00
              </span>
              <span className="bg-primary-2 text-primary-1 rounded-md px-2 py-1 font-bold">
                50%
              </span>
            </div>
            <span className="text-neutral-3 font-bold line-through">
              {" "}
              $250.00
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-neutral-4  flex flex-row items-center justify-between rounded-lg p-4">
              <button>
                <img src={iconMinus} alt="" />
              </button>

              <span className="text-neutral-1 font-bold">0</span>
              <button>
                <img src={iconPlus} alt="" />
              </button>
            </div>
            <Button className="bg-primary-1  shadow-primary-2 flex flex-row items-center justify-center gap-4 rounded-lg p-4 shadow-xl">
              <img src={cart} alt="" />
              <span className="text-neutral-4 font-bold">Add to cart</span>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
