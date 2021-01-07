import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DashboardDetailComp from "./DashboardDetailComp";
import DrawerComponent from "../screens/DrawerComponent";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <DrawerComponent />
      <DashboardDetailComp />
    </div>
  );
};

export default Dashboard;
