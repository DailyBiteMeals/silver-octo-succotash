import React from "react";
// import Masonry from "react-photo-album";
import ImageGallery from "../../assets/About/ImageGalleryFrame.png";

const ImageGallary = () => {
  return (
    <div className="flex justify-center h-screen px-60 py-10">
      {/* <Masonry photos={photos} direction="column" targetRowHeight={300} /> */}
      <img src={ImageGallery} alt="" srcset="" />
    </div>
  );
};

export default ImageGallary;