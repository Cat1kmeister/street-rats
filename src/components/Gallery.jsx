import { useEffect, useState } from "react";

export default function Gallery() {
  const images = [
    {
      src: `${import.meta.env.BASE_URL}gallery/screen1.png`,
      alt: "Street Rats gameplay",
    },
    {
      src: `${import.meta.env.BASE_URL}gallery/screen2.png`,
      alt: "Street Rats gameplay",
    },
    {
      src: `${import.meta.env.BASE_URL}gallery/screen3.png`,
      alt: "Street Rats gameplay",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const nextImage = () => {
    setSelectedImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setSelectedImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImage === null) return;

      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">

        <span className="gallery-kicker">
          FROM THE CITY
        </span>

        <h2>
          STREET RATS GALLERY
        </h2>

        <p>
          A glimpse into the strange world of Street Rats.
          <br />
          Meet the characters, see the city, and discover its stories.
        </p>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              className="gallery-card"
              key={image.src}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>

      </div>

      {selectedImage !== null && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="gallery-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <button
            className="gallery-arrow gallery-arrow-left"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
          >
            ←
          </button>

          <img
            className="gallery-lightbox-image"
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            onClick={(event) => event.stopPropagation()}
          />

          <button
            className="gallery-arrow gallery-arrow-right"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
          >
            →
          </button>

          <div className="gallery-counter">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
