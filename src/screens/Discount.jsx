import React from "react";
import DiscountComponent from "./DiscountComponent";
import { makeStyles } from "@material-ui/core/styles";
import DrawerComponent from "./DrawerComponent";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

const Discount = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <DrawerComponent />
      <DiscountComponent />
    </div>
  );
};

export default Discount;
