import React from "react";
import { ImageLoadContext } from "../context";
import CharacterEar from "./CharacterEar";
import CharacterFace from "./CharacterFace";
import "./CharacterDisplay.css";
import CharacterBodyImg from "../assets/character-body.png";

const CharacterDisplay: React.FC = () => {
  const { setImageLoaded } = React.useContext(ImageLoadContext);
  return (
    <div className="character">
      <img
        src={CharacterBodyImg}
        onLoad={() => {
          // wait for 0.5 seconds to show the character
          setTimeout(() => {
            setImageLoaded(true);
            console.log("Character body image loaded");
          }, 500);
        }}
        onError={() => {
          console.error("Failed to load the character body image");
        }}
        alt="Character body"
        className="character-body"
      />

      <CharacterEar side="left" />
      <CharacterEar side="right" />

      <CharacterFace />
    </div>
  );
};

export default CharacterDisplay;
