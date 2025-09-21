import { DatePicker } from "antd";
import React from "react";
import { ConfigProvider } from 'antd'

const { RangePicker } = DatePicker;

const RangeDatePicker = ({
  value,
  picker,
  onChange,
  defaultValue,
  format,
  placeholder,
  showToday = false,
  showTime = false,
  showNow = false,
  allowClear = true,
  size,
  containerStyle,
  ...props
}) => {
  return (
    <div style={containerStyle}>
      <ConfigProvider
        theme={{
          components: {
            DatePicker: {
              /* here is your component tokens */
              hoverBorderColor	: 'green'
            },
          },
        }}
      >

        <RangePicker
          onChange={onChange}
          picker={picker}
          defaultValue={defaultValue}
          format={format}
          value={value}
          placeholder={placeholder}
          showToday={showToday}
          showTime={showTime}
          showNow={showNow}
          allowClear={allowClear}
          size={size}
          {...props}
        />
      </ConfigProvider>
    </div>
  );
};

export default RangeDatePicker;
