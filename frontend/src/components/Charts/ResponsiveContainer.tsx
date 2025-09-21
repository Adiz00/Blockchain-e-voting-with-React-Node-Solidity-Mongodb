// import React from "react";
// import { ResponsiveContainer } from 'recharts';
// import styled from "styled-components";

// const StyledContainer = styled(ResponsiveContainer)`
//     margin: ${props => props.style ? props.style.margin : null};
// `;


// const ResponsiveContainerWrapper = (props) => {
//     return (
//         <StyledContainer {...props} />
//     )
// }

// export default ResponsiveContainerWrapper;

import React from 'react';
import { ResponsiveContainer, ResponsiveContainerProps } from 'recharts';
import styled from 'styled-components';

// Define the interface for the props, extending ResponsiveContainerProps from recharts
interface ResponsiveContainerWrapperProps extends ResponsiveContainerProps {
  style?: React.CSSProperties; // Optionally include style with CSSProperties
}

// Define the styled component
const StyledContainer = styled(ResponsiveContainer)<ResponsiveContainerWrapperProps>`
  margin: ${(props) => props.style?.margin || '0'};
`;

// Define the functional component with typed props
const ResponsiveContainerWrapper: React.FC<ResponsiveContainerWrapperProps> = (props) => {
  return <StyledContainer {...props} />;
};

export default ResponsiveContainerWrapper;
