// import React from "react";
// import {
//   Row,
//   Col,
//   Card,
//   Avatar,
//   Typography,
//   message,
//   Pagination,
//   Popconfirm,
//   Empty,
// } from "antd";
// import ShowMoreText from "react-show-more-text";
// import { Button } from "..";
// import { FiTrash } from "react-icons/fi";


// const MessageCard = () => {
//   return (
//     <Row>
//       <Col xs={24} sm={24} md={12} lg={6}>
//         <Card
//           className="card-SupportMsg"
//           style={{
//             width: "100%",
//             textAlign: "left",
//           }}
//         >
//           <Row gutter={[10, 10]} align="middle" justify="start">
//             <Col span={6}>
//               <Avatar src={"https://joeschmoe.io/api/v1/random"} size="large" />
//             </Col>
//             <Col span={18}>
//               <Row gutter={[5, 5]} align="middle" justify="start">
//                 <Col span={24} className="msg-card-name">
//                   Random Name
//                 </Col>
//                 <Col span={24} className="msg-card-phone">
//                   0123456789
//                 </Col>
//               </Row>
//             </Col>
//             <Col span={24} style={{ marginTop: "7px" }}>
//               <ShowMoreText
//                 /* Default options */
//                 lines={2}
//                 more="Show more"
//                 less="Show less"
//                 className="show-content"
//                 anchorClass="my-anchor-css-class"
//                 // onClick={this.executeOnClick}
//                 expanded={false}
//                 // width={280}
//                 truncatedEndingComponent={"... "}
//               >
//                 <p>random text for testing purpose</p>
//               </ShowMoreText>
//             </Col>
//             <Col span={24}>
//               <Row gutter={[10, 10]}>
//                 <Col xs={24} sm={24} md={19} lg={19}>
//                   <Button.Basic
//                   text='submit'
//                   style={{width:'100%'}}
//                   //   className={`msgButton ${
//                   //     item?.status == "Responded"
//                   //       ? "btn-reply-again"
//                   //       : "card-SupportMsg_Btn-Reply"
//                   //   }`}
//                   //   text={
//                   //     item?.status == "Pending"
//                   //       ? "Reply"
//                   //       : "Reply Again"
//                   //   }
//                   //   size={"middle"}
//                   //   onClick={() => openResponseModal(item?.user,item)}
//                   />
//                 </Col>
//                 <Col xs={24} sm={24} md={5} lg={5}>
//                 <Popconfirm
//                   placement="topLeft"
//                   title="Are you sure to delete this"
//                 //   onConfirm={onDeleteMsg}
//                   okText="Yes"
//                   cancelText="No"
//                 >
//                   <button
//                     className="card-SupportMsg_Btn-Delete"
                    
//                     // onClick={() => setModalData(item)}
//                   >
//                     <FiTrash />
//                   </button>
//                 </Popconfirm>
//               </Col>
//               </Row>
//             </Col>
//           </Row>
//         </Card>
//       </Col>
//     </Row>
//   );
// };

// export default MessageCard;

import React from "react";
import {
  Row,
  Col,
  Card,
  Avatar,
  Popconfirm,
} from "antd";
import ShowMoreText from "react-show-more-text";
import { Button } from "..";
import { FiTrash } from "react-icons/fi";

const MessageCard: React.FC = () => {
  
  return (
    <Row>
      <Col xs={24} sm={24} md={12} lg={6}>
        <Card
          className="card-SupportMsg"
          style={{
            width: "100%",
            textAlign: "left",
          }}
        >
          <Row gutter={[10, 10]} align="middle" justify="start">
            <Col span={6}>
              <Avatar src={"https://joeschmoe.io/api/v1/random"} size="large" />
            </Col>
            <Col span={18}>
              <Row gutter={[5, 5]} align="middle" justify="start">
                <Col span={24} className="msg-card-name">
                  Random Name
                </Col>
                <Col span={24} className="msg-card-phone">
                  0123456789
                </Col>
              </Row>
            </Col>
            <Col span={24} style={{ marginTop: "7px" }}>
              <ShowMoreText
                lines={2}
                more="Show more"
                less="Show less"
                className="show-content"
                anchorClass="my-anchor-css-class"
                expanded={false}
                truncatedEndingComponent={"... "}
              >
                <p>random text for testing purpose</p>
              </ShowMoreText>
            </Col>
            <Col span={24}>
              <Row gutter={[10, 10]}>
                <Col xs={24} sm={24} md={19} lg={19}>
                  <Button.Basic
                    text='submit'
                    style={{ width: '100%' }}
                  />
                </Col>
                <Col xs={24} sm={24} md={5} lg={5}>
                  <Popconfirm
                    placement="topLeft"
                    title="Are you sure to delete this"
                    okText="Yes"
                    cancelText="No"
                  >
                    <button className="card-SupportMsg_Btn-Delete">
                      <FiTrash />
                    </button>
                  </Popconfirm>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default MessageCard;
