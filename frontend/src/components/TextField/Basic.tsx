// import { Input } from "antd";
// import React from "react";
// import styled, { css } from "styled-components";

// import { Colors } from "../../config";
// import Text from "../Text";

// const StyledInput = styled(Input).attrs({ className: "inputField" })`
//   ${(props) =>
//     !props.password
//       ? css`
// &[type], input {
//     background-color: ${props.bgColor ? props.bgColor : Colors.LightGray};
//     color: ${props.color ? props.color : "gray"};
//     border: none;
//     //grey 66;
//     border-radius: 10;
// }
// & .ant-input-disabled{
//   color:black;
// }
// &[type]:hover, input:hover {
//   text-decoration:none
//   border: none;
 
//  border-color: grey !important;
// }
// &[type]:focus, input:focus {
//   border: none;
 
//   border-color: grey !important;
//   /* box-shadow: 0 0 0 2px red66; */
//   box-shadow: none;
// }
// /* * {
//   color: grey;
// } */
// `
//       : css`
//           & {
//             background-color: ${Colors.LightWhite};
//             border: none;
//             border-bottom: 1px solid #f5f5f5;
//             border-radius: 10;
//             align-items: center;
//           }
//           &:before {
//             width: 0;
//             visibility: hidden;
//             content: "\a0";
//             line-height: 0;
//           }
//           input {
//             color: grey;
//           }
//           &:hover {
//             border: none;
//             // border-bottom: 1px solid grey;
//             // border-color: grey !important;
//           }
//           &:focus,
//           &.ant-input-affix-wrapper-focused {
//             border: none;
//             // border-bottom: 1px solid grey;
//             // border-color: grey !important;
//             /* box-shadow: 0 0 0 2px 66; */
//             box-shadow: none;
//           }
//           * {
//             color: grey;
//           }
//         `}/* &.lightBg {
//     background-color: rgba(255, 255, 255, 0.5);
// } */
// `;

// const Basic = (props) => {
//   return props.password ? (
//     <>
//       {props.label && (
//         <Text.Basic text={props.label} textAlign={"left"} fontSize={"16px"} />
//       )}
//       <StyledInput as={Input.Password} onChange={props.onChange} {...props}></StyledInput>
//       {props.errorText && <Text.Error text={props.errorText} />}
//     </>
//   ) : (
//     <>
//       {props.label && (
//         <Text.Basic text={props.label} textAlign={"left"} fontSize={"16px"} />
//       )}
//       <StyledInput {...props}></StyledInput>
//       {props.errorText && <Text.Error text={props.errorText} />}
//     </>
//   );
// };

// export default Basic;


import React from "react";
import { Input } from "antd";
import styled, { css } from "styled-components";

// import { Colors } from "../../config";
import Text from "../Text";

// Define the props for the Basic component
interface BasicProps {
  label?: string;
  errorText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password?: boolean;
  bgColor?: string;
  color?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: "large" | "middle" | "small";
  className?: string;
  type?: string;
  defaultValue?: string;
  name?: string;
  id?: string;
  [key: string]: any; // For any other props
  ref?: any;
}

// Define a styled Input component with conditional styles based on the props
const StyledInput = styled(Input).attrs({ className: "inputField" })<{
  password?: boolean;
  bgColor?: string;
  color?: string;
}>
`
  ${(props) =>
    !props.password
      ? css`
          &[type], input {
            background-color: ${props.bgColor ? props.bgColor : '#ebedf0'};
            background-color: ${props.bgColor ? props.bgColor : '#ebedf0'};
            color: ${props.color ? props.color : "gray"};
            border: '2px solid red';
            border-radius: '50%';
            border: '2px solid red';
            border-radius: '50%';
          }
          & .ant-input-disabled {
            color: black;
          }
          &[type]:hover, input:hover {
            text-decoration: none;
            border: none;
            border-color: grey !important;
          }
          &[type]:focus, input:focus {
            border: none;
            border-color: grey !important;
            box-shadow: none;
          }
        `
      : css`
          & {
            background-color: ${Colors.LightWhite};
            border: none;
            border-bottom: 1px solid #f5f5f5;
            border-radius: 10px;
            align-items: center;
          }
          &:before {
            width: 0;
            visibility: hidden;
            content: "\a0";
            line-height: 0;
          }
          input {
            color: grey;
          }
          &:hover {
            border: none;
          }
          &:focus,
          &.ant-input-affix-wrapper-focused {
            border: none;
            box-shadow: none;
          }
          * {
            color: grey;
          }
        `
      }
`
;

// Basic component using BasicProps
const Basic: React.FC<BasicProps> = (props) => {
  return props.password ? (
    <>
      {props.label && (
        <Text.Basic text={props.label} textAlign={"left"} fontSize={16} />
      )}
      <StyledInput
        as={Input.Password}
        onChange={props.onChange}
        {...props}
      />
      {props.errorText && <Text.Error text={props.errorText} />}
    </>
  ) : (
    <>
      {props.label && (
        <Text.Basic text={props.label} className="label" textAlign={"left"} fontSize={16} />
      )}
      <StyledInput {...props} />
      {props.errorText && <Text.Error text={props.errorText} />}
    </>
  );
};

export default Basic;
