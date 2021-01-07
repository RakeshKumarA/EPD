import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FingerprintOutlinedIcon from "@material-ui/icons/FingerprintOutlined";
import Spacer from "react-add-space";

import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { Link } from "react-router-dom";

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
}));

const SignUp = () => {
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
              Sign Up
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
                  Country
                </Typography>
              }
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item container className={classes.padding2vhbot}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-simple-select-label">
                <Typography variant="h5" color="initial">
                  Role
                </Typography>
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={10}>User</MenuItem>
                <MenuItem value={20}>Super User</MenuItem>
                <MenuItem value={30}>Admin</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item container className={classes.padding5vhbot}>
            <TextField
              multiline
              label={
                <Typography variant="h5" color="initial">
                  Reason for Access
                </Typography>
              }
              type="text"
              fullWidth
            />
          </Grid>

          <Grid item container className={classes.padding5vhbot}>
            <Button variant="contained" color="primary" fullWidth>
              <Typography variant="h5" color="initial">
                Sign up
              </Typography>
            </Button>
          </Grid>
          <Grid item container>
            <Typography variant="h5" color="initial">
              Already have an account?
            </Typography>
            <Spacer amount={2} />
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography variant="h5" color="initial">
                Sign in
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4} />
    </Grid>
  );
};

export default SignUp;
