const imgStyle = {
  border: "1px solid black",
  width: "125px",
  height: "125px",
  borderRadius: "50%",
};

export const AvatarImagePlaceholder = ({ avatarImgText, player }) => {
  console.log(player);
  if (player) {
    return (
      <img
        src={`/images/${player.url}`}
        alt={player.altText}
        style={imgStyle}
      />
    );
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
