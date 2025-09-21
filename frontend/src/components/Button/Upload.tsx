// import { Upload } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
// import Button from ".";

// const UploadField = ({
//   accept,
//   onChange,
//   progress,
//   disabled,
//   multiple,
//   text,
//   style,
//   ...props
// }) => (
//   <Upload
//     accept={accept}
//     onChange={onChange}
//     progress={progress}
//     multiple={multiple}
//     disabled={disabled}
//     style={style}
//     {...props}
//   >
//     <Button.Basic icon={<UploadOutlined />} text={text} />
//   </Upload>
// );
// export default UploadField;

import { Upload, UploadProps } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Button from "."; // Adjust the import path as needed
import React from "react";

//'icon' | 'style'> to ensure it includes all props from UploadProps except for icon and style, which we define ourselves.
// interface UploadFieldProps extends Omit<UploadProps, 'icon' | 'style'> {
interface UploadFieldProps extends Omit<UploadProps, 'icon'> {
  text?: string;
  style?: React.CSSProperties;
}

const UploadField: React.FC<UploadFieldProps> = ({
  accept,
  onChange,
  progress,
  disabled,
  multiple,
  text,
  style,
  ...props
}) => (
  <Upload
    accept={accept}
    onChange={onChange}
    progress={progress}
    multiple={multiple}
    disabled={disabled}
    style={style}
    {...props}
  >
    <Button.Basic icon={<UploadOutlined />} text={text} />
  </Upload>
);

export default UploadField;
