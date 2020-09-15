import React from "react";
import {
  ImageContainer,
  ItemInfo,
  InfoMusicContainer,
  FavoriteIconContainer, 
  MusicContainer, 
  BandContainer
} from "./style";
import banda from "../../../img/banda.jpg";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export const ItensList = () => {
  return (
    <ItemInfo>
      <ImageContainer src={banda} alt="foto da banda" />
      <audio controls />
      <InfoMusicContainer>
        <MusicContainer>
          <p>Música</p>
        </MusicContainer>

        <BandContainer>
          <p>Banda</p>
        </BandContainer>

        <FavoriteIconContainer>
          <FavoriteBorderIcon fontSize="large" />
        </FavoriteIconContainer>
      </InfoMusicContainer>
    </ItemInfo>
  );
};
