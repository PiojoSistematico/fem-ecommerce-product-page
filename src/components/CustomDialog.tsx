import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Popover,
} from "react-aria-components";
import { IconCart, IconClose, IconDelete } from "./Icons";

import productIcon from "../assets/images/image-product-1-thumbnail.jpg";

type MenuProps = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

const CustomDialog: React.FunctionComponent<MenuProps> = ({
  quantity,
  setQuantity,
}) => {
  return (
    <DialogTrigger>
      <Button className="relative">
        <IconCart></IconCart>
        {quantity > 0 && (
          <span className="absolute right-0 top-0 -translate-y-4 translate-x-4 rounded-full bg-primary-1 px-2 py-2 text-xs text-neutral-4">
            {quantity}
          </span>
        )}
      </Button>
      <Popover className="relative">
        <Dialog className="absolute w-96 -translate-x-80 translate-y-12 rounded-lg bg-neutral-5 text-neutral-2 md:-translate-x-56 md:translate-y-6 md:shadow-2xl">
          <Heading
            slot="title"
            className="border-b border-solid border-neutral-3 px-4 py-2 font-bold text-neutral-1"
          >
            Cart
          </Heading>
          <div className="flex flex-row items-center justify-center">
            {quantity > 0 ? (
              <div className="flex w-full flex-col gap-4 p-4">
                <div className="flex w-full flex-row items-center justify-between gap-2">
                  <picture className="h-12 w-12 overflow-hidden rounded-md">
                    <img
                      src={productIcon}
                      alt=""
                      className="w-full object-contain"
                    />
                  </picture>
                  <div className="flex flex-col gap-2">
                    <p>Fall Limited Edition Sneakers</p>
                    <p>
                      $125.00 x {quantity}{" "}
                      <span className="font-bold text-neutral-1">
                        ${`${quantity * 125}.00`}
                      </span>{" "}
                    </p>
                  </div>
                  <Button className="" onPress={() => setQuantity(0)}>
                    <IconClose></IconClose>
                  </Button>
                </div>
                <Button className="w-full rounded-lg bg-primary-1 p-4 font-bold text-neutral-4">
                  Checkout
                </Button>
              </div>
            ) : (
              <p className="px-8 py-8">Your cart is empty</p>
            )}
          </div>
        </Dialog>
      </Popover>
    </DialogTrigger>
  );
};

export default CustomDialog;
