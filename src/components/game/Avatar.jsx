import React from "react";

export const Avatar = ({ img, index, onAvatarClick }) => {
  const onImageClick = () => {
    onAvatarClick(index);
  };

  return (
    <img
      src={`/images/${img.url}`}
      alt={img.altText}
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        margin: "4px",
      }}
      onClick={onImageClick}
    />
  );
};
