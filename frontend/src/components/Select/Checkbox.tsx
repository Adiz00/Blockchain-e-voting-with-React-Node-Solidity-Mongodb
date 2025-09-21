// import { Checkbox } from "antd";
// import React from "react";

// const CheckBoxField = ({
//   options, //for checkbox group
//   onChange,
//   value,
//   checked,
//   defaultValue, //for checkbox group
//   disabled,
//   label,
//   containerStyle,
//   style,
//   ...props
// }) => {
//   return (
//     <div style={containerStyle}>
//       {options?.length > 0 ? (
//         <Checkbox.Group
//           onChange={onChange}
//           defaultValue={defaultValue}
//           //   value={value}
//           options={options}
//           disabled={disabled}
//           style={style}
//           {...props}
//         />
//       ) : (
//         <Checkbox
//           onChange={onChange}
//           //   value={value}
//           // checked={checked}
//           disabled={disabled}
//           style={style}
//           {...props}
//         >
//           {label}
//         </Checkbox>
//       )}
//     </div>
//   );
// };

// export default CheckBoxField;


import { Checkbox, CheckboxProps,  } from "antd";
import { CheckboxGroupProps } from "antd/es/checkbox";
import React from "react";

interface CheckBoxFieldProps {
  options?: Array<{ label: string; value: string | number }>;
  onChange?:  CheckboxProps['onChange']  | CheckboxGroupProps['onChange']; 
  value?: CheckboxProps['value'];
  checked?: boolean;
  // defaultValue?: CheckboxGroupProps['defaultValue'];
  defaultValue?: (string | number)[];
  disabled?: boolean;
  label?: string;
  containerStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}

const CheckBoxField: React.FC<CheckBoxFieldProps> = ({
  options,
  onChange,
  value,
  checked,
  defaultValue,
  disabled,
  label,
  containerStyle,
  style,
  ...props
}) => {
  return (
    <div style={containerStyle}>
      {options && options?.length > 0 ? (
        <Checkbox.Group
          onChange={onChange as CheckboxGroupProps['onChange']}
          defaultValue={defaultValue}
          options={options}
          disabled={disabled}
          style={style}
          {...props}
        />
      ) : (
        <Checkbox
          onChange={onChange as CheckboxProps['onChange']}
          value={value}
          checked={checked}
          disabled={disabled}
          style={style}
          {...props}
        >
          {label}
        </Checkbox>
      )}
    </div>
  );
};

export default CheckBoxField;
