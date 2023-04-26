import { Avatar } from "./Avatar";

const avatars = [
  { url: "bianca_landsvig.png", altText: "Bianca Landsvig" },
  { url: "broder_salsa.png", altText: "Broder Salsa" },
  { url: "david_hasselhof.png", altText: "David Hasselhof" },
  { url: "kenneth.png", altText: "Kenneth" },
  { url: "laughing_eagle.png", altText: "Laughing Eagle" },
];

export const AvatarImageList = () => {
  return (
    <div>
      {avatars.map((img) => {
        return <Avatar img={img} />;
      })}
    </div>
  );
};
