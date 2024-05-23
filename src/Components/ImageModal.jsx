import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
import ImagesCaroussel from "./ImagesCaroussel";

function ImageModal({ products, isOpen, onClickClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpen]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClickClose}>
      {isOpen && (
        <ImagesCaroussel productImages={products} onClickOpen={onClickClose} />
      )}
    </dialog>,
    document.getElementById("modal")
  );
}

export default ImageModal;
