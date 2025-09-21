import React from "react";
import { Row, Col } from "antd";

interface BasicModalBodyProps {
  description?: string;
  descriptionStyle?: React.CSSProperties;
}

const BasicModalBody: React.FC<BasicModalBodyProps> = ({ description, descriptionStyle }) => {
  return (
    <Row>
      <Col span={24}>
        <p className="descriptionPara" style={descriptionStyle}>{description}</p>
      </Col>
    </Row>
  );
};

export default BasicModalBody;
