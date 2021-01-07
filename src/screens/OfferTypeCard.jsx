import React from "react";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardSytle: {
    backgroundColor: (props) => props.bgcolor,
    padding: "0.2rem 0",
    color: "#fff",
  },
});

const OfferTypeCard = (props) => {
  const { cardSytle } = useStyles(props);
  const { type } = props;

  return (
    <Card>
      <Typography
        variant="h6"
        color="initial"
        align="center"
        className={cardSytle}
      >
        {type}
      </Typography>
    </Card>
  );
};

export default OfferTypeCard;
