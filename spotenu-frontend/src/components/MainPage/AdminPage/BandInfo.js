import React from "react";
import { IconButton } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import {
  AdminContainer,
  IconsContainer,
  DescriptionContainer,
  BandContainer,
} from "./style";

export const BandInfo = (props) => {
  const rejectBand = (id) => {
    console.log("rejeitou");
  };

  return (
    <div>
      {props.bands.filter(band => !band.isApproved).map((band) => {
        return (
          <AdminContainer>
            <BandContainer>
              <p><strong>Nome: </strong>{band.name}</p>
            </BandContainer>

            <DescriptionContainer>
              <p><strong>Descrição: </strong> {band.description}</p>
            </DescriptionContainer>

            <IconsContainer>
              <IconButton onClick={() => props.approveBand(band.id)}>
                <ThumbUpIcon />
              </IconButton>
              <IconButton onClick={rejectBand}>
                <ThumbDownIcon />
              </IconButton>
            </IconsContainer>
          </AdminContainer>
        );
      })}
    </div>
  );
};
