// import React from "react";
// import styled from "styled-components";

// function Error(props) {
//   return <Text {...props}>{props.text}</Text>;
// }

// export default Error;

// const Text = styled.span`
//   font-size: 14px;
//   color: red;
//   text-align: ${(props) => props.textAlign || "left"};
//   font-weight: 400;
//   margin-top: ${(props) => props.marginTop || 0}px;
// `;


import React from "react";
import styled from "styled-components";

// Define the props for the Error component
interface ErrorProps {
  text: string;
  textAlign?: "left" | "center" | "right";
  marginTop?: number;
  className?: string;
}

// Error component using ErrorProps
const Error: React.FC<ErrorProps> = (props) => {
  return <Text {...props} className={props.className}>{props.text}</Text>;
};

export default Error;

// Styled component with props for dynamic styles
const Text = styled.span<ErrorProps>`
  font-size: 14px;
  color: red;
  text-align: ${(props) => props.textAlign || "left"};
  font-weight: 400;
  margin-top: ${(props) => props.marginTop || 0}px;
`;
