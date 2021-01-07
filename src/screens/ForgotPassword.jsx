import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FingerprintOutlinedIcon from "@material-ui/icons/FingerprintOutlined";
import { Link } from "react-router-dom";
import Spacer from "react-add-space";

import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logo: {
    fontSize: "6.25rem",
    background: "#C2CFE0",
    borderRadius: "1rem",
  },
  logocontainer: {
    paddingTop: "10vh",
    paddingBottom: "5vh",
  },
  padding5vhbot: {
    paddingBottom: "5vh",
  },
  padding10vhbot: {
    paddingBottom: "10vh",
  },
}));

const ForgotPassword = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item md={4} />
      <Grid
        item
        md={4}
        sm={12}
        container
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item container md={8} sm={10} xs={12} alignItems="center">
          <Grid
            item
            container
            spacing={3}
            alignItems="center"
            className={classes.logocontainer}
          >
            <Grid item>
              <FingerprintOutlinedIcon className={classes.logo} />
            </Grid>
            <Grid item>
              <Typography variant="h2" color="initial">
                Enterprise Pricing
              </Typography>
              <Typography variant="h2" color="initial">
                and Discounts
              </Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Typography variant="h2" color="initial">
              Forgot Password
            </Typography>
          </Grid>
          <Grid item container className={classes.padding5vhbot}>
            <TextField
              label={
                <Typography variant="h5" color="initial">
                  Enter your Email
                </Typography>
              }
              type="email"
              fullWidth
            />
          </Grid>

          <Grid item container className={classes.padding10vhbot}>
            <Button variant="contained" color="primary" fullWidth>
              <Typography variant="h5" color="initial">
                Sign in
              </Typography>
            </Button>
          </Grid>
          <Grid item container>
            <Typography variant="h5" color="initial">
              Don't have an account?
            </Typography>
            <Spacer amount={2} />
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <Typography variant="h5" color="initial">
                Sign up
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4} />
    </Grid>
  );
};

export default ForgotPassword;
