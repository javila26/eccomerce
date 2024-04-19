import { useState } from "react";
import image_avatar from "../assets/Images/image-avatar.png";
import cart_icon from "../assets/Images/icon-cart.svg";
import close_icon from "../assets/Images/close.svg";
import menu_icon from "../assets/Images/menu.svg";
import NavItems from "./NavItems";
export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  function handleClick() {
    setIsToggled((prevToggleState) => !prevToggleState);
  }

  return (
    <nav className="navbar">
      <div>
        <section id="header">
          <img src={menu_icon} alt="Hamburger menu" onClick={handleClick} />
          <h1>sneakers</h1>
        </section>
        <section className={isToggled ? "nav-links active" : "nav-links"}>
          <span>
            <ul>
              {isToggled && (
                <li id="close_icon">
                  <img
                    src={close_icon}
                    alt="Close icon"
                    onClick={handleClick}
                  />
                </li>
              )}
              <NavItems page="Collections" />
              <NavItems page="Men" />
              <NavItems page="Women" />
              <NavItems page="About" />
              <NavItems page="Contact" />
            </ul>
          </span>
        </section>
      </div>
      <section className="cart-avatar">
        <span>
          <img id="cart" src={cart_icon} alt="cart icon" />
        </span>
        <img id="picture" src={image_avatar} alt="profile picture" />
      </section>
    </nav>
  );
}
