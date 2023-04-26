import { AvatarImage } from "./AvatarImage";

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

  return (
    <div
      style={{
        ...imgStyle,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>{avatarImgText}</p>
    </div>
  );
};
