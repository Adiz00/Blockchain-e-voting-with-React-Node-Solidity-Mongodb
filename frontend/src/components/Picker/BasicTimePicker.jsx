import { TimePicker } from "antd";
import React from "react";

const BasicTimePicker = ({
  value,
  defaultValue,
  onChange,
  allowClear = true,
  containerStyle,
  use12Hours = false,
  showNow = false,
  placeholder,
  format,
  size,
  ...props
}) => {
  return (
    <div style={containerStyle}>
      <TimePicker
        onChange={onChange}
        allowClear={allowClear}
        value={value}
        defaultOpenValue={defaultValue}
        use12Hours={use12Hours}
        showNow={showNow}
        placeholder={placeholder}
        format={format}
        size={size}
        {...props}
      />
    </div>
  );
};

export default BasicTimePicker;
