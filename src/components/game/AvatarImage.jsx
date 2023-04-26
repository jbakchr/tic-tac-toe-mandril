import React from "react";

export const AvatarImage = ({ player, styles }) => {
  return (
    <img src={`/images/${player.url}`} alt={player.altText} style={styles} />
  );
};
