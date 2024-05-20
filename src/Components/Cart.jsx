import delete_icon from "../assets/Images/icon-delete.svg";
import { formatter } from "../util/numberFormat";

export default function Cart({ toggle, cartItems, onRemoveItem }) {
  let contentToRender = <h1 id="fallback-header">Your cart is empty</h1>;

  if (cartItems.length > 0) {
    contentToRender = cartItems.map((product) => (
      <div key={product.id} className="cart-content">
        <img src={product.image} />
        <div>
          <h3>{product.name}</h3>
          <span>
            {formatter.format(product.price * product.discount)} x{" "}
            {product.quantity}{" "}
          </span>
          <span id="price">
            {formatter.format(
              product.price * product.discount * product.quantity
            )}
          </span>
        </div>
        <button id="delete" onClick={() => onRemoveItem(product.id)}>
          <img src={delete_icon} alt="" />
        </button>
      </div>
    ));
  }

  return (
    <>
      <span className={cartItems.length === 0 ? "unactive" : "items-cart"}>
        {cartItems.length > 0 && cartItems[0].quantity}
      </span>
      <section id="cart" className={!toggle ? "unactive" : null}>
        <h1 id="cart-header">Cart</h1>
        {contentToRender}
        {cartItems.length > 0 ? <button>Checkout</button> : null}
      </section>
    </>
  );
}
