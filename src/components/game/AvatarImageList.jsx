import { useState } from "react";
import { Avatar } from "./Avatar";

export const AvatarImageList = () => {
  const [avatars, setAvatars] = useState([
    { url: "bianca_landsvig.png", altText: "Bianca Landsvig" },
    { url: "broder_salsa.png", altText: "Broder Salsa" },
    { url: "david_hasselhof.png", altText: "David Hasselhof" },
    { url: "kenneth.png", altText: "Kenneth" },
    { url: "laughing_eagle.png", altText: "Laughing Eagle" },
  ]);

  const onAvatarClick = (index) => {
    // When a user clicks an avatar we first extract that avatar from the list of avatars
    const avatarSelected = avatars.splice(index, 1);
    console.log("selected avatar", avatarSelected);
    console.log("remaining avatars:", avatars);
  };

  return (
    <div>
      {avatars.map((img, index) => {
        return (
          <Avatar
            key={index}
            img={img}
            index={index}
            onAvatarClick={onAvatarClick}
          />
        );
      })}
    </div>
  );
};
