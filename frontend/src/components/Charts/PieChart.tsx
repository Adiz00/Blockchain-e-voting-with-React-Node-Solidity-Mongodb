// import React from "react";
// import propTypes from "prop-types";
// import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

// // import { AccountingFormat } from "../../configurations/Config";
// // import { camelCaseToTitle } from "../../utils";

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   index,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (percent * 100).toFixed(0) === "0" ? null : (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };
// // For Testing Chart: Pass data array into data as a prop, put value as dataKey, put name as nameKey
// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];
// class renderPieChart extends React.PureComponent {
//   // renderLegend = (props) => {
//   //   const { payload } = props;

//   //   return (
//   //     <ul>
//   //       {
//   //         payload.map((entry, index) => (
//   //           <li key={`item-${index}`} style={{
//   //             margin: '0 0 0 10px'
//   //             }}>{entry.value}</li>
//   //         ))
//   //       }
//   //     </ul>
//   //   );
//   // }
//   renderLegend = (props) => {
//     const { payload } = props;
//     const COLORS = ["#6133FF", "#4BE5C0", "#F8604E", "#FF8042"];
//     console.log("pppp", props.payload);
//     const ke = ["Steady Start Swap", "Steady Start Steal", "Free for all"];
//     const updatedPayload = payload.map((item, index) => {
//       return { ...item, value: ke[index] };
//     });

//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           // border: "1px solid black",
//         }}
//       >
//         {updatedPayload
//           .filter((item) => item.dataKey !== "name")

//           // item => console.log(item.dataKey,"items"))

//           .map((entry, index) => (
//             <>
//               <div
//                 style={{
//                   borderRadius: 10,
//                   width: 10,
//                   height: 10,
//                   backgroundColor:
//                     entry.value === "UsersUpgrades" ? "#4BE5C0" : COLORS[index],
//                   margin: 10,
//                 }}
//               ></div>
//               <p style={{ fontSize: 10 }}>{entry.value}</p>
//             </>
//             // key={`item-${index}`}>{entry.value}
//           ))}
//       </div>
//     );
//   };

//   render() {
//     var obj, numId;
//     if (this.props.data[0]) obj = Object.keys(this.props.data[0]);

//     for (let i = 0; i < this.props.data.length; i++) {
//       numId = i;
//     }
//     const COLORS = ["#F8604E", "#4BE5C0", "#6133FF", "#FF8042"];
//     console.log(this.props.data,'DATA_KEY')

//     return (
//       <PieChart
//         width={this.props.width}
//         height={this.props.height}
//         style={{ margin: "auto" }}
//       >
//         <Pie
//           data={this.props.data}
//           dataKey={obj[1]}
//           nameKey={'name'}
//           outerRadius={this.props.size}
//           legendType={this.props.legendType}
//           Legend
//           labelLine={false}
//           label={renderCustomizedLabel}
//         >
//           {obj && !this.props.loading
//             ? this.props.data.map((val, index) => (
//                 <Cell
//                   key={`cell-${obj[7]}`}
//                   fill={COLORS[index % COLORS.length]}
//                 />
//               ))
//             : null}
//         </Pie>
//         {/* {this.props.isLegend ? (
//           <Legend
//           //content={this.renderLegend}
//           />
//         ) : null} */}
//         {this.props.isTooltip ? (
//           <Tooltip
//             //position={{ x: 150, y: 300 }}
//             // wrapperStyle={{
//             //   borderRadius: 10,
//             //   border: "none",
//             //   color: "white"
//             // }}
//             // itemStyle={{
//             //   color: "white"
//             // }}
//             // contentStyle={{
//             //   borderRadius: 5,
//             //   border: "none",
//             //   backgroundColor: "#0f869e",
//             // }}
//             content={({ active, payload, label }) => {
//               if (active) {
//                 console.log("TOOLTIP", payload);
//                 return (
//                   <div
//                     className="custom-tooltip"
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "space-between",
//                       flexWrap: "nowrap",
//                       borderRadius: 5,
//                       border: "none",
//                       padding: 10,
//                       backgroundColor: "#0f869e",
//                       color: "white",
//                       minWidth: "15rem",
//                       maxWidth: "30rem",
//                       // height: 80,
//                       // transform: "translate(-50%, -20px)"
//                     }}
//                   >
//                     <div style={{ marginRight: 20 }}>
//                       {!this.props.account &&
//                       payload[0].payload.account_name ? (
//                         <p
//                           className={`label ${
//                             ((!this.props.customer &&
//                               payload[0].payload.customer_name) ||
//                               (!this.props.job &&
//                                 payload[0].payload.job_name)) &&
//                             !this.props.account &&
//                             payload[0].payload.account_name
//                               ? "mr-b-sm"
//                               : ""
//                           }`}
//                         >{`${payload[0].payload.account_name}`}</p>
//                       ) : null}
//                       {/* {this.props.customer || this.props.job && this.props.account ? <br /> : null} */}
//                       {!this.props.customer &&
//                       payload[0].payload.customer_name ? (
//                         <p
//                           className={`label ${
//                             !this.props.job &&
//                             payload[0].payload.job_name &&
//                             !this.props.customer &&
//                             payload[0].payload.customer_name
//                               ? "mr-b-sm"
//                               : ""
//                           }`}
//                         >{`${payload[0].payload.customer_name}`}</p>
//                       ) : null}
//                       {/* {this.props.job && this.props.customer ? <br /> : null} */}
//                       {!this.props.job && payload[0].payload.job_name ? (
//                         <p className="label">{`${payload[0].payload.job_name}`}</p>
//                       ) : null}
//                     </div>
//                     {/* <p className="intro">{getIntroOfPage(label)}</p> */}
//                     <p className="desc" style={{ wordBreak: "normal" }}>
//                       {`${payload[0].payload.name} ${payload[0].value}`}
//                     </p>
//                   </div>
//                 );
//               }
//             }}
//             //viewBox={{ x: 0, y: 0, width: 400, height: 1000 }}
//           />
//         ) : null}
//         <label position="center" />
//         <Legend
//           verticalAlign="bottom"
//           height={36}
//           content={this.renderLegend}
//         />
//       </PieChart>
//     );
//   }
// }

