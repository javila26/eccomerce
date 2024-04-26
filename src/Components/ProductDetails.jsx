import cart_icon from "../assets/Images/icon-cart-white.svg";
import ImagesCaroussel from "./ImagesCaroussel";
export default function ProductDetails() {
  return (
    <main className="container">
      <ImagesCaroussel />
      <section className="box item_details">
        <p id="title">Sneaker Company</p>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div id="price-details">
          <h2>$125.00</h2>
          <p id="discount">50%</p>
        </div>
        <h4 id="original-price">$250.00</h4>
        <div id="buttons">
          <div className="button_wrapper">
            <button>-</button>
            <p>10</p>
            <button>+</button>
          </div>
          <button id="add">
            <img src={cart_icon} />
            Add To Cart
          </button>
        </div>
      </section>
    </main>
  );
}
