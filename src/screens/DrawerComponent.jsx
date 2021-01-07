import React from "react";
import {
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FingerprintOutlinedIcon from "@material-ui/icons/FingerprintOutlined";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import AssessmentIcon from "@material-ui/icons/Assessment";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "16.66vw",
  },
  logo: {
    fontSize: "4rem",
    background: "#C2CFE0",
    borderRadius: "1rem",
  },
  logocontainer: {
    padding: "2rem 0 1rem 0",
  },
  drawerPaper: {
    width: "16.66vw",
  },
  avatarpad: {
    paddingLeft: 10,
  },
});

const DrawerComponent = () => {
  const classes = useStyles();
  const history = useHistory();

  const draweritems = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      name: "Price",
      icon: <MonetizationOnIcon />,
    },
    {
      name: "Discount",
      icon: <LocalOfferIcon />,
    },
    {
      name: "Coupon",
      icon: <ConfirmationNumberIcon />,
    },
    {
      name: "Reward",
      icon: <AccountBalanceIcon />,
    },
    {
      name: "Report",
      icon: <AssessmentIcon />,
    },
    {
      name: "Shipping & Services",
      icon: <LocalShippingIcon />,
    },
  ];

  const handleDrawerClick = (name) => {
    switch (name) {
      case "Dashboard":
        return history.push("/dashboard");
      case "Price":
        return history.push("/price");
      case "Discount":
        return history.push("/discount");
      default:
        break;
    }
  };

  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Grid container justify="center" className={classes.logocontainer}>
        <FingerprintOutlinedIcon className={classes.logo} />
      </Grid>
      <Grid container justify="center">
        <Typography variant="h2" color="initial">
          John Doe
        </Typography>
      </Grid>
      <Divider />
      <List>
        {draweritems.map((draweritem) => (
          <ListItem
            button
            key={draweritem.name}
            onClick={() => handleDrawerClick(draweritem.name)}
          >
            <ListItemIcon>{draweritem.icon}</ListItemIcon>
            <ListItemText primary={draweritem.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NotificationsActiveIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
