import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Popover,
} from "react-aria-components";
import { IconCart } from "./Icons";

type MenuProps = {
  quantity: number;
};

const CustomDialog: React.FunctionComponent<MenuProps> = ({ quantity }) => {
  return (
    <DialogTrigger>
      <Button className="relative">
        <IconCart></IconCart>
        {quantity > 0 && (
          <span className="absolute right-0 top-0 -translate-y-4 translate-x-4 rounded-full bg-primary-1 px-2 py-1 text-xs text-neutral-4">
            {quantity}
          </span>
        )}
      </Button>
      <Popover className="relative">
        <Dialog className="absolute w-80 -translate-x-64 translate-y-12 rounded-lg bg-neutral-5 text-neutral-2">
          <Heading
            slot="title"
            className="border-b border-solid border-neutral-3 px-4 py-2 font-bold text-neutral-1"
          >
            Cart
          </Heading>
          <div className="flex flex-row items-center justify-center">
            {quantity > 0 ? (
              <span>TODO</span>
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
