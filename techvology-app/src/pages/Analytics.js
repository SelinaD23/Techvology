
import { React, useState, useEffect } from 'react'
import axios from 'axios';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import BASE_URL from '../utilities/constants';

const Analytics = () => {
  const [weeklyAverages, setWeeklyAverages] = useState([]);

  const fetchWeeklyAverages = async () => {
    const response = await axios.get(`${BASE_URL}/weeklyAverages`, { headers: { "Authorization": `Bearer ${sessionStorage.getItem("token")}` } });
    setWeeklyAverages(response.data);
    console.log(response.data);
  }

  const data = {
    labels: weeklyAverages.map((week) => week.week),
    datasets: [
      {
        label: "Average",
        data: weeklyAverages.map((week) => week.avg_carbon_output),
        borderColor: 'rgba(24, 70, 75, 1)',
        backgroundColor: 'rgba(24, 70, 75, .2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: true,
        text: 'Weekly Averages of Carbon Output',
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Carbon Output (lbs)'
        }
      },
      x : {
        title: {
          display: true,
          text: 'Week'
        }
      },
    }
  };



  useEffect(() => {
    fetchWeeklyAverages();
  }, []);

  return (
    <div>
      <Line 
        data={data} 
        options={options}
      />
    </div>
  );
};

export default Analytics;
