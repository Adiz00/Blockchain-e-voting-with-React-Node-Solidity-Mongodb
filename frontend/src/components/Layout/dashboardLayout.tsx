// import { Layout } from "antd";
// import { useLocation } from "react-router-dom";
// import React from "react";
// import "./dashboardLayout.css";
// import SideBar from "./SideBar";
// import NavHeader from "./Header";

// const DashboardLayout = ({ children }) => {

//   const { Content } = Layout;
//   const location = useLocation();

//   return (
//     <div className="App">
//       {/* if user is not login it will not render the layout . */}
//       {
//         location.pathname !== '/login' ?

//           <Layout>

//             <SideBar />

//             <Layout
//               className="site-layout"
//               style={{
//                 marginLeft: '220px'
//               }}
//             >

//               <NavHeader />

//               <Content
//                 className="overflow-auto p-5"
//                 style={{
//                   margin: '0 24px 16px 16px',
//                   height:'100%',
//                 }}
//               >
//                 {children}
//               </Content>

//             </Layout>
//           </Layout>

//           :

//           ""
//       }

//     </div >
//   );










// };
// export default DashboardLayout;


// // 

import { Layout } from "antd";
import { useLocation } from "react-router-dom";
import React, { ReactNode } from "react";
import "./dashboardLayout.css";
import SideBar from "./SideBar.tsx";
import NavHeader from "./Header.tsx";
// import Dashboard from "../../containers/Dashboard/index.tsx";
// import { Settings } from "../../containers/index.js";

interface DashboardLayoutProps {
  children: ReactNode;
  expandible: boolean;
  value?: any;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, value, }) => {
  const { Content } = Layout;
  const location = useLocation();
  // console.log( 'valueeeeeeee', value,)
  return (
    <div className="App">
      {/* If user is not logged in, it will not render the layout. */}
      {/* {location.pathname !== '/login' ? ( */}
        <Layout>
          <SideBar />
          <Layout
            className="site-layout bg-[#6087DD]"
            style={{
              marginLeft: '220px',
              background:'#1A202A',
              // overflow:'visible'
              // border:'2px solid red'

            }}
          >
            
            <NavHeader />
            
            <Content
              className="overflow-auto p-3 pt-4 pb-10 bg-[#6087DD]"
              style={{
                // backgroundColor: '#1A202A',
                margin: '0px',
                height: '100%',
                // border: '2px solid red'
              }}
            >
              
              {/* {value && value === 'Dashboard' ?
                <Dashboard />
                :
                <Settings/>
              } */}

              {children}

              
            </Content>
          </Layout>
        </Layout>
      ) 
      : (
        {/* ""
      )} */}
    </div>
  );
};

export default DashboardLayout;

















