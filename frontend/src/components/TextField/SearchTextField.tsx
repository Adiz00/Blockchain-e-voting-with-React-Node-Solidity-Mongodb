// import { AutoComplete } from "antd";
// import React from "react";

// const SearchTextField = ({
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
//   ...props
// }) => {
//   return (
//     <div style={containerStyle}>
//       <AutoComplete
//         allowClear={allowClear}
//         value={value}
//         notFoundContent={notFoundContent}
//         options={options}
//         style={inputStyle}
//         onSelect={onSelect}
//         onSearch={onSearch}
//         onChange={onChange}
//         placeholder={placeholder}
//         size={size}
//         {...props}
//       />
//     </div>
//   );
// };

// export default SearchTextField;


import React from "react";
import { AutoComplete, AutoCompleteProps } from "antd";

interface SearchTextFieldProps extends AutoCompleteProps<any> {
  containerStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  // value?: string;
  // options?: Array<{ value: string; label: React.ReactNode }>;
  // onSelect?: (value: string, option: any) => void;
  // onSearch?: (value: string) => void;
  // onChange?: (value: string) => void;
  // placeholder?: string;
  // allowClear?: boolean;
  // notFoundContent?: React.ReactNode;
  // size?: "large" | "middle" | "small";
}

const SearchTextField: React.FC<SearchTextFieldProps> = ({
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
  ...props
}) => {
  return (
    <div style={containerStyle}>
      <AutoComplete
        allowClear={allowClear}
        value={value}
        notFoundContent={notFoundContent}
        options={options}
        style={inputStyle}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder={placeholder}
        size={size}
        {...props}
      />
    </div>
  );
};

export default SearchTextField;

