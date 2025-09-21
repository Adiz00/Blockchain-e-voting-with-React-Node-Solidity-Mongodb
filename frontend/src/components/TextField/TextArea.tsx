// import React from "react";
// import { Input } from "antd";

// const { TextArea } = Input;

// function Textarea({
//   rows,
//   handleChange,
//   placeholder,
//   value,
//   style,
//   className,
//   ...props
// }) {
//   return (
//     <TextArea
//       rows={rows}
//       onChange={handleChange}
//       placeholder={placeholder}
//       value={value}
//       style={style}
//       className={className}
//       {...props}
//     />
//   );
// }

// export default Textarea;

import React from "react";
import { Input, InputProps } from "antd";
import { TextAreaProps } from "antd/es/input";

const { TextArea } = Input;

interface TextareaProps extends Omit<TextAreaProps, ''> {
  rows?: number;
  handleChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  // placeholder?: string;
  // value?: string;
  // style?: React.CSSProperties;
  // className?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  rows,
  handleChange,
  placeholder,
  value,
  style,
  className,
  ...props
}) => {
  return (
    <TextArea
      rows={rows}
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
      style={style}
      className={className}
      {...props}
    />
  );
};

export default Textarea;
