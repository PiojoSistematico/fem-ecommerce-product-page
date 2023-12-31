import { useState } from "react";
import shoes from "./assets/images/image-product-1.jpg";

import Menu from "./components/Menu";

import cart from "./assets/images/icon-cart.svg";
import iconPlus from "./assets/images/icon-plus.svg";
import iconMinus from "./assets/images/icon-minus.svg";
import iconNext from "./assets/images/icon-next.svg";
import iconPrevious from "./assets/images/icon-previous.svg";
import { Button } from "react-aria-components";
import {
  IconCart,
  IconMinus,
  IconNext,
  IconPlus,
  IconPrevious,
} from "./components/Icons";

function App() {
  const [index, setIndex] = useState(1);
  const [quantity, setQuantity] = useState(0);

  function handleNext(): void {
    index == 4 ? setIndex(1) : setIndex((value) => value + 1);
  }

  function handlePrev(): void {
    index == 1 ? setIndex(4) : setIndex((value) => value - 1);
  }

  function handleIncrement(): void {
    setQuantity((value) => value + 1);
  }
  function handleDecrement(): void {
    if (quantity > 0) setQuantity((value) => value - 1);
  }

  return (
    <>
      <Menu></Menu>
      <main className="flex flex-col items-center justify-between font-KumbhSans text-base font-normal text-neutral-2">
        <section title="slider" className="relative">
          <picture className="">
            <img
              src={`src/assets/images/image-product-${index}.jpg`}
              alt=""
              className="max-h-[50vh] w-full object-contain"
            />
          </picture>
          <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 flex-row items-center justify-between px-4 md:hidden">
            <Button
              onPress={handlePrev}
              className="flex h-12 w-12 flex-row items-center justify-center rounded-full bg-neutral-5"
            >
              <IconPrevious></IconPrevious>
            </Button>
            <Button
              onPress={handleNext}
              className="flex h-12 w-12 flex-row items-center justify-center rounded-full bg-neutral-5"
            >
              <IconNext></IconNext>
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
        <section title="details" className="flex flex-col gap-4 p-8 pb-12">
          <h2 className="font-bold uppercase text-primary-1">
            Sneaker Company
          </h2>
          <h1 className="text-2xl font-bold capitalize text-neutral-1">
            Fall Limited Edition Sneakers
          </h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-4">
              <span className="text-2xl font-bold capitalize text-neutral-1">
                $125.00
              </span>
              <span className="rounded-md bg-primary-2 px-2 py-1 font-bold text-primary-1">
                50%
              </span>
            </div>
            <span className="font-bold text-neutral-3 line-through">
              $250.00
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex  flex-row items-center justify-between rounded-lg bg-neutral-4 p-4">
              <Button onPress={handleDecrement}>
                <IconMinus></IconMinus>
              </Button>

              <span className="font-bold text-neutral-1">{quantity}</span>
              <Button onPress={handleIncrement}>
                <IconPlus></IconPlus>
              </Button>
            </div>
            <Button className="flex  flex-row items-center justify-center gap-4 rounded-lg bg-primary-1 p-4 shadow-xl shadow-primary-2">
              <IconCart></IconCart>
              <span className="font-bold text-neutral-4">Add to cart</span>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
