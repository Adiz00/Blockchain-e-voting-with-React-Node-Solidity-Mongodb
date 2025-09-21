// import { PlusOutlined } from "@ant-design/icons";
// import { FloatButton } from "antd";
// import React from "react";

// const Floating = ({
//   text,
//   icon,
//   onClick,
//   containerStyle,
//   buttonStyle,
//   shape,
//   type = "primary",
//   ...props
// }) => {
//   return (
//     <div style={containerStyle}>
//       <FloatButton
//         onClick={onClick}
//         icon={icon || <PlusOutlined />}
//         description={text}
//         type={type}
//         shape={shape}
//         style={buttonStyle}
//         {...props}
//       />
//     </div>
//   );
// };

// export default Floating;

import { PlusOutlined } from "@ant-design/icons";
import { FloatButton, FloatButtonProps } from "antd";
import React from "react";

interface FloatingProps extends Omit<FloatButtonProps, 'icon'> {
  text?: string;
  icon?: React.ReactNode;
  containerStyle?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  shape?: 'circle' | 'square';
  type?: 'default' | 'primary';
}

const Floating: React.FC<FloatingProps> = ({
  text,
  icon,
  onClick,
  containerStyle,
  buttonStyle,
  shape,
  type = "primary",
  ...props
}) => {
  return (
    <div style={containerStyle}>
      <FloatButton
        onClick={onClick}
        icon={icon || <PlusOutlined />}
        description={text}
        type={type}
        shape={shape}
        style={buttonStyle}
        {...props}
      />
    </div>
  );
};

export default Floating;

