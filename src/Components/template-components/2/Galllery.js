import Image from "next/image";

const Gallery = ({ images, paddingBottom, columngapcount, openLightbox }) => {
  const galleryImages = {
    gallery1: {
      alt: "Image 1",
      itemHeight: "67.29166666666667%",
      percentHeight: "0%",
      column: 0,
      itemsInColumn: 0,
    },
    gallery2: {
      alt: "Image 2",
      itemHeight: "100%",
      percentHeight: "0%",
      column: 1,
      itemsInColumn: 0,
    },
    gallery3: {
      alt: "Image 3",
      itemHeight: "100%",
      percentHeight: "17.491809735226195%",
      column: 0,
      itemsInColumn: 1,
    },
    gallery4: {
      alt: "Image 4",
      itemHeight: "100%",
      percentHeight: "25.994020659159673%",
      column: 1,
      itemsInColumn: 1,
    },
    gallery5: {
      alt: "Image 5",
      itemHeight: "100%",
      percentHeight: "43.48583039438586%",
      column: 0,
      itemsInColumn: 2,
    },
    gallery6: {
      alt: "Image 6",
      itemHeight: "66.66666666666666%",
      percentHeight: "51.98804131831935%",
      column: 1,
      itemsInColumn: 2,
    },
    gallery7: {
      alt: "Image 7",
      itemHeight: "48.541666666666664%",
      percentHeight: "69.47985105354553%",
      column: 0,
      itemsInColumn: 3,
    },
    gallery8: {
      alt: "Image 8",
      itemHeight: "68.87052341597796%",
      percentHeight: "69.31738842442579%",
      column: 1,
      itemsInColumn: 3,
    },
    gallery9: {
      alt: "Image 9",
      itemHeight: "68.87052341597796%",
      percentHeight: "82.0977819151793%",
      column: 0,
      itemsInColumn: 4,
    },
  };
  return (
    <div
      className="relative flex"
      style={{
        "--hgap": "40px",
        "--vgap": "40px",
        "--animation-duration": "350ms",
        "--columns": "2",
        "--highest-column-gap-count": columngapcount,
        paddingBottom: paddingBottom,
        height: "0",
        marginBottom: "calc(var(--highest-column-gap-count) * var(--vgap))",
      }}
    >
      {Object.keys(images).map((label,i) => {
        return (
          <div
            key={label}
            onClick={() => openLightbox(i)}
            style={{
              "--item-height": galleryImages[label].itemHeight,
              "--column": galleryImages[label].column,
              "--items-in-column": galleryImages[label].itemsInColumn,
              "--percent-height": galleryImages[label].percentHeight,
            }}
            className="Gallery"
          >
            <Image
              id={label}
              src={images[label]}
              alt={galleryImages[label].alt}
              fill
              className="!relative"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
