import Logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-close.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import { useState } from "react";
import { Button } from "react-aria-components";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="font-KumbhSans text-neutral-2 flex flex-row items-center justify-between p-8 text-base font-normal">
      <div className="flex flex-row items-center gap-4">
        <Button
          className="btn-menu mobile"
          aria-controls="primary-navigation"
          aria-expanded="false"
          onPress={handleClick}
        >
          {isMenuOpen ? (
            <img
              className="icon-close"
              src={iconClose}
              alt="Close Menu"
              aria-hidden="false"
            />
          ) : (
            <img
              className="icon-hamburger"
              src={iconMenu}
              alt="Open Menu"
              aria-hidden="false"
            />
          )}
        </Button>
        <a href="#" className="header-logo">
          <img src={Logo} alt="Logo" />
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
              <img src={cart} alt="" />
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
