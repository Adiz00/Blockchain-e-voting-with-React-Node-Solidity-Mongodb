// import React from 'react'
// import { Modal, Row } from "antd";


// const CustomModal = ({
//     title,
//     className,
//     open,
//     cancelModal,
//     width,
//     height,
//     centered,
//     Children,
//     destroyOnClose,
//     style
// }) => {
//     return (


//         <Modal
//             style={style}
//             title={title}
//             wrapClassName={`custom-modal ${className}`}
//             open={open}
//             height={height}
//             closeIcon={true}
//             width={width}
//             onCancel={cancelModal}
//             cancelButtonProps={false}
//             footer={null}
//             centered={centered}
//             destroyOnClose={true}
//         >

//             <Row className='w-full'>

//                 {Children}

//             </Row>


//         </Modal>



//     )
// }

// export default CustomModal


import React from 'react';
import { Modal, Row } from "antd";

interface CustomModalProps {
  title?: string;
  className?: string;
  open: boolean;
  cancelModal: () => void;
  width?: number | string;
  height?: number | string;
  centered?: boolean;
  Children?: React.ReactNode;
  destroyOnClose?: boolean;
  closeIcon?: React.ReactNode;
  style?: React.CSSProperties;
}

const CustomModal: React.FC<CustomModalProps> = ({
  title,
  className,
  open,
  cancelModal,
  width,
  height,
  centered,
  Children,
  destroyOnClose = true,
  closeIcon,
  style
}) => {
  return (
    <Modal
      style={style}
      title={title}
      wrapClassName={`custom-modal ${className}`}
      open={open}
      // height={height}
      closeIcon={closeIcon}
      width={width}
      onCancel={cancelModal}
      cancelButtonProps={{ style: { display: 'none' } }}
      footer={null}
      centered={centered}
      destroyOnClose={destroyOnClose}
    >
      <Row className='w-full'>
        {Children}
      </Row>
    </Modal>
  );
}

export default CustomModal;
