import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  titlecontainer: {
    minHeight: "15vh",
  },
  title: {
    display: "flex",
    flexGrow: 1,
  },
  ecomicon: {
    fontSize: ".8125rem",
    color: "#109CF1",
    marginRight: "0.5rem",
  },
  storeicon: {
    fontSize: ".8125rem",
    color: "#FFB946",
    marginRight: "0.5rem",
  },
  icontext: {
    display: "flex",
    alignItems: "center",
  },
});

const UploadPriceSection = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      md={11}
      className={classes.titlecontainer}
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item className={classes.title}>
        <Typography variant="h3" color="initial">
          List Price
        </Typography>
      </Grid>
      <Grid item className={classes.icontext}>
        <Brightness1Icon className={classes.ecomicon} />
        <Typography variant="h5" color="initial">
          E-commerce
        </Typography>
      </Grid>
      <Grid item className={classes.icontext}>
        <Brightness1Icon className={classes.storeicon} />
        <Typography variant="h5" color="initial">
          Store
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary">
          Upload Price
        </Button>
      </Grid>
    </Grid>
  );
};

export default UploadPriceSection;
