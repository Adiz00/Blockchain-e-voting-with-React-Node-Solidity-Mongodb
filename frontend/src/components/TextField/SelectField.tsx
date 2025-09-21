// import { Select } from "antd";
// import React from "react";

// const SelectField = ({
//   containerStyle,
//   value,
//   options,
//   inputStyle,
//   onSelect,
//   onSearch,
//   onChange,
//   placeholder,
//   allowClear = true,
//   notFoundContent = true,
//   size,
//   defaultValue,
//   mode,
//   ...props
// }) => {
//   return (
//     <div style={containerStyle}>
//       <Select
//         allowClear={allowClear} 
//         value={value}
//         notFoundContent={notFoundContent}
//         options={options}
//         style={inputStyle}
//         onSelect={onSelect}
//         onChange={onChange}
//         defaultValue={defaultValue}
//         placeholder={placeholder}
//         size={size}
//         mode={mode}
//         {...props}
//       />
//     </div>
//   );
// };

// export default SelectField;


import React from "react";
import { Select, SelectProps } from "antd";
import { SelectValue } from "antd/es/select";

interface SelectFieldProps extends Omit<SelectProps<any>, ''> {
  containerStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  // value?: SelectValue;
  // options?: Array<{ value: string | number; label: React.ReactNode }>;
  // onSelect?: (value: SelectValue, option: any) => void;
  // onSearch?: (value: string) => void;
  // onChange?: (value: SelectValue) => void;
  // placeholder?: string;
  // allowClear?: boolean;
  // notFoundContent?: React.ReactNode;
  // size?: 'large' | 'middle' | 'small';
  // defaultValue?: SelectValue;
  // mode?: 'multiple' | 'tags' | 'default' | 'single';
}

const SelectField: React.FC<SelectFieldProps> = ({
  containerStyle,
  value,
  options,
  inputStyle,
  onSelect,
  onSearch,
  onChange,
  placeholder,
  allowClear = true,
  notFoundContent = true,
  size,
  defaultValue,
  mode,
  ...props
}) => {
  return (
    <div style={containerStyle}>
      <Select
        allowClear={allowClear}
        value={value}
        notFoundContent={notFoundContent}
        options={options}
        style={inputStyle}
        onSelect={onSelect}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
        size={size}
        mode={mode}
        onSearch={onSearch}
        {...props}
      />
    </div>
  );
};

export default SelectField;
