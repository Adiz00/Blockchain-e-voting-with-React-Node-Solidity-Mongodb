//   import { Radio } from "antd";
// import React from "react";

// const RadioField = ({
//   options, //for Radio group
//   onChange,
//   value,
//   checked,
//   defaultValue, //for Radio group
//   disabled,
//   label,
//   optionType = "default", //for Radio group
//   containerStyle,
//   style,
//   size, //for Radio group
//   ...props
// }) => {
//   return (
//     <div style={containerStyle}>
//       {options?.length > 0 ? (
//         <Radio.Group
//           onChange={onChange}
//           optionType={optionType}
//           defaultValue={defaultValue}
//           //   value={value}
//           options={options}
//           disabled={disabled}
//           style={style}
//           size={size}
//           {...props}
//         />
//       ) : (
//         <Radio
//           onChange={onChange}
//           //   value={value}
//           // checked={checked}
//           disabled={disabled}
//           style={style}
//           {...props}
//         >
//           {label}
//         </Radio>
//       )}
//     </div>
//   );
// };

// export default RadioField;


import { Radio, RadioGroupProps, RadioProps } from "antd";
import React from "react";

interface RadioFieldProps {
  options?: Array<{ label: string; value: string | number }>;
  onChange?: RadioGroupProps['onChange'] | RadioProps['onChange'];
  value?: RadioProps['value'];
  checked?: boolean;
  defaultValue?: RadioGroupProps['defaultValue'];
  disabled?: boolean;
  label?: string;
  optionType?: "default" | "button"; // Ant Design's optionType can be "default" or "button"
  containerStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  size?: RadioGroupProps['size'];
}

const RadioField: React.FC<RadioFieldProps> = ({
  options,
  onChange,
  value,
  checked,
  defaultValue,
  disabled,
  label,
  optionType = "default",
  containerStyle,
  style,
  size,
  ...props
}) => {
  return (
    <div style={containerStyle}>
      {options && options.length > 0 ? (
        <Radio.Group
          onChange={onChange as RadioGroupProps['onChange']}
          optionType={optionType}
          defaultValue={defaultValue}
          options={options}
          disabled={disabled}
          style={style}
          size={size}
          {...props}
        />
      ) : (
        <Radio
          onChange={onChange as RadioProps['onChange']}
          value={value}
          checked={checked}
          disabled={disabled}
          style={style}
          {...props}
        >
          {label}
        </Radio>
      )}
    </div>
  );
};

export default RadioField;
