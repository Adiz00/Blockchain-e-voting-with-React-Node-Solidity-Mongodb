  // import React from "react";
  // import { Col, Modal, Row, ConfigProvider } from "antd";
  // import Button from "../Button";
  // import BasicModalBody from "./BasicModalBody.tsx";
  // import ModalCommentBody from "./CommentModalBody.tsx";

  // const BasicModal = ({
  //   modalType,
  //   title,
  //   className,
  //   onCancel,
  //   closeable,
  //   text,
  //   isModalOpen,
  //   leftButtonText,
  //   leftButtonStyle,
  //   onClickLeft,
  //   rightButtonText,
  //   rightButtonStyle,
  //   onClickRight,
  //   btnLoadingLeft,
  //   loadingLeft,
  //   btnLoadingRight,
  //   loadingRight,
  //   isFooter,
  //   isCommentModal,
  //   descriptionStyle,
  //   centered,
  //   width
  // }) => {
  //   console.log("description: ", text);

  //   return (
  //     <Modal
  //       className={`basicModal ${className}`}
  //       title={title}
  //       open={isModalOpen}
  //       onCancel={onCancel}
  //       centered={centered}
  //       closable={closeable}
  //       width={width}
  //       footer={[
  //         isFooter ? (
  //           <Row>

  //             {/* <ConfigProvider
  //               theme={{
  //                 token: {
  //                   colorPrimaryHover: '',
  //                   controlHeight: 33,
  //                   lineHeight: 0,
  //                   lineWidth: 0,
  //                 },
  //               }}
  //             > */}
  //               <Col span={12}>


  //                 <Button.Basic
  //                   className='footer-action footer-btn-1'
  //                   style={leftButtonStyle}
  //                   text={leftButtonText}
  //                   onClick={onClickLeft}
  //                   disabled={btnLoadingLeft}
  //                   // isShowLoader={loadingLeft}
  //                   size="large"
                    
  //                 />

  //               </Col>
  //               <Col span={12}>
  //                 <Button.Basic
  //                   className="footer-action footer-btn-2"
  //                   type="primary"
  //                   size={"large"}
  //                   style={rightButtonStyle}
  //                   text={rightButtonText}
  //                   onClick={onClickRight}
  //                   disabled={btnLoadingRight}
  //                   // isShowLoader={loadingRight}
  //                 />

  //               </Col>
  //             {/* </ConfigProvider> */}
  //           </Row>
  //         ) : null,
  //       ]}
  //     >
  //       {modalType === "basicModal" ? (
  //         <BasicModalBody description={text} descriptionStyle={descriptionStyle} />
  //       ) : modalType == "commentModal" ? (
  //         <ModalCommentBody isCommentModal={isCommentModal} />
  //       ) : (
  //         ""
  //       )}
  //     </Modal>
  //   );
  // };

  // export default BasicModal;


  import { CSSProperties } from "react";
import { ButtonProps } from "antd/lib/button";
import React from "react";
import { Col, Modal, Row } from "antd";
import Button from "../Button";
import BasicModalBody from "./BasicModalBody.tsx";
import ModalCommentBody from "./CommentModalBody.tsx";


interface BasicModalProps {
  modalType: "basicModal" | "commentModal";
  title?: string;
  
  className?: string;
  onCancel: () => void;
  closeable?: boolean;
  text?: string;
  isModalOpen: boolean;
  leftButtonText?: string;
  leftButtonStyle?: CSSProperties;
  onClickLeft?: () => void;
  rightButtonText?: string;
  rightButtonStyle?: CSSProperties;
  onClickRight?: () => void;
  btnLoadingLeft?: boolean;
  loadingLeft?: boolean;
  btnLoadingRight?: boolean;
  loadingRight?: boolean;
  isFooter?: boolean;
  isCommentModal?: boolean;
  descriptionStyle?: CSSProperties;
  centered?: boolean;
  width?: string | number;
}

const BasicModal: React.FC<BasicModalProps> = ({
  modalType,
  title,
  className,
  onCancel,
  closeable,
  text,
  isModalOpen,
  leftButtonText,
  leftButtonStyle,
  onClickLeft,
  rightButtonText,
  rightButtonStyle,
  onClickRight,
  btnLoadingLeft,
  loadingLeft,
  btnLoadingRight,
  loadingRight,
  isFooter,
  isCommentModal,
  descriptionStyle,
  centered,
  width,
}) => {
  // console.log("description: ", text);

  return (
    <Modal
      className={`basicModal ${className}`}
      title={title}
      
      open={isModalOpen}
      onCancel={onCancel}
      centered={centered}
      closable={closeable}
      width={width}
      footer={[
        isFooter ? (
          <Row key="footer">
            <Col span={12} className="pr-2">
              <Button.Basic
                className="footer-action footer-btn-1 w-full"
                style={leftButtonStyle}
                text={leftButtonText}
                onClick={onClickLeft}
                disabled={btnLoadingLeft}
                size="large"
              />
            </Col>
            <Col span={12} className="pl-2">
              <Button.Basic
                className="footer-action footer-btn-2 w-full px-10"
                type="primary"
                size={"large"}
                style={rightButtonStyle}
                text={rightButtonText}
                onClick={onClickRight}
                disabled={btnLoadingRight}
                
              />
            </Col>
          </Row>
        ) : null,
      ]}
    >
      {modalType === "basicModal" ? (
        <BasicModalBody 
          description={text} 
          descriptionStyle={descriptionStyle} 
           />
      ) : modalType === "commentModal" ? (
        <ModalCommentBody isCommentModal={isCommentModal} />
      ) : (
        ""
      )}
    </Modal>
  );
};

export default BasicModal;
