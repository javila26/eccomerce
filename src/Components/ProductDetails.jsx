import cart_icon from "../assets/Images/icon-cart-white.svg";
import ImagesCaroussel from "./ImagesCaroussel";
import { useState } from "react";
import { formatter } from "../util/numberFormat";
export default function ProductDetails({ products, onAddItemToCart }) {
  const [itemQuantity, setItemQuantity] = useState(0);

  function handleItemQuantity(amount) {
    setItemQuantity((prevQuantity) => {
      if (prevQuantity === 0 && amount === -1) {
        return 0;
      } else {
        return (prevQuantity = prevQuantity + amount);
      }
    });
  }

  return (
    <main className="container">
      <ImagesCaroussel productImages={products[0].images} />
      <section className="box item_details">
        <p id="title">{products[0].brand}</p>
        <h1>{products[0].title}</h1>
        <p>{products[0].description}</p>
        <div id="price-details">
          <h2>{formatter.format(products[0].price * products[0].discount)}</h2>
          <p id="discount">{products[0].discount * 100}%</p>
        </div>
        <h4 id="original-price">{formatter.format(products[0].price)}</h4>
        <div id="buttons">
          <div className="button_wrapper">
            <button onClick={() => handleItemQuantity(-1)}>-</button>
            <p>{itemQuantity}</p>
            <button onClick={() => handleItemQuantity(1)}>+</button>
          </div>
          <button
            id="add"
            onClick={() => onAddItemToCart(products[0].id, itemQuantity)}
            disabled={itemQuantity === 0}
          >
            <img src={cart_icon} />
            Add To Cart
          </button>
        </div>
      </section>
    </main>
  );
}
