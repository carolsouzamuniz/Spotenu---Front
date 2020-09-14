import React from "react";
import { ListItem, IconButton, Card, CardContent } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

export const BandInfo = () => {
  const approveBand = () => {
    console.log("aprovou");
  };

  const rejectBand = () => {
    console.log("rejeitou");
  };

  return (
    <div>
      <Card>
        <CardContent>
          <p>Nome da banda</p>
          <p>Descrição da banda</p>
          <IconButton onClick={approveBand}>
            <ThumbUpIcon />
          </IconButton>
          <IconButton onClick={rejectBand}>
            <ThumbDownIcon />
          </IconButton>
        </CardContent>
      </Card>
    </div>
  );
};
