import React from "react";
import { Doughnut } from "react-chartjs-2";

const PieChart = ({ rawData, type }) => {
  const data = {
    labels: ["Active", "Future", "Expired"],
    datasets: [
      {
        data: rawData,
        backgroundColor: ["#F7685B", "#885AF8", "#C2CFE0"],
        borderColor: ["#F7685B", "#885AF8", "#C2CFE0"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <Doughnut
        data={data}
        options={{
          maintainAspectRatio: false,
          cutoutPercentage: 85,
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 10,
              fontFamily: '"Poppins", "-apple-system", "sans-serif"',
            },
          },
          title: {
            display: true,
            text: type,
            fontSize: 20,
            fontFamily: '"Poppins", "-apple-system", "sans-serif"',
          },
        }}
      />
    </>
  );
};

export default PieChart;
