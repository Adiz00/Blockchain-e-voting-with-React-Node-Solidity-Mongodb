import {
    GET_FORUM_LIST, GET_FORUM_LIST_SUCCESS, GET_FORUM_LIST_FAILURE,
    GET_FORUM_PARTICIPANTS, GET_FORUM_PARTICIPANTS_SUCCESS, GET_FORUM_PARTICIPANTS_FAILURE,
    GET_FORUM_DETAILS, GET_FORUM_DETAILS_SUCCESS, GET_FORUM_DETAILS_FAILURE,
    GET_FORUM_REPLIES, GET_FORUM_REPLIES_SUCCESS, GET_FORUM_REPLIES_FAILURE,
    POST_PHOTO_DESCRIPTION, POST_PHOTO_DESCRIPTION_SUCCESS, POST_PHOTO_DESCRIPTION_FAILURE,
    UPLOAD_PHOTO, UPLOAD_PHOTO_SUCCESS,UPLOAD_PHOTO_FAILURE,
    REMOVE_FORUM_PARTICIPANTS, REMOVE_FORUM_PARTICIPANTS_SUCCESS, REMOVE_FORUM_PARTICIPANTS_FAILURE,
    DELETE_FORUM, DELETE_FORUM_SUCCESS, DELETE_FORUM_FAILURE,
    GET_REPORTED_FORUM_COMMENTS, GET_REPORTED_FORUM_COMMENTS_SUCCESS, GET_REPORTED_FORUM_COMMENTS_FAILURE,
    GET_REPORTED_COMMENT_DETAIL, GET_REPORTED_COMMENT_DETAIL_SUCCESS, GET_REPORTED_COMMENT_DETAIL_FAILURE,
    DELETE_REPORTED_COMMENT, DELETE_REPORTED_COMMENT_SUCCESS, DELETE_REPORTED_COMMENT_FAILURE
} from "../constants";

export default class ForumAction {
    static GetForumList(payload) {
        console.log("this is the forum list", payload)
        return {
            type: GET_FORUM_LIST,
            payload
        }
    }
    static GetForumListSuccess(payload) {
        // console.log("", payload)
        return {
            type: GET_FORUM_LIST_SUCCESS,
            payload
        }
    }
    static GetForumListFailure(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: GET_FORUM_LIST_FAILURE,
            payload
        }
    }

    static GetForumParticipants(payload) {
        console.log("this is the forum participants action", payload)
        return {
            type: GET_FORUM_PARTICIPANTS,
            payload
        }
    }
    static GetForumParticipantsSuccess(payload) {
        console.log("this is the forum participants action suces", payload)
        return {
            type: GET_FORUM_PARTICIPANTS_SUCCESS,
            payload
        }
    }
    static GetForumParticipantsFailure(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: GET_FORUM_PARTICIPANTS_FAILURE,
            payload
        }
    }

    static GetForumDetails(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: GET_FORUM_DETAILS,
            payload
        }
    }
    static GetForumDetailsSuccess(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: GET_FORUM_DETAILS_SUCCESS,
            payload
        }
    }
    static GetForumDetailsFailure(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: GET_FORUM_DETAILS_FAILURE,
            payload
        }
    }

    static GetForumReplies(payload,cb) {
        
        return {
            type: GET_FORUM_REPLIES,
            payload,
            cb
        }
    }
    static GetForumRepliesSuccess(payload) {
        console.log("this is the action of the more replies", payload)
        return {
            type: GET_FORUM_REPLIES_SUCCESS,
            payload
        }
    }
    static GetForumRepliesFailure(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: GET_FORUM_REPLIES_FAILURE,
            payload
        }
    }

    static PostPhotoDescription(payload) {
        console.log("this is the forum list", payload)
        return {
            type: POST_PHOTO_DESCRIPTION,
            payload
        }
    }
    static PostPhotoDescriptionSuccess(payload) {
        // console.log("", payload)
        return {
            type: POST_PHOTO_DESCRIPTION_SUCCESS,
            payload
        }
    }
    static PostPhotoDescriptionFailure(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: POST_PHOTO_DESCRIPTION_FAILURE,
            payload
        }
    }

    static UploadPhoto(payload,cb) {
        console.log("this is the forum upload photo", payload)
        return {
            type: UPLOAD_PHOTO,
            payload,
            cb
        }
    }
    static UploadPhotoSuccess(payload) {
        // console.log("", payload)
        return {
            type: UPLOAD_PHOTO_SUCCESS,
            payload
        }
    }
    static UploadPhotoFailure(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: UPLOAD_PHOTO_FAILURE,
            payload
        }
    }

    static RemoveForumParticipants(payload, cb) {
        console.log("this is the forum participants action", payload)
        return {
            type: REMOVE_FORUM_PARTICIPANTS,
            payload,
            cb
        }
    }
    static RemoveForumParticipantsSuccess(payload) {
        console.log("this is the forum participants action suces", payload)
        return {
            type: REMOVE_FORUM_PARTICIPANTS_SUCCESS,
            payload
        }
    }
    static RemoveForumParticipantsFailure(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: REMOVE_FORUM_PARTICIPANTS_FAILURE,
            payload
        }
    }

    static DeleteForum(payload) {
        console.log("this is the content payload of the posts id", payload)
        return {
            type: DELETE_FORUM,
            payload
        }
    }
    static DeleteForumSuccess(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: DELETE_FORUM_SUCCESS,
            payload
        }
    }
    static DeleteForumFailure(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: DELETE_FORUM_FAILURE,
            payload
        }
    }

    static GetReportForumComment(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: GET_REPORTED_FORUM_COMMENTS,
            payload
        }
    }
    static GetReportForumCommentSuccess(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: GET_REPORTED_FORUM_COMMENTS_SUCCESS,
            payload
        }
    }
    static GetReportForumCommentFailure(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: GET_REPORTED_FORUM_COMMENTS_FAILURE,
            payload
        }
    }

    static GetReportedCommentDetail(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: GET_REPORTED_COMMENT_DETAIL,
            payload
        }
    }
    static GetReportedCommentDetailSuccess(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: GET_REPORTED_COMMENT_DETAIL_SUCCESS,
            payload
        }
    }
    static GetReportedCommentDetailFailure(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: GET_REPORTED_COMMENT_DETAIL_FAILURE,
            payload
        }
    }

    static DeleteReportedComment(payload) {
        console.log("this is the content payload of the posts id", payload)
        return {
            type: DELETE_REPORTED_COMMENT,
            payload
        }
    }
    static DeleteReportedCommentSuccess(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: DELETE_REPORTED_COMMENT_SUCCESS,
            payload
        }
    }
    static DeleteReportedCommentFailure(payload) {
        console.log("this is the content payload of the posts", payload)
        return {
            type: DELETE_REPORTED_COMMENT_FAILURE,
            payload
        }
    }
}