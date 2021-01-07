import { Grid } from "@material-ui/core";
import React from "react";
import SearchComponent from "./SearchComponent";
import SearchPriceSection from "./SearchPriceSection";
import UploadPriceSection from "./UploadPriceSection";

const PriceComponent = () => {
  return (
    <Grid container direction="column" alignItems="center">
      <SearchComponent />
      <UploadPriceSection />
      <SearchPriceSection />
    </Grid>
  );
};

export default PriceComponent;
