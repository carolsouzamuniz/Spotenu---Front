import React from "react";
import {
  ListItem,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

export const BandInfo = () => {
  const approveBand = () => {
    console.log("aprovou");
  };

  const rejectBand = () => {
    console.log("rejeitou");
  };

  const { nickname, description } = props.info;

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Informações da Banda
          </Typography>
          <TripInfoItem infoName={"Nickname"} info={nickname} />
          <TripInfoItem infoName={"Descrição"} info={description} />
          <ListItem>
            <ListItemSecondaryAction>
              <IconButton onClick={approveBand}>
                <ThumbUpIcon />
              </IconButton>
              <IconButton onClick={rejectBand}>
                <ThumbDownIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </CardContent>
      </Card>
    </div>
  );
};
