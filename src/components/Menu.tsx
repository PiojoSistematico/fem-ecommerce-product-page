import Logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-close.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import { useState } from "react";
import { Button } from "react-aria-components";
import { IconCart, IconClose, IconLogo, IconMenu } from "./Icons";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="flex flex-row items-center justify-between p-8 font-KumbhSans text-base font-normal text-neutral-2">
      <div className="flex flex-row items-center gap-4">
        <Button onPress={handleClick}>
          {isMenuOpen ? <IconClose></IconClose> : <IconMenu></IconMenu>}
        </Button>
        <a href="#" className="header-logo">
          <IconLogo></IconLogo>
        </a>
        <nav className={`hidden`} id="primary-navigation">
          <ul aria-label="Primary" role="list">
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
      </div>

      <nav>
        <ul className="flex flex-row items-center gap-4">
          <li>
            <a href="#">
              <IconCart></IconCart>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={avatar} alt="" className="h-8 w-8" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
