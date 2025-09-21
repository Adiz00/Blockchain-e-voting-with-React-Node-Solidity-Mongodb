import { AppMiddleware, UserMiddleware, ContentUserMiddleware, ContactSupportMiddleware, ForumMiddleware, EventMiddleware } from "../middlewares"
import { takeLatest, all } from 'redux-saga/effects'
import { GET_CONTACT_USERS,CHANGE_PASSWORD, FORGET_PASSWORD, LOGOUT, PASSWORD_RESET, SIGNIN, USER_UPDATE, VERIFIED_OTP, USER_DETAIL, GET_USERS, GET_CONTENT_POSTS, POSTS_CONTENT_DETAIL, POSTS_CONTENT_UPDATE,GET_CONTENT_COMMENTS,COMMENTS_CONTENT_UPDATE, COMMENTS_CONTENT_DETAIL, GET_REPORT_USERS, REPORT_USER_DETAIL, REPORT_USER_UPDATE,USER_DETAIL_POST, POST_CONTACT_USERS_RESPOND, GET_FORUM_LIST, GET_REPORTED_FORUM_COMMENTS,DELETE_FORUM, GET_FORUM_DETAILS, DELETE_REPORTED_COMMENT, GET_FORUM_PARTICIPANTS, REMOVE_FORUM_PARTICIPANTS, GET_REPORTED_COMMENT_DETAIL, UPLOAD_PHOTO, GET_FORUM_REPLIES, CREATE_EVENT, ALL_EVENT_LIST, DELETE_EVENT, EVENT_UPDATE, DASHBOARD_COUNTS, DASHBOARD_ACTIVITY, DASHBOARD_GRAPH, GET_REPORT_CHATS, CHATS_CONTENT_DETAIL } from "../constants"
import DashboardMiddleware from "../middlewares/DashboardMiddleware"

export function* Sagas() {
    // alert('finding sagas ');
    yield all([
        // for signin
        yield takeLatest(SIGNIN, AppMiddleware.SignIn),

        // for forget password scenerio
        // yield takeLatest(FORGET_PASSWORD, AppMiddleware.ForgetPassword),
        yield takeLatest(VERIFIED_OTP, AppMiddleware.OtpVerification),
        yield takeLatest(PASSWORD_RESET, AppMiddleware.PasswordReset),

        // for changing password from the user profile
        yield takeLatest(CHANGE_PASSWORD, AppMiddleware.ChangePassword),

        // for getting users data.
        yield takeLatest(GET_USERS, UserMiddleware.GetUsers),
        yield takeLatest(USER_UPDATE, UserMiddleware.UpdateUser),
        yield takeLatest(USER_DETAIL, UserMiddleware.UserDetail),
        yield takeLatest(USER_DETAIL_POST, UserMiddleware.UserDetailPost),

        //for getting report users
        yield takeLatest(GET_REPORT_USERS, UserMiddleware.GetReportUsers),
        yield takeLatest(REPORT_USER_UPDATE, UserMiddleware.ReportUserStatusUpdate),
        yield takeLatest(REPORT_USER_DETAIL, UserMiddleware.ReportUserUserDetail),

        //for getting report posts
        yield takeLatest(GET_CONTENT_POSTS, ContentUserMiddleware.GetContentPosts),
        yield takeLatest(POSTS_CONTENT_UPDATE, ContentUserMiddleware.ContentStatusUpdate),
        yield takeLatest(POSTS_CONTENT_DETAIL, ContentUserMiddleware.PostsContentDetail),

        //for getting report comments
        yield takeLatest(GET_CONTENT_COMMENTS, ContentUserMiddleware.GetContentComments),
        yield takeLatest(COMMENTS_CONTENT_UPDATE, ContentUserMiddleware.ContentStatusUpdateComments),
        yield takeLatest(COMMENTS_CONTENT_DETAIL, ContentUserMiddleware.CommentsContentDetail),

        
        //for getting report chats
        yield takeLatest(GET_REPORT_CHATS, ContentUserMiddleware.GetReportedChats),
        yield takeLatest(CHATS_CONTENT_DETAIL, ContentUserMiddleware.ChatsContentDetail),

        //for Contact Support
        yield takeLatest(GET_CONTACT_USERS, ContactSupportMiddleware.GetContactUsers),
        yield takeLatest(POST_CONTACT_USERS_RESPOND, ContactSupportMiddleware.PostContactUsersRespond),

        //Forum
        yield takeLatest(GET_FORUM_LIST, ForumMiddleware.GetForumList),
        yield takeLatest(GET_FORUM_PARTICIPANTS, ForumMiddleware.GetForumParticipants),
        yield takeLatest(GET_FORUM_DETAILS, ForumMiddleware.GetForumDetails),
        yield takeLatest(GET_FORUM_REPLIES, ForumMiddleware.GetForumReplies),
        yield takeLatest(UPLOAD_PHOTO, ForumMiddleware.UploadPhoto),
        yield takeLatest(REMOVE_FORUM_PARTICIPANTS, ForumMiddleware.RemoveForumParticipants),
        yield takeLatest(DELETE_FORUM, ForumMiddleware.DeleteForum),
        yield takeLatest(GET_REPORTED_FORUM_COMMENTS, ForumMiddleware.GetReportForumComment),
        yield takeLatest(GET_REPORTED_COMMENT_DETAIL, ForumMiddleware.GetReportedCommentDetail),
        yield takeLatest(DELETE_REPORTED_COMMENT, ForumMiddleware.DeleteReportedComment),

        //Event
        yield takeLatest(CREATE_EVENT, EventMiddleware.CreateEvent),
        yield takeLatest(ALL_EVENT_LIST, EventMiddleware.AllEvents),
        yield takeLatest(DELETE_EVENT, EventMiddleware.DeleteEvent),
        yield takeLatest(EVENT_UPDATE, EventMiddleware.UpdateEvent),

        // for getting dashboard counts, activity and graph
        
        yield takeLatest(DASHBOARD_COUNTS, DashboardMiddleware.GetDashboardCounts),
        yield takeLatest(DASHBOARD_ACTIVITY, DashboardMiddleware.GetDashboardActivity),
        yield takeLatest(DASHBOARD_GRAPH, DashboardMiddleware.GetDashboardGraph),

        // for logout
        yield takeLatest(LOGOUT, AppMiddleware.Logout)
    ])
}