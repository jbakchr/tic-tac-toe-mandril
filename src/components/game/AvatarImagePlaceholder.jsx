import { AvatarImage } from "./AvatarImage";
import { ImagePlaceholder } from "./ImagePlaceholder";

const imgStyle = {
  border: "1px solid black",
  width: "125px",
  height: "125px",
  borderRadius: "50%",
};

export const AvatarImagePlaceholder = ({ avatarImgText, player }) => {
  if (player) {
    return <AvatarImage player={player} styles={imgStyle} />;
  }

  return <ImagePlaceholder imgStyle={imgStyle} avatarImgText={avatarImgText} />;
};
