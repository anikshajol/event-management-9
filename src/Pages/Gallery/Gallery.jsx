import { useEffect, useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [imagesLength, setImagesLength] = useState(3);
  useEffect(() => {
    fetch("/images.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.length > 6
          ? images.slice(0, imagesLength).map((image) => (
              <div key={image.id}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={image.imageUrl}
                  alt=""
                />
              </div>
            ))
          : images.map((image) => (
              <div key={image.id}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={image.imageUrl}
                  alt=""
                />
              </div>
            ))}
      </div>

      {images.length < 4 || imagesLength === images.length ? (
        <div className=" hidden text-center  py-7">
          <button
            onClick={() => setImagesLength(images.length)}
            className="primary-btn hidden"
          >
            See All
          </button>
        </div>
      ) : (
        <div className=" block text-center py-7">
          <button
            onClick={() => setImagesLength(images.length)}
            className="see-all btn text-white font-bold text-lg"
          >
            See All
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
