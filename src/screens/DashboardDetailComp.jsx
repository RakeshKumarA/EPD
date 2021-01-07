import {
  Card,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PieChart from "./PieChart";
import OfferTypeCard from "./OfferTypeCard";
import SearchComponent from "./SearchComponent";

const useStyles = makeStyles({
  latestactstyle: {
    padding: "2rem",
  },
  cardStyle: {
    width: "90%",
    height: "40vh",
    padding: "1rem",
  },
  tablecontstyle: {
    width: "90%",
  },
  tablegridstyle: {
    paddingTop: "10vh",
  },
});

const tableData = [
  {
    id: 1,
    name: "10% off Site Wide",
    type: "Discount",
    createdBy: "Rakesh",
    startDate: "2021-01-01",
    endDate: "2021-02-02",
  },
  {
    id: 2,
    name: "10% off Site Wide",
    type: "Discount",
    createdBy: "Rakesh",
    startDate: "2021-01-01",
    endDate: "2021-02-02",
  },
  {
    id: 3,
    name: "10% off Site Wide",
    type: "Discount",
    createdBy: "Rakesh",
    startDate: "2021-01-01",
    endDate: "2021-02-02",
  },
  {
    id: 4,
    name: "10% off Site Wide",
    type: "Coupon",
    createdBy: "Rakesh",
    startDate: "2021-01-01",
    endDate: "2021-02-02",
  },
  {
    id: 5,
    name: "10% off Site Wide",
    type: "Coupon",
    createdBy: "Rakesh",
    startDate: "2021-01-01",
    endDate: "2021-02-02",
  },
  {
    id: 6,
    name: "10% off Site Wide",
    type: "Reward",
    createdBy: "Rakesh",
    startDate: "2021-01-01",
    endDate: "2021-02-02",
  },
  {
    id: 7,
    name: "10% off Site Wide",
    type: "Reward",
    createdBy: "Rakesh",
    startDate: "2021-01-01",
    endDate: "2021-02-02",
  },
  {
    id: 8,
    name: "10% off Site Wide",
    type: "Coupon",
    createdBy: "Rakesh",
    startDate: "2021-01-01",
    endDate: "2021-02-02",
  },
  {
    id: 9,
    name: "10% off Site Wide",
    type: "Reward",
    createdBy: "Rakesh",
    startDate: "2021-01-01",
    endDate: "2021-02-02",
  },
  {
    id: 10,
    name: "10% off Site Wide",
    type: "Coupon",
    createdBy: "Rakesh",
    startDate: "2021-01-01",
    endDate: "2021-02-02",
  },
  {
    id: 11,
    name: "10% off Site Wide",
    type: "Reward",
    createdBy: "Rakesh",
    startDate: "2021-01-01",
    endDate: "2021-02-02",
  },
];

const DashboardDetailComp = () => {
  const classes = useStyles();
  const discountData = [25, 35, 45];
  const couponData = [35, 95, 25];
  const rewardData = [55, 45, 98];

  return (
    <Grid container direction="column">
      <SearchComponent />
      <Grid item>
        <Typography
          variant="h3"
          color="initial"
          className={classes.latestactstyle}
        >
          Latest Activity
        </Typography>
      </Grid>
      <Grid item container justify="center">
        <Grid item md={4} sm={8} container justify="center">
          <Card className={classes.cardStyle}>
            <PieChart rawData={discountData} type="Discount" />
          </Card>
        </Grid>
        <Grid item md={4} sm={8} container justify="center">
          <Card className={classes.cardStyle}>
            <PieChart rawData={couponData} type="Coupon" />
          </Card>
        </Grid>
        <Grid item md={4} sm={8} container justify="center">
          <Card className={classes.cardStyle}>
            <PieChart rawData={rewardData} type="Reward" />
          </Card>
        </Grid>
      </Grid>
      <Grid item container justify="center" className={classes.tablegridstyle}>
        <TableContainer component={Paper} className={classes.tablecontstyle}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">Created By</TableCell>
                <TableCell align="center">Start Date</TableCell>
                <TableCell align="center">End Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row" align="center">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">
                    <OfferTypeCard
                      type={row.type}
                      bgcolor={
                        row.type === "Discount"
                          ? "#F7685B"
                          : row.type === "Coupon"
                          ? "#885AF8"
                          : "#2ED47A"
                      }
                    />
                  </TableCell>
                  <TableCell align="center">{row.createdBy}</TableCell>
                  <TableCell align="center">{row.startDate}</TableCell>
                  <TableCell align="center">{row.endDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default DashboardDetailComp;
