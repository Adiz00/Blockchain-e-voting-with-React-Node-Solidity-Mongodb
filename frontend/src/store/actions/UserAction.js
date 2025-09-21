import {
    GET_USERS, GET_USERS_FAILURE, GET_USERS_SUCCESS,
    USER_DETAIL, USER_DETAIL_FAILURE, USER_DETAIL_SUCCESS,
    USER_DETAIL_POST, USER_DETAIL_POST_SUCCESS,USER_DETAIL_POST_FAILURE,
    USER_UPDATE, USER_UPDATE_FAILURE, USER_UPDATE_SUCCESS,
    GET_REPORT_USERS, GET_REPORT_USERS_SUCCESS, GET_REPORT_USERS_FAILURE,
    REPORT_USER_DETAIL, REPORT_USER_DETAIL_SUCCESS, REPORT_USER_DETAIL_FAILURE,
    REPORT_USER_UPDATE, REPORT_USER_UPDATE_SUCCESS, REPORT_USER_UPDATE_FAILURE
} from "../constants";

export default class UserAction {
    static GetUsers(payload) {
        return {
            type: GET_USERS,
            payload
        }
    }


    static GetUsersSuccess(payload) {
        console.log("this is the user payload", payload)
        return {
            type: GET_USERS_SUCCESS,
            payload
        }
    }

    static GetUsersFailure() {
        return {
            type: GET_USERS_FAILURE
        }
    }

    static StatusUpdate(payload, cb) {
        console.log(payload)
        return {
            type: USER_UPDATE,
            payload,
            cb
        }
    }

    static StatusUpdateSuccess() {
        return {
            type: USER_UPDATE_SUCCESS
        }

    }

    static StatusUpdateFailure() {
        return {
            type: USER_UPDATE_FAILURE
        }
    }

    static UserDetail(payload) {
        console.log("this is the user detail", payload)
        return {
            type: USER_DETAIL,
            payload
        }
    }
    static UserDetailSuccess(payload) {
        return {
            type: USER_DETAIL_SUCCESS,
            payload
        }
    }

    static UserDetailFailure() {
        return {
            type: USER_DETAIL_FAILURE
        }
    }

    static UserDetailPost(payload) {
        console.log("this is the user detail", payload)
        return {
            type: USER_DETAIL_POST,
            payload
        }
    }
    static UserDetailPostSuccess(payload) {
        return {
            type: USER_DETAIL_POST_SUCCESS,
            payload
        }
    }

    static UserDetailPostFailure() {
        return {
            type: USER_DETAIL_POST_FAILURE
        }
    }
    static GetReportUsers(payload) {
        return {
            type: GET_REPORT_USERS,
            payload
        }
    }


    static GetReportUsersSuccess(payload) {
        console.log("this is the user payload", payload)
        return {
            type: GET_REPORT_USERS_SUCCESS,
            payload
        }
    }

    static GetReportUsersFailure() {
        return {
            type: GET_REPORT_USERS_FAILURE
        }
    }

    static ReportUserStatusUpdate(payload, cb) {
        console.log("this is report user action",payload)
        return {
            type: REPORT_USER_UPDATE,
            payload,
            cb
        }
    }

    static ReportUserStatusUpdateSuccess() {
        return {
            type: REPORT_USER_UPDATE_SUCCESS
        }

    }

    static ReportUserStatusUpdateFailure() {
        return {
            type: REPORT_USER_UPDATE_FAILURE
        }
    }

    static ReportUserUserDetail(payload) {
        console.log("this is the user detail", payload)
        return {
            type: REPORT_USER_DETAIL,
            payload
        }
    }
    static ReportUserUserDetailSuccess(payload) {
        return {
            type: REPORT_USER_DETAIL_SUCCESS,
            payload
        }
    }

    static ReportUserUserDetailFailure() {
        return {
            type: REPORT_USER_DETAIL_FAILURE
        }
    }
}