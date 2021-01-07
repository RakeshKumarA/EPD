import React from "react";
import { Grid, Paper, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const top100Films = [
  { title: "Create Discount", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
];

const useStyles = makeStyles({
  paperstyle: {
    width: "83.34vw",
  },
});

const SearchComponent = () => {
  const classes = useStyles();
  return (
    <Grid item md={12}>
      <Paper className={classes.paperstyle}>
        <Autocomplete
          options={top100Films}
          freeSolo
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              fullWidth
              placeholder="Global Search..."
            />
          )}
        />
      </Paper>
    </Grid>
  );
};

export default SearchComponent;