// renderPieChart.defaultProps = {
//   width: 300,
//   height: 300,
//   margin: { top: 0, right: 0, left: 0, bottom: 0 },
//   isTooltip: false,
//   isLegend: false,
//   size: null,
//   label: false,
//   legendType: "circle",
// };

// renderPieChart.propTypes = {
//   data: propTypes.array.isRequired,
//   pieColor: propTypes.array.isRequired,
// };

// export default renderPieChart;


import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const RADIAN = Math.PI / 180;

interface RenderCustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: RenderCustomizedLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (percent * 100).toFixed(0) === '0' ? null : (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

interface PieChartData {
  name: string;
  value: number;
}

interface RenderPieChartProps {
  data: PieChartData[];
  width: number;
  height: number;
  size?: number;
  legendType?: 'circle' | 'square' | 'line';
  isTooltip?: boolean;
  isLegend?: boolean;
  loading?: boolean;
  account?: boolean;
  customer?: boolean;
  job?: boolean;
  pieColor?: string[];
  legendPosition?: 'top' | 'bottom' | 'middle'; 
  margin?: { top: number; right: number; left: number; bottom: number };
}

class RenderPieChart extends React.PureComponent<RenderPieChartProps> {
  static defaultProps = {
    width: 300,
    height: 300,
    margin: { top: 0, right: 0, left: 0, bottom: 0 },
    isTooltip: false,
    isLegend: false,
    size: null,
    legendType: 'circle',
  };

  static propTypes = {
    data: PropTypes.array.isRequired,
    pieColor: PropTypes.array.isRequired,
  };

  renderLegend = (props: any) => {
    const { payload } = props;
    const COLORS = ['#6133FF', '#4BE5C0', '#F8604E', '#FF8042'];
    const ke = ['Steady Start Swap', 'Steady Start Steal', 'Free for all'];
    const updatedPayload = payload.map((item: any, index: number) => {
      return { ...item, value: ke[index] };
    });
  
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {updatedPayload
          .filter((item: any) => item.dataKey !== 'name')
          .map((entry: any, index: number) => (
            <React.Fragment key={`item-${index}`}>
              <div
                style={{
                  borderRadius: 10,
                  width: 10,
                  height: 10,
                  backgroundColor:
                    entry.value === 'UsersUpgrades' ? '#4BE5C0' : COLORS[index],
                  margin: 10,
                }}
              />
              <p style={{ fontSize: 10 }}>{entry.value}</p>
            </React.Fragment>
          ))}
      </div>
    );
  };
  

  render() {
    const { data, width, height, size, legendType, isTooltip, isLegend, loading, account, customer, job, pieColor, legendPosition, margin } = this.props;

    let obj: string[] = [];
    if (data[0]) obj = Object.keys(data[0]);

    const COLORS = pieColor || ['#F8604E', '#4BE5C0', '#6133FF', '#FF8042'];

    return (
        <PieChart width={width} height={height} style={{ margin: 'auto' }} margin={margin}>
        <Pie
          data={data}
          dataKey={obj[1]}
          nameKey={'name'}
          outerRadius={size}
          legendType={legendType}
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((val, index) => (
            <Cell
              key={`cell-${index}`}
              fill={pieColor ? pieColor[index % pieColor.length] : COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        {isTooltip ? (
          <Tooltip
            content={({ active, payload, label }: any) => {
              if (active) {
                return (
                  <div
                    className="custom-tooltip"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'nowrap',
                      borderRadius: 5,
                      border: 'none',
                      padding: 10,
                      backgroundColor: '#0f869e',
                      color: 'white',
                      minWidth: '15rem',
                      maxWidth: '30rem',
                    }}
                  >
                    <div style={{ marginRight: 20 }}>
                      {!account && payload[0].payload.account_name ? (
                        <p
                          className={`label ${
                            (!customer && payload[0].payload.customer_name) ||
                            (!job && payload[0].payload.job_name) ||
                            !account
                              ? 'mr-b-sm'
                              : ''
                          }`}
                        >
                          {`${payload[0].payload.account_name}`}
                        </p>
                      ) : null}
                      {!customer && payload[0].payload.customer_name ? (
                        <p
                          className={`label ${
                            !job && payload[0].payload.job_name &&
                            !customer &&
                            payload[0].payload.customer_name
                              ? 'mr-b-sm'
                              : ''
                          }`}
                        >
                          {`${payload[0].payload.customer_name}`}
                        </p>
                      ) : null}
                      {!job && payload[0].payload.job_name ? (
                        <p className="label">{`${payload[0].payload.job_name}`}</p>
                      ) : null}
                    </div>
                    <p className="desc" style={{ wordBreak: 'normal' }}>
                      {`${payload[0].payload.name} ${payload[0].value}`}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
        ) : null}
        {isLegend ? (
          <Legend
            verticalAlign={legendPosition || 'bottom'} // Ensure this value is one of 'top', 'bottom', or 'middle'
            height={36}
            content={this.renderLegend}
          />
        ) : null}
      </PieChart>
      
    );
  }
}

export default RenderPieChart;
