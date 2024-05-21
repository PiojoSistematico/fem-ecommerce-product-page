import avatar from "../assets/images/image-avatar.png";

import { IconLogo } from "./Icons";
import CustomModal from "./CustomModal";
import CustomDialog from "./CustomDialog";

type MenuProps = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

const Menu: React.FunctionComponent<MenuProps> = ({
  quantity,
  setQuantity,
}) => {
  return (
    <header className="flex flex-row items-center justify-between border-b-2 border-solid border-neutral-4 p-4 font-KumbhSans text-base font-normal text-neutral-2 md:w-11/12 md:items-stretch md:px-8 md:pb-0 md:pt-8 lg:w-9/12">
      <nav className="flex flex-row items-center gap-12 md:h-12 md:items-stretch">
        <CustomModal></CustomModal>
        <a href="#" className="border-b-2 border-solid border-neutral-5">
          <IconLogo></IconLogo>
        </a>

        <ul className="hidden md:flex md:flex-row md:items-stretch md:gap-4 lg:gap-8">
          <li className="h-full border-b-2 border-solid border-neutral-5 hover:border-primary-1">
            <a href="#">Collections</a>
          </li>
          <li className="h-full border-b-2 border-solid border-neutral-5 pb-2 hover:border-primary-1">
            <a href="#">Men</a>
          </li>
          <li className="h-full border-b-2 border-solid border-neutral-5 pb-2 hover:border-primary-1">
            <a href="#">Women</a>
          </li>
          <li className="h-full border-b-2 border-solid border-neutral-5 pb-2 hover:border-primary-1">
            <a href="#">About</a>
          </li>
          <li className="h-full border-b-2 border-solid border-neutral-5 pb-2 hover:border-primary-1">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="flex h-12 flex-row items-center gap-4 md:items-start">
        <CustomDialog
          quantity={quantity}
          setQuantity={setQuantity}
        ></CustomDialog>

        <a href="#" className="relative">
          <img
            src={avatar}
            alt=""
            className="h-8 w-8 rounded-full border-2 border-solid border-neutral-5 hover:border-primary-1"
          />
        </a>
      </div>
    </header>
  );
};

export default Menu;
