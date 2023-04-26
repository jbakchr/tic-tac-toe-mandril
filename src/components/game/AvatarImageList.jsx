import { useState, useContext } from "react";

import { GlobalContext } from "../../context/GlobalContext";
import { Avatar } from "./Avatar";

export const AvatarImageList = () => {
  const [avatars, setAvatars] = useState([
    { url: "bianca_landsvig.png", altText: "Bianca Landsvig" },
    { url: "broder_salsa.png", altText: "Broder Salsa" },
    { url: "david_hasselhof.png", altText: "David Hasselhof" },
    { url: "kenneth.png", altText: "Kenneth" },
    { url: "laughing_eagle.png", altText: "Laughing Eagle" },
  ]);
  const { addPlayer } = useContext(GlobalContext);

  const onAvatarClick = (index) => {
    /**
     * TODO: Write comment about this check
     */
    if (avatars.length <= 3) {
      return;
    }

    /**
     * When the user clicks an avatar we first make a copy of the avatars array
     * as this will make it easier to set the avatars state when the clicked
     * avatar has been spliced
     */
    const avatarsCopy = [...avatars];

    /**
     * Then we splice the avatars array copy in order to get the element (avatar)
     * that'll be used to set as one of the players in the global state
     */
    const selectedAvatar = avatarsCopy.splice(index, 1)[0];

    /**
     * Lastly we update the avatars state with the new spliced list of avatars and
     * then push the selected avatar onto global state
     */
    setAvatars(avatarsCopy);
    addPlayer(selectedAvatar);
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
