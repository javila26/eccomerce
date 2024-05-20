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
      <div className="flex-images">
        {productImages.map((image) => (
          <img
            key={image.id}
            className={
              image.id === mainImage ? "small-image opacity" : "small-image"
            }
            onClick={() => {
              handleClick(image.id);
            }}
            src={image.thumb}
            alt={image.alt}
          />
        ))}
      </div>
    </aside>
  );
}
