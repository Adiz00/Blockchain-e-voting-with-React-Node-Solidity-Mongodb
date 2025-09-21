import { DatePicker } from "antd";
import React from "react";

const { RangePicker } = DatePicker;
const BasicDatePicker = ({
  value,
  picker,
  onChange,
  defaultValue,
  format,
  placeholder,
  showToday = false,
  showTime = false,
  showNow = false,
  containerStyle,
  ...props
}) => {
  return (
    <div style={containerStyle}>
      <DatePicker
        onChange={onChange}
        picker={picker}
        defaultValue={defaultValue}
        format={format}
        value={value}
        placeholder={placeholder}
        showToday={showToday}
        showTime={showTime}
        showNow={showNow}
        {...props}
      />
    </div>
  );
};

export default BasicDatePicker;
