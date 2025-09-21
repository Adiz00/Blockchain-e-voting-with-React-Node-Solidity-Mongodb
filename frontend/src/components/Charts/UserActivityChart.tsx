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
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';


// Define the types for props
// interface UserActivityChartProps {
//   graphData: { date?: string; month?: string ; year?: string; count: number }[]; // Data structure of graphData
//   selectedGraph: string;// 'weekly' | 'monthly' | 'yearly'; // Type for selectedGraph
// }

// interface UserComparisonChartProps {
//   data?: ChartData<'bar'>;
//   options?: ChartOptions<'bar'>;
//   point?: any;
// }

// Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// Define month names
const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

// Define the UserActivityChart component
// const UserActivityChart: React.FC<UserActivityChartProps> = ({ graphData, selectedGraph }) => {
// const UserActivityChart: React.FC<UserComparisonChartProps> = ({ data, options, }) => {
const UserActivityChart: React.FC<any> = ({ data, options, }) => {

  // Function to format the month string
  const formatMonth = (param: any) => {
    // console.log("format param", param);

    // if (monthString) {
    // const [year, month] = monthString.split("-");
    // return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
    // }
    return 'name';
  };

  // Define chart options
  // const options = {
  //   plugins: {
  //     title: {
  //       display: false,
  //       text: 'Chart.js Bar Chart - Stacked',
  //     },
  //   },
  //   responsive: true,
  //   scales: {
  //     x: {
  //       stacked: true,
  //     },
  //     y: {
  //       stacked: true,
  //     },
  //   },
  //   backgroundColor: 'white',
  // };

  // Define labels and dataValues based on selectedGraph
  let labels: string[] = [];
  let dataValues: number[] = [];

  // if (selectedGraph === "weekly") {
  //   labels = graphData?.map(item => item.date || '') || [];
  //   dataValues = graphData?.map(item => item.count) || [];
  // } else if (selectedGraph === "monthly") {
  //   labels = graphData?.map(item => formatMonth(item?.month || '')) || [];
  //   dataValues = graphData?.map(item => item.count) || [];
  // } else if (selectedGraph === "yearly") {
  //   labels = graphData?.map(item => item.year || '') || [];
  //   dataValues = graphData?.map(item => item.count) || [];
  // }

  // Define chart data
  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'User Activity',
  //       data: dataValues,
  //       backgroundColor: 'green',
  //       barThickness: 10, // Adjust the bar width here
  //       borderRadius: 10, // Adjust the border radius here
  //     },
  //   ],
  // };

  // const dataa: ChartData<'bar'> = {
  //   labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  //   datasets: [
  //     {
  //       label: 'iOS Users',
  //       data: [450, 400, 300, 500, 150, 400, 380],
  //       backgroundColor: '#0000FF',
  //       borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 10, bottomRight: 10 },
  //       barThickness: 13,
  //       barPercentage: 0.5,
  //       pointStyle: 'cross', // example of different pointStyle

  //     },
  //     {
  //       label: 'Android Users',
  //       data: [200, 300, 250, 350, 200, 270, 300],
  //       backgroundColor: '#16dbcc',
  //       borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 10, bottomRight: 10 },
  //       barThickness: 13, 
  //       barPercentage: 0.5,
  //       pointStyle: 'cross', // example of different pointStyle


  //     },
  //   ],
  // };

  // interface CustomChartOptions extends ChartOptions<'bar'> {
  //   onRender?: (chart: Chart) => void;
  // }

  // const optionss: CustomChartOptions= {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top' as const,
  //     },
  //     title: {
  //       display: false,
  //       text: 'Apple and Google Users',
  //     },
  //   },
  //   scales: {
  //     x: {
  //       stacked: false,
  //      // categoryPercentage: 0.8, // Adjust this to control the space between bars within a category
  //       //barPercentage: 0.9, // Adjust this to control the space between the groups of bars
  //     },
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  //   backgroundColor: 'red',
  //   layout: {
  //     padding: {
  //       left: 15, // Adjust padding values for desired gap size
  //       right: 15,
  //       top: 10,
  //       bottom: 10,
  //     },
  //   },
  //   onRender: (chart) => {
  //     console.log('chart',chart); // Check the padding values in the console
  //   },

  // };

  // const dataa = [
  //   {
  //     name: '2022-4',
  //     android: 100,
  //     ios: 300,
  //   },
  //   {
  //     name: '2022-12',
  //     android: 150,
  //     ios: 350,
  //   },
  //   {
  //     name: '2023-4',
  //     android: 200,
  //     ios: 400,
  //   },
  //   {
  //     name: '2023-12',
  //     android: 250,
  //     ios: 450,
  //   },
  //   {
  //     name: '2024-4',
  //     android: 200,
  //     ios: 500,
  //   },
  //   {
  //     name: '2024-10',
  //     android: 200,
  //     ios: 400,
  //   },
  //   {
  //     name: '2024-12',
  //     android: 100,
  //     ios: 300,
  //   },
  //   // {
  //   //   name: '2025-4',
  //   //   android: 200,
  //   //   ios: 400,
  //   // },
  //   // {
  //   //   name: '2025-5',
  //   //   android: 250,
  //   //   ios: 450,
  //   // },
  //   // {
  //   //   name: '2025-6',
  //   //   android: 200,
  //   //   ios: 500,
  //   // },
  //   // {
  //   //   name: '2025-7',
  //   //   android: 200,
  //   //   ios: 400,
  //   // },
  //   // {
  //   //   name: '2025-8',
  //   //   android: 100,
  //   //   ios: 300,
  //   // },
  // ];
  // console.log("data in user activity chart", data);
  // return <Bar data={data} options={options} />;
  // return <Bar data={dataa} options={optionss} />;
  // return <BarChart width={900} height={300} data={data.length !== 0 && data } className='chart-container' margin={{ top: 10, bottom: 10 }} barGap={'6%'}>
  //           <XAxis 
  //             dataKey="year" 
  //             tickFormatter={(tickItem, index) => data[index].month + '-' + data[index].year }
  //           />
  //           <YAxis 
  //             // tickFormatter={(tick) => Math.round(tick)}

  //           />
  //           <Tooltip />
  //           <Bar 
  //             dataKey="iosUsers" 
  //             fill="#1814f3" 
  //             name="iOS Users"
  //             barSize={15} 
  //             radius={[10, 10, 10, 10]} 
  //            />
  //           <Bar 
  //             dataKey="androidUsers" 
  //             fill="#16dbcc" 
  //             name="Android Users"
  //             barSize={15} 
  //             radius={[10, 10, 10, 10]} 
  //             />
  //       </BarChart>;
  
  let maxValue = data.reduce((max, entry) => {
    return Math.max(max, entry.androidUsers, entry.iosUsers);
  }, 0);

  let processedData = data?.map((entry) => {
    let updatedEntry = { ...entry };
    if (updatedEntry.androidUsers === 0) {
      updatedEntry.androidUsers = maxValue;
      updatedEntry.androidUsersModified = true;
    }
    else {
      updatedEntry.androidUsersModified = false;
    }
    if (updatedEntry.iosUsers === 0) {
      updatedEntry.iosUsers = maxValue;
      updatedEntry.iosUsersModified = true;
    }
    else {
      updatedEntry.iosUsersModified = false;
    }

    return updatedEntry;
  });
  // console.log("data", data);
  // console.log("processed data", processedData);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      // console.log("active, payload, label ", payload);
      const androidData = payload.find((item) => item.dataKey === 'androidUsers');
      const iosData = payload.find((item) => item.dataKey === 'iosUsers');

      // Modify values if they are marked as modified
      const androidValue =
        androidData?.payload?.androidUsersModified ? 0 : androidData?.value;
      const iosValue =
        iosData?.payload?.iosUsersModified ? 0 : iosData?.value;

      return (
        <div className="custom-tooltip" style={{ background: '#fff', padding: '10px', border: '1px solid #ccc' }}>
          <p>{`Date: ${androidData?.payload?.month + '-' + androidData?.payload?.year}`}</p>
          <p>{`Android Users: ${androidValue}`}</p>
          <p>{`iOS Users: ${iosValue}`}</p>
        </div>
      );
    }

    return null;
  };

  return <BarChart
    width={900}
    height={300}
    data={processedData.length !== 0 && processedData}
    className='chart-container'
    margin={{ top: 10, bottom: 10 }}
    barGap={'6%'}
  >
    <XAxis
      dataKey="year"
      tickFormatter={(tickItem, index) => processedData[index].month + '-' + processedData[index].year}
    />
    <YAxis
      // dataKey={"users"}
      // tickFormatter={(tick: any) => Math.round(tick)}
      allowDecimals={false}

    />
    {/* <Tooltip /> */}
    <Tooltip content={<CustomTooltip />} />

    <Bar
      dataKey="androidUsers"
      name="Android Users"
      barSize={15}
      radius={[10, 10, 10, 10]}
    >
      {processedData.map((entry, index) => (
        <Cell
          key={`cell-android-${index}`}
          fill={entry.androidUsersModified == true ? '#eee' : '#16dbcc'}
        />
      ))}
    </Bar>
    <Bar
      dataKey="iosUsers"
      name="iOS Users"
      barSize={15}
      radius={[10, 10, 10, 10]}
    >
      {processedData.map((entry, index) => (
        <Cell
          key={`cell-ios-${index}`}
          fill={entry.iosUsersModified == true ? '#eee' : '#1814f3'}
        />
      ))}
    </Bar>

  </BarChart>
};

export default UserActivityChart;



