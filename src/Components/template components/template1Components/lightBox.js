import React from "react";

const Lightbox = ({ isOpen, imageUrl, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="max-w-3xl w-full">
        <Image
          src={imageUrl}
          alt="Lightbox"
          className="rounded-lg shadow-lg"
          width={1000}
          height={1000}
        />
        <button
          className="absolute top-0 right-0 m-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 10.586l4.95-4.95a1 1 0 0 1 1.415 1.414L13.415 12l4.95 4.95a1 1 0 0 1-1.414 1.415L12 13.415l-4.95 4.95a1 1 0 0 1-1.415-1.414L10.586 12 5.636 7.05A1 1 0 0 1 7.05 5.636L12 10.586z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
