// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { connect } from "react-redux";
// import {
//   Dashboard,
//   UserProfile,
//   UserManagement,
//   UserDetail,
//   ContentManagement,
//   Contact,
//   EventManagement,
//   ReportDetail,
//   ReportDetailComments,
//   ReportDetailChats,
//   ReportUserDetail,
//   ForumManagement,
//   ReportedForumCommentDetails,
//   ForumDetailPage
//   // Users,
//   // BasicTable,
//   // TabsTable,
//   // Form,
//   // TabsForm,
//   // Messages
// } from "../../containers";


// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/user-profile" element={<UserProfile />} />
//       <Route path="/user-management" element={<UserManagement />} />
//       <Route path="/user-management/userdetail/:id" element={<UserDetail />} />
//       <Route path="/content-management/report/:id" element={<ReportDetail />} />
//       <Route path="/user-management/reportuserdetail/:id" element={<ReportUserDetail />} />
//       <Route path="/content-management/reportComments/:id" element={<ReportDetailComments />} />
//       <Route path="/content-management/reportChats/:id" element={<ReportDetailChats />} />
//       <Route path="/forum-management/forumReportComments/:id" element={<ReportedForumCommentDetails />} />
//       <Route path="/forum-management/forumDetails/:id" element={<ForumDetailPage />} />
//       <Route path="/content-management" element={<ContentManagement />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/event-management" element={<EventManagement />} />
//       <Route path="/forum-management" element={<ForumManagement />} />
//       {/* <Route path="/content-management/reported-users" element={<ContentManagementReport />} /> */}

//       {/* <Route exact path="/users" element={<Users />} />
//       <Route exact path="/basictable" element={<BasicTable />} />
//       <Route exact path="/tabstable" element={<TabsTable />} />
//       <Route exact path="/form" element={<Form />} />
//       <Route exact path="/messages" element={<Messages />} />
//       <Route exact path="/tabsform" element={<TabsForm />} /> */}
//       <Route path="*" element={<Navigate to="/dashboard" />} />
//     </Routes>
//   )
// }

// export default AppRoutes


import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Dashboard,
  Settings,
  // UserProfile,
  // UserManagement,
  // UserDetail,
  // ContentManagement,
  // Contact,
  // EventManagement,
  // ReportDetail,
  // ReportDetailComments,
  // ReportDetailChats,
  // ReportUserDetail,
  //  ForumManagement,
  // ReportedForumCommentDetails,
  // ForumDetailPage,
  // ================================================
  // Users,
  // BasicTable,
  // TabsTable,
  // Form,
  // TabsForm,
  // Messages
} from "../../containers";

const AppRoutes: React.FC = () => {
  console.log('AppRoutes');	
  return (
    <Routes>

      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route path="/user-management/userdetail/:id" element={<UserDetail />} />
      <Route path="/content-management/report/:id" element={<ReportDetail />} />
      <Route path="/user-management/reportuserdetail/:id" element={<ReportUserDetail />} />
      <Route path="/content-management/reportComments/:id" element={<ReportDetailComments />} />
      <Route path="/content-management/reportChats/:id" element={<ReportDetailChats />} />
      <Route path="/forum-management/forumReportComments/:id" element={<ReportedForumCommentDetails />} />
      <Route path="/forum-management/forumDetails/:id" element={<ForumDetailPage />} />
      <Route path="/content-management" element={<ContentManagement />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/event-management" element={<EventManagement />} />
      <Route path="/forum-management" element={<ForumManagement />} /> */}
      <Route path="/settings" element={<Settings />} /> 

      {/* ==================================================================================== */}

      {/* <Route path="/content-management/reported-users" element={<ContentManagementReport />} /> */}

      {/* <Route path="/users" element={<Users />} />
      <Route path="/basictable" element={<BasicTable />} />
      <Route path="/tabstable" element={<TabsTable />} />
      <Route path="/form" element={<Form />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/tabsform" element={<TabsForm />} /> */}
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default AppRoutes;
