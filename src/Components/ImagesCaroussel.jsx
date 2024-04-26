import { PRODUCTS } from "../../data.js";

// console.log(PRODUCTS[0].images[0]);

export default function ImagesCaroussel() {
  return (
    <aside className="box images">
      <img
        className="big-image"
        src={PRODUCTS[0].images[0].image}
        alt={PRODUCTS[0].images[0].alt}
      />
      <div className="images flex-images">
        <img
          className="small-image"
          src={PRODUCTS[0].images[0].thumb}
          alt={PRODUCTS[0].images[0].alt}
        />
        <img
          className="small-image"
          src={PRODUCTS[0].images[1].thumb}
          alt={PRODUCTS[0].images[0].alt}
        />
        <img
          className="small-image"
          src={PRODUCTS[0].images[2].thumb}
          alt={PRODUCTS[0].images[0].alt}
        />
        <img
          className="small-image"
          src={PRODUCTS[0].images[3].thumb}
          alt={PRODUCTS[0].images[0].alt}
        />
      </div>
    </aside>
  );
}
