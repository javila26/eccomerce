import { useState } from "react";
import Navbar from "./Components/Navbar";
import ProductDetails from "./Components/ProductDetails";
import { PRODUCTS } from "../data.js";

function App() {
  const [cartItems, setCartItems] = useState({ items: [] });

  function handleAddItemToCart(id, itemsAmount) {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );

      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updateItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + itemsAmount,
        };
        updatedItems[existingCartItemIndex] = updateItem;
      } else {
        const product = PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          discount: product.discount,
          quantity: itemsAmount,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  console.log(cartItems.items);

  return (
    <>
      <Navbar />
      <ProductDetails
        onAddItemToCart={handleAddItemToCart}
        products={PRODUCTS}
      />
    </>
  );
}

export default App;
