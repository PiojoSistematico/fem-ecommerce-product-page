import avatar from "../assets/images/image-avatar.png";

import { IconCart, IconLogo } from "./Icons";
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
    <header className="flex flex-row items-center justify-between p-8 font-KumbhSans text-base font-normal text-neutral-2 md:w-10/12 lg:w-8/12">
      <nav className="flex flex-row items-center gap-12">
        <CustomModal></CustomModal>
        <a href="#" className="header-logo">
          <IconLogo></IconLogo>
        </a>

        <ul className="hidden md:flex md:flex-row md:items-center md:gap-8">
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
      </nav>

      <div className="flex flex-row items-center gap-4">
        <CustomDialog
          quantity={quantity}
          setQuantity={setQuantity}
        ></CustomDialog>

        <a href="#">
          <img
            src={avatar}
            alt=""
            className="h-10 w-10 rounded-full border-2 border-solid border-neutral-5 hover:border-primary-1"
          />
        </a>
      </div>
    </header>
  );
};

export default Menu;
