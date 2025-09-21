import React from "react";
import { Avatar, AvatarProps } from "antd";

interface BasicProps extends Omit<AvatarProps, ""> {
  containerStyle?: React.CSSProperties;
}

const Basic: React.FC<BasicProps> = ({ alt, src, size, icon, shape, containerStyle, ...props }) => (
  <div style={containerStyle}>
    <Avatar
      alt={alt}
      src={src}
      icon={icon} 
      shape={shape}
      size={size}
      {...props}
    />
  </div>
);

export default Basic;