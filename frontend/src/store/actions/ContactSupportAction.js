import {
    GET_CONTACT_USERS, GET_CONTACT_USERS_SUCCESS, GET_CONTACT_USERS_FAILURE,
    POST_CONTACT_USERS_RESPOND, POST_CONTACT_USERS_RESPOND_SUCCESS, POST_CONTACT_USERS_RESPOND_FAILURE
} from "../constants";
export default class ContactSupportAction {
    static GetContactUsers(payload) {
        return {
            type: GET_CONTACT_USERS,
            payload
        }
    }

    static GetContactUsersSuccess(payload) {
        console.log("this is the user payload", payload)
        return {
            type: GET_CONTACT_USERS_SUCCESS,
            payload
        }
    }

    static GetContactUsersFailure() {
        return {
            type: GET_CONTACT_USERS_FAILURE
        }
    }
    static PostContactUsersRespond(payload,cb) {
        console.log("this is the user payload of the respond", payload)
        return {
            type: POST_CONTACT_USERS_RESPOND,
            payload,
            cb
        }
    }


    static PostContactUsersRespondSuccess(payload) {
        console.log("this is the user payload of the respond", payload)
        return {
            type: POST_CONTACT_USERS_RESPOND_SUCCESS,
            payload
        }
    }

    static PostContactUsersRespondFailure() {
        return {
            type: POST_CONTACT_USERS_RESPOND_FAILURE
        }
    }
}