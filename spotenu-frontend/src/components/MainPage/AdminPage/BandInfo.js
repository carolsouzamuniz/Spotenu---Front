import React from "react";
import axios from "axios";
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
    <AdminContainer>
      {props.unapprovedBands.map((band) => {
        
        return (
          <div>
            <BandContainer>
              <p>{band.name}</p>
            </BandContainer>

            <DescriptionContainer>
              <p>{band.description}</p>
            </DescriptionContainer>

            <IconsContainer>
              <IconButton onClick={() => props.approveBand(band.id)}>
                <ThumbUpIcon />
              </IconButton>
              <IconButton onClick={rejectBand}>
                <ThumbDownIcon />
              </IconButton>
            </IconsContainer>
          </div>
        );
      })}
    </AdminContainer>
  );
};
