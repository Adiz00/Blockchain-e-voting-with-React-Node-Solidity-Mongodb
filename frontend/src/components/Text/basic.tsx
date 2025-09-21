// import React from "react";
// import styled from "styled-components";

// import { Colors } from "../../config";

// function Basic(props) {
//   return <Text {...props} className={props.className}>{props.text}</Text>;
// }

// export default Basic;

// const Text = styled.span`
//   font-size: ${(props) => props.fontSize || 24}px;
//   color: ${(props) => props.color || Colors.TextColor};
//   font-family: ${(props) => props.fontFamily && props.fontFamily};
//   font-weight: ${(props) => props.fontWeight || 400};
//   text-align: ${(props) => props.textAlign || "center"};
// `;

import React from "react";
import styled from "styled-components";
import { Colors } from "../../config";

// Define the props for the Basic component
interface BasicProps {
  text?: string;
  className?: string;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  textAlign?: "left" | "center" | "right";
  style?: React.CSSProperties;
}

// Basic component using BasicProps
const Basic: React.FC<BasicProps> = (props) => {
  return <Text {...props} className={props.className}>{props.text}</Text>;
};

export default Basic;

// Styled component with props for dynamic styles
const Text = styled.span<BasicProps>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color };
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
`;
