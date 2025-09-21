// import { Col, Modal, Row } from "antd";
// import React from "react";

// import Button from "../Button";
// import Text from "../Text";

// const Basic = ({
//   title = "Sample Modal",
//   description,
//   open,
//   closeable = true,
//   className,
//   onCancel,
//   fontFamily,
//   fontSize = 18,
//   gutter = [0, 24],
//   leftButtonText,
//   rightButtonText,
//   onClickLeft,
//   onClickRight,
//   loading,
// }) => {
//   if (open) {
//     return (
//       <Modal
//         open={true}
//         className={className}
//         onCancel={onCancel}
//         closable={closeable}
//         footer={null}
//       >
//         <Row gutter={gutter} justify="center">
//           <Col span={24}>
//             <Row justify="center">
//               <Col>
//                 <Text.Basic
//                   fontFamily={fontFamily}
//                   fontSize={fontSize}
//                   text={title}
//                 />
//               </Col>
//             </Row>
//           </Col>
//           <Col span={24}>
//             <Row gutter={[0, 5]}>
//               <Text.Basic
//                 fontFamily={fontFamily}
//                 fontSize={fontSize}
//                 text={description}
//               />
//             </Row>
//           </Col>
//           <Col span={24}>
//             <Row justify={"center"}>
//               <Col>
//                 <Button.Basic
//                   text={leftButtonText}
//                   onClick={onClickLeft}
//                   size="large"
//                 />
//               </Col>
//               <Col offset={1}>
//                 <Button.Basic
//                   type="primary"
//                   size={"large"}
//                   text={rightButtonText}
//                   onClick={onClickRight}
//                   disabled={loading}
//                   isShowLoader={loading}
//                 />
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//       </Modal>
//     );
//   } else {
//     return <></>;
//   }
// };
// export default Basic;

import { Col, Modal, Row } from "antd";
import React from "react";
import Button from "../Button";
import Text from "../Text";

interface BasicProps {
  title?: string;
  description?: string;
  open: boolean;
  closeable?: boolean;
  className?: string;
  onCancel?: () => void;
  fontFamily?: string;
  fontSize?: number;
  gutter?: [number, number];
  leftButtonText?: string;
  rightButtonText?: string;
  onClickLeft?: () => void;
  onClickRight?: () => void;
  loading?: boolean;
}

const Basic: React.FC<BasicProps> = ({
  title = "Sample Modal",
  description,
  open,
  closeable = true,
  className,
  onCancel,
  fontFamily,
  fontSize = 18,
  gutter = [0, 24],
  leftButtonText,
  rightButtonText,
  onClickLeft,
  onClickRight,
  loading,
}) => {
  if (open) {
    return (
      <Modal
        open={true}
        className={className}
        onCancel={onCancel}
        closable={closeable}
        footer={null}
      >
        <Row gutter={gutter} justify="center">
          <Col span={24}>
            <Row justify="center">
              <Col>
                <Text.Basic
                  fontFamily={fontFamily}
                  fontSize={fontSize}
                  text={title}
                />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[0, 5]}>
              <Text.Basic
                fontFamily={fontFamily}
                fontSize={fontSize}
                text={description}
              />
            </Row>
          </Col>
          <Col span={24}>
            <Row justify="center">
              <Col>
                <Button.Basic
                  text={leftButtonText}
                  onClick={onClickLeft}
                  size="large"
                />
              </Col>
              <Col offset={1}>
                <Button.Basic
                  type="primary"
                  size="large"
                  text={rightButtonText}
                  onClick={onClickRight}
                  disabled={loading}
                  // isShowLoader={loading}
                  
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
    );
  } else {
    return null;
  }
};

export default Basic;

