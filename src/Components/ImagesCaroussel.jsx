import { useState } from "react";
import leftArrow from "/assets/icon-next.svg";
import rightArrow from "/assets/icon-next.svg";

export default function ImagesCaroussel({ productImages, onClickOpen }) {
  const [mainImage, setMainImage] = useState(0);

  function handleClick(id) {
    setMainImage(() => {
      return id;
    });
  }

  function handleNextImage(nextStep) {
    setMainImage((prevMainImageId) => {
      if (prevMainImageId === 3) {
        return prevMainImageId;
      } else {
        return prevMainImageId + nextStep;
      }
    });
  }

  function handlePreviousImage(nextStep) {
    setMainImage((prevMainImageId) => {
      if (prevMainImageId === 0) {
        return prevMainImageId;
      } else {
        return prevMainImageId - nextStep;
      }
    });
  }

  return (
    <aside className="box images">
      <div className="carousel">
        <button
          className="arrow arrow-left"
          onClick={() => handlePreviousImage(1)}
        >
          <img src={leftArrow} alt="left-arrow" />
        </button>

        <img
          className={"big-image fadeToRight"}
          src={productImages[mainImage].image}
          alt={productImages[mainImage].alt}
          onClick={onClickOpen}
        />

        <button
          className="arrow arrow-right"
          onClick={() => handleNextImage(1)}
        >
          <img src={rightArrow} alt="left-arrow" />
        </button>
      </div>

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
