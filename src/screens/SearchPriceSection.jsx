import {
  Card,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    padding: "1rem",
  },
  buttoncolor: {
    color: "#109CF1",
  },
  formStyle: {
    width: "100%",
  },
});

const SearchPriceSection = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item md={11}>
        <Card className={classes.cardContainer}>
          <Grid
            item
            container
            md={4}
            alignItems="center"
            justify="space-around"
          >
            <Grid item container direction="column" md={2}>
              <Grid item>
                <Typography variant="h6" color="initial">
                  Level 1
                </Typography>
              </Grid>
              <Grid item>
                <FormControl>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem value={10}>01</MenuItem>
                    <MenuItem value={20}>02</MenuItem>
                    <MenuItem value={30}>03</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item md={2}>
              <ChevronRightIcon />
            </Grid>
            <Grid item container direction="column" md={2}>
              <Grid item>
                <Typography variant="h6" color="initial">
                  Level 2
                </Typography>
              </Grid>
              <Grid item>
                <FormControl>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem value={10}>11</MenuItem>
                    <MenuItem value={20}>22</MenuItem>
                    <MenuItem value={30}>33</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item md={2}>
              <ChevronRightIcon />
            </Grid>
            <Grid item container direction="column" md={2}>
              <Grid item>
                <Typography variant="h6" color="initial">
                  Level 3
                </Typography>
              </Grid>
              <Grid item>
                <FormControl>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem value={10}>111</MenuItem>
                    <MenuItem value={20}>222</MenuItem>
                    <MenuItem value={30}>333</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Divider orientation="vertical" />
          </Grid>
          <Grid
            item
            container
            md={8}
            alignItems="center"
            justify="space-around"
          >
            <Grid item container direction="column" md={2}>
              <Grid item>
                <Typography variant="h6" color="initial">
                  Item Number
                </Typography>
              </Grid>
              <Grid item>
                <TextField type="text" />
              </Grid>
            </Grid>
            <Grid item container direction="column" md={2}>
              <Grid item>
                <Typography variant="h6" color="initial">
                  Country
                </Typography>
              </Grid>
              <Grid item>
                <FormControl className={classes.formStyle}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem value={10}>United States</MenuItem>
                    <MenuItem value={20}>India</MenuItem>
                    <MenuItem value={30}>China</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item container direction="column" md={2}>
              <Grid item>
                <Typography variant="h6" color="initial">
                  Channel
                </Typography>
              </Grid>
              <Grid item>
                <FormControl className={classes.formStyle}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem value={10}>E-Commerce</MenuItem>
                    <MenuItem value={20}>Stores</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item container direction="column" md={2}>
              <Button variant="outlined">
                <Typography variant="h6" className={classes.buttoncolor}>
                  Search
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SearchPriceSection;
