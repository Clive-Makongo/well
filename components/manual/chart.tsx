"use client"
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Colors,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  Colors,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

type ChartProps = {
  label: string[];
  value: number[];
};

const Chart = ({ label, value }: ChartProps): React.ReactElement => {
  const data =
  {
    labels: label,
    datasets: [
      {
        label: `Grams`,
        data: value

      }
    ]
    };
    
    console.log("CHART: ", label, value)

  return <Pie data={data} />
}

export default Chart;
