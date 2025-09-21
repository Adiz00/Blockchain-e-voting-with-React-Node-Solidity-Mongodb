import { Col, Table } from "antd";
import React from "react";

const Basic = ({
  style,
  columns,
  data,
  onRow,
  loading,
  className,
  pagination,
  bordered,
  ...props
}) => {
  
  
  return (
    <Col style={{ overflowX: "auto" }} span={24}>
      <Table
        bordered={bordered}
        style={style}
        columns={columns}
        pagination={pagination}
        dataSource={data}
        onRow={onRow}
        className={className}
        loading={loading}
        {...props}
      />
    </Col>
  );
};

export default Basic;
