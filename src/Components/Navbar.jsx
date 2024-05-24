import { useState } from "react";
import image_avatar from "/assets/image-avatar.png";
import cart_icon from "/assets/icon-cart.svg";
import close_icon from "/assets/close.svg";
import menu_icon from "/assets/menu.svg";
import NavItems from "./NavItems";
import Cart from "./Cart";

export default function Navbar({ cartItems, onRemoveItem }) {
  const [isToggled, setIsToggled] = useState(false);

  function handleClick() {
    setIsToggled((prevToggleState) => !prevToggleState);
  }

  const [isCartToggled, setCartIsToggled] = useState(false);

  function handleCartClick() {
    setCartIsToggled((prevToggleState) => !prevToggleState);
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
          <img
            id="cart-icon"
            src={cart_icon}
            alt="cart icon"
            onClick={handleCartClick}
          />
          <Cart
            toggle={isCartToggled}
            cartItems={cartItems}
            onRemoveItem={onRemoveItem}
          />
        </span>
        <img id="picture" src={image_avatar} alt="profile picture" />
      </section>
    </nav>
  );
}
