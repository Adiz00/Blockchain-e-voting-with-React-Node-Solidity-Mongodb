import { Pagination } from "antd";
import * as React from "react";

const Basic = ({
  paginationStyle,
  containerStyle,
  total,
  count,
  current,
  disabled = false,
  pageSize = 10,
  size,
  showSizeChanger = false,
  onChange,
  hideOnSinglePage = false,
  ...props
}) => {
  return (
    <div style={containerStyle}>
      <Pagination
        defaultCurrent={1}
        total={total}
        current={current}
        disabled={disabled}
        pageSize={pageSize}
        size={size}
        showSizeChanger={showSizeChanger}
        onChange={onChange}
        hideOnSinglePage={hideOnSinglePage}
        style={paginationStyle}
        {...props}
      />
    </div>
  );
};

export default Basic;
