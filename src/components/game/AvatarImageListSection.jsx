import { GameSetupSubHeader } from "./GameSetupSubHeader";
import { Avatar } from "./Avatar";

const avatars = [{ url: "bianca_landsvig.png", altText: "Bianca Landsvig" }];

export const AvatarImageListSection = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {children}
    </div>
  );
};
