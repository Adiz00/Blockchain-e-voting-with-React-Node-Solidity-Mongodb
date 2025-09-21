import { Badge, BadgeProps } from "antd";
import * as React from "react";

interface BasicProps extends Omit<BadgeProps, ""> {

  containerStyle?: React.CSSProperties;
  }

const Basic: React.FC<BasicProps> = ({
  containerStyle,
  count,
  overflowCount,
  color,
  showZero = false,
  text,
  title,
  children,
  size,
  ...props
}) => {
  return (
    <div style={containerStyle}>
      <Badge
        count={count} 
        color={color}
        overflowCount={overflowCount} 
        showZero={showZero}
        text={text}
        title={title}
        size={size}
        {...props}
      >
        {children}
      </Badge>
    </div>
  );
};

export default Basic;
