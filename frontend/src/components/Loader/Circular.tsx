import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";

interface CircularProps {
  size?: number;
  color?: string;
  spinning?: boolean;
  loaderStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  [key: string]: any; // To accommodate any other props
}

const Circular: React.FC<CircularProps> = ({
  size = 16,
  color,
  spinning = true,
  loaderStyle,
  containerStyle,
  ...props
}) => {
  return (
    <div style={containerStyle}>
      <Spin
        indicator={<LoadingOutlined style={{ color: color, fontSize: size }} />}
        spinning={spinning}
        style={loaderStyle}
        {...props}
      />
    </div>
  );
};

export default Circular;
