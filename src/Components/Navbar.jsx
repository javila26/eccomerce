import image_avatar from "../assets/Images/image-avatar.png";
import cart_icon from "../assets/Images/icon-cart.svg";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <section>
          <h1>sneakers</h1>
        </section>
        <a href="#" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <section class="nav-links">
          <span>
            <ul>
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
          </span>
        </section>
      </div>
      <section className="cart-avatar">
        <span>
          <img src={cart_icon} alt="cart icon" />
        </span>
        <img src={image_avatar} alt="profile picture" />
      </section>
    </nav>
  );
}
