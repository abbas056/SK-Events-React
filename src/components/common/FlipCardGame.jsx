import React, { useState } from "react";
import { animationFunc } from "../../js/helpers";
import skeleton from "../../assets/skeleton.png";
import pumpkin from "../../assets/pumpkin.png";

function FlipCardGame({ gameCards, spooky, creepy, haunted }) {
  const [images, setImages] = useState(gameCards);
  const [isplaying, setisplaying] = useState(false);
  const [currentId, setcurrentId] = useState(null);
  let value = 1;
  let imgShow;
  if (value === 1) {
    imgShow = skeleton;
  } else if (value === 2) {
    imgShow = pumpkin;
  }
  const handleImageClick = (id) => {
    setcurrentId(id);
    setisplaying(true);
    const filtered = images.filter((d) => d.id != id);
    setImages([...filtered, { id: id, src: imgShow, flipped: true }]);
    setTimeout(() => {
      setisplaying(false);
    }, 2500);
  };
  let newImages = images.sort((a, b) => a.id - b.id);
  const renderImages = () => {
    return newImages.map((image) => (
      <div
        key={image.id}
        className={spooky ? `image-container width-30 ` : creepy ? `image-container width-22 ` : `image-container width-17 `}
        onClick={() => handleImageClick(image.id)}
      >
        <img src={isplaying && currentId === image.id ? animationFunc(value, spooky, creepy, haunted) : image.src} alt="Original" />
      </div>
    ));
  };

  return (
    <div className="image-flip-container d-flex jc-center al-center m-auto gap-4 p-rel">
      <div className="cards-container p-abs">{renderImages()}</div>
    </div>
  );
}

export default FlipCardGame;
