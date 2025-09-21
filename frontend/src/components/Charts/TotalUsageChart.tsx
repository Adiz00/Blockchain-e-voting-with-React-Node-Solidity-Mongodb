// // UserActivityChart.js

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// const UserActivityChart = ({ graphData, selectedGraph }) => {

//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
//   );

//   const monthNames = [
//     "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
//     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
//   ];

//   const formatMonth = (monthString) => {
//     // console.log('selectedGraph ', selectedGraph);
//     if(monthString){
//       // console.log('monthString ',typeof(monthString) );
//       const [year, month] = monthString.split("-");
//       // console.log('year, month ', year);
//       return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
//     }
//   };

//   // const formatMonth = (monthString) => {
//   //   // Array of month names
//   //   const monthNames = [
//   //     "January", "February", "March", "April", "May", "June",
//   //     "July", "August", "September", "October", "November", "December"
//   //   ];

//   //   // Split the input string to extract the year and month
//   //   const [year, month] = monthString.split("-");

//   //   // Convert the month number to an integer and get the corresponding month name
//   //   const monthName = monthNames[parseInt(month, 10) - 1];

//   //   // Return the formatted string
//   //   return `${monthName} ${year}`;
//   // };

//   const options = {
//     plugins: {
//       title: {
//         display: false,
//         text: 'Chart.js Bar Chart - Stacked',
//       },
//     },
//     responsive: true,
//     scales: {
//       x: {
//         stacked: true,
//       },
//       y: {
//         stacked: true,
//       },
//     },
//     backgroundColor: 'white',

//   };

//   let labels;
//   let dataValues;

//   if (selectedGraph == "weekly") {

//     labels = graphData?.map(item => item?.date) || [];
//     dataValues = graphData?.map(item => item?.count) || [];
//   }
//   else if (selectedGraph == "monthly") {
//     labels = graphData?.map(item => formatMonth(item.month)) || [];
//     dataValues = graphData?.map(item => item?.count) || [];
//   }
//   else if (selectedGraph == "yearly") {
//     labels = graphData?.map(item => item?.year) || [];
//     dataValues = graphData?.map(item => item?.count) || [];
//   }


//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'User Activity',
//         data: dataValues,
//         backgroundColor: 'green',
//         barThickness: 10, // Adjust the bar width here
//         borderRadius: 10, // Adjust the border radius here


//       },

//     ],

//     plugins: {
//       title: {
//         display: false,
//         text: 'Chart.js Bar Chart - Stacked',
//       },
//     },




//   };


//   return <Bar data={data} options={options} />;
// };

// export default UserActivityChart;


// UserActivityChart.tsx

import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ChartData,
//   ChartOptions,
//   Chart
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const TotalUsageChart: React.FC<any> = ({ data, options, }) => {

  const dataa = [
    {
      name: 'Jan',
      android: 1200,
      ios: 1500,
    },
    {
      name: 'Feb',
      android: 1300,
      ios: 1600,
    },
    {
      name: 'Mar',
      android: 1400,
      ios: 1700,
    },
    {
      name: 'Apr',
      android: 1500,
      ios: 1800,
    },
    {
      name: 'May',
      android: 1600,
      ios: 1900,
    },
    {
      name: 'Jun',
      android: 1700,
      ios: 2000,
    },
    {
      name: 'Jul',
      android: 1800,
      ios: 2100,
    },
    {
      name: 'Aug',
      android: 1900,
      ios: 2200,
    },
    {
      name: 'Sep',
      android: 2000,
      ios: 2300,
    },
    {
      name: 'Oct',
      android: 2100,
      ios: 2400,
    },
    {
      name: 'Nov',
      android: 2200,
      ios: 2500,
    },
    {
      name: 'Dec',
      android: 2300,
      ios: 2600,
    },
  ];
  // console.log("data in total usage chart", data);
  // return <Bar data={data} options={options} />;
  // return <Bar data={dataa} options={optionss} />;
  return <BarChart width={1000} height={300} data={data} margin={{ top: 10, bottom: 10 }} barGap={'12%'}>
            <XAxis 
              dataKey="year"
              tickFormatter={(tickItem, index) => data[index].month + '-' + data[index].year }
             />
            <YAxis />
            <Tooltip />
            <Bar 
              dataKey="totalDocuments" 
              fill="#307cae" 
              name="Scanned docs"
              barSize={18} 
              radius={[5, 5, 5, 5]} 
             />
        </BarChart>;
};

export default TotalUsageChart;



