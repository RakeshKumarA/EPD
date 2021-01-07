import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FingerprintOutlinedIcon from "@material-ui/icons/FingerprintOutlined";
import { Link } from "react-router-dom";
import Spacer from "react-add-space";

import { makeStyles } from "@material-ui/core/styles";
import {
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
} from "@material-ui/core";

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
  padding2vhbot: {
    paddingBottom: "2vh",
  },
  padding5vhbot: {
    paddingBottom: "5vh",
  },
  padding10vhbot: {
    paddingBottom: "10vh",
  },
}));

const LoginScreen = () => {
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
            <Typography variant="h1" color="initial">
              Sign In
            </Typography>
          </Grid>
          <Grid item container className={classes.padding2vhbot}>
            <TextField
              label={
                <Typography variant="h5" color="initial">
                  Email
                </Typography>
              }
              type="email"
              fullWidth
            />
          </Grid>
          <Grid item container className={classes.padding2vhbot}>
            <TextField
              label={
                <Typography variant="h5" color="initial">
                  Password
                </Typography>
              }
              type="password"
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            justify="space-between"
            alignItems="center"
            className={classes.padding5vhbot}
          >
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={true}
                    onChange={() => console.log("checked")}
                    name="checkedB"
                    color="primary"
                  />
                }
                label={
                  <Typography variant="h6" color="initial">
                    Keep me Logged in
                  </Typography>
                }
              />
            </Grid>
            <Grid item>
              <Link to="/forgotpwd" style={{ textDecoration: "none" }}>
                <Typography variant="h6" color="initial">
                  Forgot Password?
                </Typography>
              </Link>
            </Grid>
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

export default LoginScreen;
