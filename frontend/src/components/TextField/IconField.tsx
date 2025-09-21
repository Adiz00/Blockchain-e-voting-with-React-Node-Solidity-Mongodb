// import { Input } from "antd";
// import React from "react";

// const Basic = ({
//   placeholder,
//   bordered,
//   disabled,
//   maxLength,
//   showCount,
//   prefix,
//   size,
//   suffix,
//   onChange,
//   onClick,
//   type,
//   value,
//   containerStyle,
//   fieldStyle,
//   ...props
// }) => (
//   <div style={containerStyle}>
//     <Input
//       placeholder={placeholder}
//       bordered={bordered}
//       disabled={disabled}
//       maxLength={maxLength}
//       showCount={showCount}
//       prefix={prefix}
//       size={size}
//       suffix={suffix}
//       onChange={onChange}
//       onClick={onClick}
//       type={type}
//       value={value}
//       style={fieldStyle}
//       {...props}
//     />
//   </div>
// );

// export default Basic;


import React from "react";
import { Input, InputProps } from "antd";

interface BasicProps extends InputProps {
  // placeholder?: string;
  // bordered?: boolean;
  // disabled?: boolean;
  // maxLength?: number;
  // showCount?: boolean | { formatter: (count: number, maxLength: number) => React.ReactNode };
  // prefix?: React.ReactNode;
  // size?: "large" | "middle" | "small";
  // suffix?: React.ReactNode;
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  // type?: string;
  // value?: string;
  // containerStyle?: React.CSSProperties;
  // fieldStyle?: React.CSSProperties;
  [key: string]: any; // For any other props
}

const Basic: React.FC<BasicProps> = ({
  placeholder,
  bordered,
  disabled,
  maxLength,
  showCount,
  prefix,
  size,
  suffix,
  onChange,
  onClick,
  type,
  value,
  containerStyle,
  fieldStyle,
  ...props
}) => (
  <div style={containerStyle}>
    <Input
      placeholder={placeholder}
      bordered={bordered}
      disabled={disabled}
      maxLength={maxLength}
      showCount={showCount}
      prefix={prefix}
      size={size}
      suffix={suffix}
      onChange={onChange}
      onClick={onClick}
      type={type}
      value={value}
      style={fieldStyle}
      {...props}
    />
  </div>
);

export default Basic;
