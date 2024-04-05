import "./App.css";
import SideMenu from "./Components/SideMenu/SideMenu";
import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [populationData, setPopulationData] = React.useState([]);
  async function fetchData() {
    try {
      const response = await fetch(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log(data, "data");
      setPopulationData(data);
      // return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Population Bar Chart",
      },
    },
  };
  console.log(populationData.data, "population");
  const labels = populationData?.data?.map((item) => {
    return item.Year;
  });
  const barData = populationData?.data?.map((item) => {
    return item.Population;
  });
  const data = {
    labels,
    datasets: [
      {
        label: "United States",
        data: barData,
        backgroundColor: "#79FCBB",
      },
    ],
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-row">
      <div className="basis-1/6">
        <SideMenu />
      </div>
      <div className="basis-5/6 bg-slate-900">
        <div className="m-8">
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
