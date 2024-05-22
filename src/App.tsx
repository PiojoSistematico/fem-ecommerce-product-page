import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import imgProdTh1 from "./assets/images/image-product-1-thumbnail.jpg";
import imgProdTh2 from "./assets/images/image-product-2-thumbnail.jpg";
import imgProdTh3 from "./assets/images/image-product-3-thumbnail.jpg";
import imgProdTh4 from "./assets/images/image-product-4-thumbnail.jpg";

const imagesTh = [imgProdTh1, imgProdTh2, imgProdTh3, imgProdTh4];

import Menu from "./components/Menu";

import { Button } from "react-aria-components";
import {
  IconCart,
  IconMinus,
  IconNext,
  IconPlus,
  IconPrevious,
} from "./components/Icons";
import CustomLightBox from "./components/CustomLightBox";

function App() {
  const [index, setIndex] = useState(1);

  const [quantity, setQuantity] = useState(0);

  const [storedQuantity, setStoredQuantity] = useLocalStorage("quantity", 0);

  function handleNext(): void {
    index == 4 ? setIndex(1) : setIndex((value) => value + 1);
  }

  function handlePrev(): void {
    index == 1 ? setIndex(4) : setIndex((value) => value - 1);
  }

  function handlePick(id: number): void {
    setIndex(id);
  }

  function handleIncrement(): void {
    setQuantity((value) => value + 1);
  }
  function handleDecrement(): void {
    if (quantity > 0) setQuantity((value) => value - 1);
  }

  function handleUpdateCart() {
    setStoredQuantity(quantity);
  }

  console.log(index);

  return (
    <>
      <div className="md:flex md:h-screen md:flex-col md:items-center">
        <Menu quantity={storedQuantity} setQuantity={setStoredQuantity}></Menu>
        <main className="flex flex-col items-center justify-between font-KumbhSans text-base font-normal text-neutral-2 md:grid md:h-full md:w-10/12 md:grid-cols-2 md:gap-8 lg:w-8/12">
          <section
            title="slider"
            className="relative flex max-w-[450px] flex-col items-center gap-4"
          >
            <CustomLightBox
              index={index}
              handleNext={handleNext}
              handlePrev={handlePrev}
              handlePick={handlePick}
            ></CustomLightBox>
            <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 flex-row items-center justify-between px-4 md:hidden">
              <Button
                onPress={handlePrev}
                className="flex h-12 w-12 flex-row items-center justify-center rounded-full bg-neutral-5 hover:text-primary-1 focus-visible:text-primary-1"
              >
                <IconPrevious></IconPrevious>
              </Button>
              <Button
                onPress={handleNext}
                className="flex h-12 w-12 flex-row items-center justify-center rounded-full bg-neutral-5 hover:text-primary-1 focus-visible:text-primary-1"
              >
                <IconNext></IconNext>
              </Button>
            </div>
            <ul className="hidden max-w-[450px] md:flex md:flex-row md:items-center md:gap-4">
              <li>
                <Button
                  onPress={() => handlePick(1)}
                  className={`relative overflow-hidden rounded-lg hover:opacity-70 focus-visible:opacity-70 ${index == 1 ? "border-2 border-solid border-primary-1" : ""}`}
                >
                  {index == 1 && (
                    <div className="absolute h-full w-full  bg-primary-2 opacity-60"></div>
                  )}
                  <img
                    className="w-full object-contain"
                    src={imagesTh[0]}
                    alt=""
                  />
                </Button>
              </li>
              <li>
                <Button
                  onPress={() => handlePick(2)}
                  className={`relative overflow-hidden rounded-lg hover:opacity-70 focus-visible:opacity-70 ${index == 2 ? "border-2 border-solid border-primary-1" : ""}`}
                >
                  {index == 2 && (
                    <div className="absolute h-full w-full  bg-primary-2 opacity-60"></div>
                  )}
                  <img
                    className="w-full object-contain"
                    src={imagesTh[1]}
                    alt=""
                  />
                </Button>
              </li>
              <li>
                <Button
                  onPress={() => handlePick(3)}
                  className={`relative overflow-hidden rounded-lg hover:opacity-70 focus-visible:opacity-70 ${index == 3 ? "border-2 border-solid border-primary-1" : ""}`}
                >
                  {index == 3 && (
                    <div className="absolute h-full w-full  bg-primary-2 opacity-60"></div>
                  )}
                  <img
                    className="w-full object-contain"
                    src={imagesTh[2]}
                    alt=""
                  />
                </Button>
              </li>
              <li>
                <Button
                  onPress={() => handlePick(4)}
                  className={`relative overflow-hidden rounded-lg hover:opacity-70 focus-visible:opacity-70 ${index == 4 ? "border-2 border-solid border-primary-1" : ""}`}
                >
                  {index == 4 && (
                    <div className="absolute h-full w-full  bg-primary-2 opacity-60"></div>
                  )}
                  <img
                    className="w-full object-contain"
                    src={imagesTh[3]}
                    alt=""
                  />
                </Button>
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
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
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
                <Button
                  onPress={handleDecrement}
                  className="hover:opacity-50 focus-visible:opacity-50"
                >
                  <IconMinus></IconMinus>
                </Button>

                <span className="font-bold text-neutral-1">{quantity}</span>
                <Button
                  onPress={handleIncrement}
                  className="hover:opacity-50 focus-visible:opacity-50"
                >
                  <IconPlus></IconPlus>
                </Button>
              </div>
              <Button
                onPress={handleUpdateCart}
                className="flex flex-row items-center justify-center gap-4 rounded-lg bg-primary-1 p-4 text-neutral-4 shadow-xl shadow-primary-2 hover:opacity-70 focus-visible:opacity-70"
              >
                <IconCart></IconCart>
                {quantity > 0 ? (
                  <span className="font-bold">Update cart</span>
                ) : (
                  <span className="font-bold">Add to cart</span>
                )}
              </Button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
