// import { Switch } from "antd";
// import React from "react";
// import Text from "../Text";


// const Basic = ({
//   defaultChecked,
//   checked,
//   disabled,
//   size,
//   onChange,
//   onClick,
//   containerStyle,
//   ...props
// }) => {
//   return (
//     <div style={containerStyle}>
//       {props.label && (
//         <Text.Basic text={props.label} textAlign={"left"} fontSize={"16px"} />
//       )}
//       <Switch
//         defaultChecked={defaultChecked}
//         onChange={onChange}
//         checked={checked}
//         onClick={onClick}
//         disabled={disabled}
//         size={size}
//         {...props}
//       />
//     </div>
//   );
// };

// export default Basic;


import React from "react";
import { Switch, SwitchProps } from "antd";
import Text from "../Text";

interface BasicProps extends Omit<SwitchProps, ''> {
  // defaultChecked?: boolean;
  // checked?: boolean;
  // disabled?: boolean;
  // onChange?: (checked: boolean, event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
  // onClick?: (checked: boolean, event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
  containerStyle?: React.CSSProperties;
  label?: string;

}

const Basic: React.FC<BasicProps> = ({
  defaultChecked,
  checked,
  disabled,
  size = "default",
  onChange,
  onClick,
  containerStyle,
  label,
  ...props
}) => {
  return (
    <div style={containerStyle}>
      {label && (
        <Text.Basic text={label} textAlign={"left"} fontSize={16} />
      )}
      <Switch
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChange}  // TypeScript will infer the correct type from SwitchProps
        onClick={onClick}  // Correctly type checked and event
        disabled={disabled}
        size={size}
        {...props}
      />
    </div>
  );
};

export default Basic;
