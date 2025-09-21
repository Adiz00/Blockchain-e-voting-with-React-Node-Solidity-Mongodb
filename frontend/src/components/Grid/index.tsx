// import React from "react";
// import { Row, Col, Table, Empty, Button } from "antd";
// import { ConfigProvider } from 'antd'
// import Colors from '../../config/colors/index'
// import Loader from "../Loader";
// import { RightOutlined, LeftOutlined } from "@ant-design/icons";

// // import LoaderGif from "../../assets/images/ie_loader.gif";

// const TableWrapper = ({
//     tableData,
//     tableColumns,
//     onHandleChange,
//     previousPage,
//     metaData,
//     isLoader,
//     allowedAccountLoading,
//     fromOrder,
//     sorter,
//     headerBg,
//     loading,
//     total,
//     pageSize,
//     currentPage,
//     handlePaginationChange,
//     rowClassName,
//     tableStyle,
//     position,
//     size
// }) => {
//     let LoaderGif = ""
//     return (
//         <>
//         {/* // here is the basic setting for a table we are using. */}
//             <ConfigProvider
//                 /* here is your component tokens */
//                 theme={{
//                     components: {
//                         Table: {
//                             headerColor: Colors.Gray,
//                             headerBg: Colors.LightGray,
//                             cellPaddingBlock: 26,
//                             cellPaddingInline: 26,
//                             headerBorderRadius: 3,
//                             cellFontSize: 15
//                         },
//                     },
//                 }}
//             >
//             <Table
//                 style={tableStyle}
//                 dataSource={tableData}
//                 columns={tableColumns}
//                 loading={loading}
//                 rowClassName={rowClassName}
//                 size={size}
//                 pagination={{
//                     total: total,
//                     pageSize: pageSize,
//                     current: currentPage,
//                     onChange: handlePaginationChange,
//                     position: "bottom center"
//                 }}

//             />
//             </ConfigProvider>

//         </>
//     );
// };

// export default TableWrapper;

import React from "react";
import { Row, Col, Table, Empty, Button } from "antd";
import { ConfigProvider } from "antd";
import Colors from "../../config/colors/index.ts";
import Loader from "../Loader";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { SizeType } from "antd/es/config-provider/SizeContext";
// import { SizeType } from "antd/lib/config-provider/SizeContext";

interface TableWrapperProps {
  tableData: any[];
  tableColumns: any[];
  onHandleChange?: (pagination: any, filters: any, sorter: any, extra: any) => void;
  previousPage?: () => void;
  metaData?: any;
  isLoader?: boolean;
  allowedAccountLoading?: boolean;
  fromOrder?: boolean;
  sorter?: any;
  headerBg?: string;
  headerColor?: string;
  loading?: boolean;
  total: number;
  pageSize: number;
  currentPage: number;
  handlePaginationChange: (page: number, pageSize?: number) => void;
  rowClassName?: (record: any, index: number) => string;
  rootClassName?: string;
  tableStyle?: React.CSSProperties;
  position?: "top" | "bottom" | "both";
  size?: SizeType; // Use the imported SizeType from antd

  
}

const TableWrapper: React.FC<TableWrapperProps> = ({
  tableData,
  tableColumns,
  onHandleChange,
  previousPage,
  metaData,
  isLoader,
  allowedAccountLoading,
  fromOrder,
  sorter,
  headerBg,
  headerColor,
  loading,
  total,
  pageSize,
  currentPage,
  handlePaginationChange,
  rowClassName,
  rootClassName,
  tableStyle,
  position,
  size
}) => {
  let LoaderGif = "";

  return (
    <>
      {/* here is the basic setting for a table we are using. */}
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerColor: headerColor ? headerColor : Colors.Black,
              headerBg: headerBg ? headerBg : Colors.White,
              cellPaddingBlock: 30,
              cellPaddingInline: 26,
              headerBorderRadius: 14,
              cellFontSize: 12,
            },
          },
        }}
      >
        <Table
          style={tableStyle}
          dataSource={tableData}
          columns={tableColumns}
          loading={loading}
          rowClassName={rowClassName}
          rootClassName={rootClassName}
          size={size}
          pagination={{
            total: total,
            pageSize: pageSize,
            current: currentPage,
            onChange: handlePaginationChange,
            // position: ["bottomCenter"],
          }}
        />
      </ConfigProvider>
    </>
  );
};

export default TableWrapper;
