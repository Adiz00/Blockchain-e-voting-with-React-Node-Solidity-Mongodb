import {
    GET_CONTENT_POSTS, GET_CONTENT_POSTS_FAILURE, GET_CONTENT_POSTS_SUCCESS,
    POSTS_CONTENT_DETAIL, POSTS_CONTENT_DETAIL_FAILURE, POSTS_CONTENT_DETAIL_SUCCESS,
    POSTS_CONTENT_UPDATE, POSTS_CONTENT_UPDATE_FAILURE, POSTS_CONTENT_UPDATE_SUCCESS,
    GET_CONTENT_COMMENTS, GET_CONTENT_COMMENTS_FAILURE, GET_CONTENT_COMMENTS_SUCCESS,
    COMMENTS_CONTENT_DETAIL, COMMENTS_CONTENT_DETAIL_FAILURE, COMMENTS_CONTENT_DETAIL_SUCCESS,
    COMMENTS_CONTENT_UPDATE, COMMENTS_CONTENT_UPDATE_FAILURE, COMMENTS_CONTENT_UPDATE_SUCCESS,
    GET_REPORT_CHATS, GET_REPORT_CHATS_SUCCESS, GET_REPORT_CHATS_FAILURE,
    CHATS_CONTENT_DETAIL, CHATS_CONTENT_DETAIL_FAILURE, CHATS_CONTENT_DETAIL_SUCCESS,
} from "../constants";

export default class ContentUserAction {
    static GetContentPosts(payload) {
        console.log("this is the content payload of the posts",payload)
        return {
            type: GET_CONTENT_POSTS,
            payload
        }
    }

    static GetContentPostsSuccess(payload) {
        console.log("this is post of the reported",payload)
        return {
            type: GET_CONTENT_POSTS_SUCCESS,
            payload
        }
    }

    static GetContentPostsFailure() {
        return {
            type: GET_CONTENT_POSTS_FAILURE
        }
    }

    static ContentStatusUpdate(payload, cb) { 
        console.log(payload)
        return {
            type: POSTS_CONTENT_UPDATE,
            payload,
            cb
        }
    }

    static ContentStatusUpdateSuccess() {
        return {
            type: POSTS_CONTENT_UPDATE_SUCCESS
        }

    }

    static ContentStatusUpdateFailure() {
        return {
            type: POSTS_CONTENT_UPDATE_FAILURE
        }
    }

    static PostsContentDetail(payload) {
        console.log(payload)
        return {
            type: POSTS_CONTENT_DETAIL,
            payload
        }
    }
    static PostsContentDetailSuccess(payload) {
        return {
            type: POSTS_CONTENT_DETAIL_SUCCESS,
            payload
        }
    }

    static PostsContentDetailFailure() {
        return {
            type: POSTS_CONTENT_DETAIL_FAILURE
        }
    }

    static GetContentComments(payload) {
        console.log("this is the content payload comments",payload)
        return {
            type: GET_CONTENT_COMMENTS,
            payload
        }
    }

    static GetContentCommentsSuccess(payload) {
        console.log("this is the content payload",payload)
        return {
            type: GET_CONTENT_COMMENTS_SUCCESS,
            payload
        }
    }

    static GetContentCommentsFailure() {
        return {
            type: GET_CONTENT_COMMENTS_FAILURE
        }
    }

    static ContentStatusUpdateComments(payload, cb) { 
        console.log("This is the status update payload",payload)
        return {
            type: COMMENTS_CONTENT_UPDATE,
            payload,
            cb
        }
    }

    static ContentStatusUpdateCommentsSuccess() {
        return {
            type: COMMENTS_CONTENT_UPDATE_SUCCESS
        }

    }

    static ContentStatusUpdateCommentsFailure() {
        return {
            type: COMMENTS_CONTENT_UPDATE_FAILURE
        }
    }

    static CommentsContentDetail(payload) {
        console.log(payload)
        return {
            type: COMMENTS_CONTENT_DETAIL,
            payload
        }
    }
    static CommentsContentDetailSuccess(payload) {
        console.log("This is commments contant details actions",payload)
        return {
            type: COMMENTS_CONTENT_DETAIL_SUCCESS,
            payload
        }
    }

    static CommentsContentDetailFailure() {
        return {
            type: COMMENTS_CONTENT_DETAIL_FAILURE
        }
    }

    static ChatsContentDetail(payload) {
        console.log(payload)
        return {
            type: CHATS_CONTENT_DETAIL,
            payload
        }
    }
    static ChatsContentDetailSuccess(payload) {
        console.log("This is commments contant details actions",payload)
        return {
            type: CHATS_CONTENT_DETAIL_SUCCESS,
            payload
        }
    }

    static ChatsContentDetailFailure() {
        return {
            type: CHATS_CONTENT_DETAIL_FAILURE
        }
    }

    static GetReportedChats(payload) {
        console.log(payload)
        return {
            type: GET_REPORT_CHATS,
            payload
        }
    }
    static GetReportedChatsSuccess(payload) {
        // console.log("This is commments contant details actions",payload)
        return {
            type: GET_REPORT_CHATS_SUCCESS,
            payload
        }
    }

    static GetReportedChatsFailure() {
        return {
            type: GET_REPORT_CHATS_FAILURE
        }
    }

}