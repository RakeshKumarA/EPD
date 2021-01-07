import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DrawerComponent from "./DrawerComponent";
import PriceComponent from "./PriceComponent";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

const Price = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <DrawerComponent />
      <PriceComponent />
    </div>
  );
};

export default Price;
