// import React, { useRef, useEffect } from 'react'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
// import { FaCircle } from "react-icons/fa";
// import { Colors } from '../../config';
// import {Row,Col} from 'antd'




// const DoughnutChart = () => {
//     const chartRef = useRef(null);
//     console.log("current", chartRef?.current?.canvas)
//     ChartJS.register(ArcElement, Tooltip, Legend);

//     const labels = ['Location 1', 'Location 2', 'Location 3'];
//     const dataset =  [10, 20, 15];

//     const colorGenerator = () => {
//         const r = Math.floor(Math.random() * 254) + 1;
//         const g = Math.floor(Math.random() * 254) + 1;
//         const b = Math.floor(Math.random() * 254) + 1;
//         const a = Math.floor(Math.random() * 254) + 1;

//         return `rgba(${r}, ${g}, ${b}, ${a})`;
//     }

//     const color = ['#33DDFF','#307cae','#FFBF40', ];
//     for(let val of dataset){
//         color.push(colorGenerator())
//     }

//     console.log("color", color)
//     const data = {
//         labels: labels,
//         datasets: [
//             {
//                 data: dataset,
//                 backgroundColor: color && color,
//                 borderColor: color && color,
//                 borderWidth: 1,
//             },
//         ],

//     };

//     const options = {
//         plugins: {
//             legend: {
//                 display: false, // Set to false to hide legend
//             },
//         },
//         cutout: '80%' // inner space of a chart
//       };
      

//     const percentage = (actualval, totalval) => {
//         return (actualval / totalval) * 100;
//     }

//     console.log("datasets value", data)
//     console.log("datasets value", data?.labels)
//     const labelsLength = data?.labels;
//     console.log(labelsLength)


//     return (

//         <div className='flex align-items-center justify-start gap-4'>

//             <div className='w-full md:w-8/12 border-0 border-red-500'>
//                 <Doughnut data={data} options={options} style={{width:'100%'}} />
//             </div>

//             <div id="custom-legend-container" className="custom-legend-container mt-5 w-full md:w-2/6" >
//                 {
//                     labelsLength.map((item, key) => {
//                         return (
//                             <div key={key} >
//                                 <span><FaCircle className='inline mr-2' color={data?.datasets[0].backgroundColor[key]} /></span>
//                                 <span style={{ color: Colors.DarkGray }}>{item}</span>
//                                 <p className='font-semibold' style={{ color: Colors.Black }}>{Math.floor(percentage(data?.datasets[0].data[key], 100))} %</p>
//                             </div>
//                         )
//                     })
//                 }

//             </div>
//         </div>

//     )
// };





// export default DoughnutChart


import React, { useRef, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BubbleDataPoint, Point,  } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { FaCircle } from "react-icons/fa";
import { Colors } from '../../config';
import { Row, Col } from 'antd';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: React.FC = ({usersData}) => {
    // in Js
    // const chartRef = useRef<ChartJS>(null);
    // console.log("current", chartRef?.current?.canvas);

    // in tsx
    const chartRef = useRef<ChartJS<"doughnut", (number | Point | [number, number] | BubbleDataPoint | null)[], unknown>>(null);

    const labels = ['IOS users', 'Android users'];
    const dataset = [usersData?.ios, usersData?.android];

    const colorGenerator = () => {
        const r = Math.floor(Math.random() * 254) + 1;
        const g = Math.floor(Math.random() * 254) + 1;
        const b = Math.floor(Math.random() * 254) + 1;
        const a = Math.floor(Math.random() * 254) + 1;

        return `rgba(${r}, ${g}, ${b}, ${a})`;
    };  

    const color = ['#fa00ff', '#3a57e8',];
    for (let val of dataset) {
        color.push(colorGenerator());
    }

    // console.log("color", color);
    const data = {
        labels: labels,
        datasets: [
            {
                data: dataset,
                backgroundColor: color,
                borderColor: color,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false, // Set to false to hide legend
            },
        },
        cutout: '80%', // inner space of a chart
    };

    const percentage = (actualval: number, totalval: number) => {
        return (actualval / totalval) * 100;
    };

    // console.log("datasets value", data);
    // console.log("datasets value", data?.labels);
    const labelsLength = data?.labels;
    // console.log(labelsLength);

    return (
        <div className='flex align-items-center justify-start gap-4'>
            <div className='w-full md:w-8/12 border-0 border-red-500'>
                <Doughnut data={data} options={options} style={{ width: '100%' }} ref={chartRef} />

            </div>

            <div id="custom-legend-container" className="custom-legend-container mt-5 w-full md:w-2/6">
                {labelsLength.map((item, key) => (
                    <div key={key} className='flex m-auto mb-4'>
                        <div><FaCircle className='inline mr-2' color={data?.datasets[0].backgroundColor[key] as string} /></div>
                        <div>
                        <span style={{ color: Colors.DarkGray }}><p className='inline text-xs text-[#307cae]'>{item}</p></span>
                        <p className='font-semibold' style={{ color: Colors.Black }}>{Math.floor(percentage(data?.datasets[0].data[key] as number, 100))} </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoughnutChart;
