import React, { useEffect, useState } from "react";
import CharacterEar from "./CharacterEar";
import CharacterFace from "./CharacterFace";
import "./CharacterDisplay.css";
import CharacterBodyImg from "../assets/character-body.png";

const CharacterDisplay: React.FC = () => {
  const [loadedBodyImg, setLoadedBodyImg] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = CharacterBodyImg;
    img.onload = () => {
      console.log("CharacterBodyImage loaded");
      setLoadedBodyImg(CharacterBodyImg);
    };
  }, []);

  return (
    <div className="character">
      {loadedBodyImg !== null ? (
        <img
          src={loadedBodyImg}
          alt="Character body"
          className="character-body"
        />
      ) : (
        <div className="character-body"></div>
      )}

      <CharacterEar side="left" />
      <CharacterEar side="right" />

      <CharacterFace />
    </div>
  );
};

export default CharacterDisplay;
