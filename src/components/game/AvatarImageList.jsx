import { GameSetupSubHeader } from "./GameSetupSubHeader";
import { Avatar } from "./Avatar";

const avatars = [{ url: "bianca_landsvig.png", altText: "Bianca Landsvig" }];

export const AvatarImageList = () => {
  return (
    <div>
      <GameSetupSubHeader />
      {avatars.map((img, index) => {
        return <Avatar key={index} img={img} />;
      })}
    </div>
  );
};
