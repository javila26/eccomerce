import { useState } from "react";

export default function ImagesCaroussel({ productImages }) {
  const [mainImage, setMainImage] = useState(0);

  function handleClick(id) {
    setMainImage(id);
  }

  return (
    <aside className="box images">
      <img
        className="big-image"
        src={productImages[mainImage].image}
        alt={productImages[mainImage].alt}
      />
      <div className="images flex-images">
        <img
          className="small-image"
          onClick={() => {
            handleClick(productImages[0].id);
          }}
          src={productImages[0].thumb}
          alt={productImages[0].alt}
        />
        <img
          className="small-image"
          onClick={() => {
            handleClick(productImages[1].id);
          }}
          src={productImages[1].thumb}
          alt={productImages[1].alt}
        />
        <img
          className="small-image"
          onClick={() => {
            handleClick(productImages[2].id);
          }}
          src={productImages[2].thumb}
          alt={productImages[2].alt}
        />
        <img
          className="small-image"
          onClick={() => {
            handleClick(productImages[3].id);
          }}
          src={productImages[3].thumb}
          alt={productImages[3].alt}
        />
      </div>
    </aside>
  );
}
