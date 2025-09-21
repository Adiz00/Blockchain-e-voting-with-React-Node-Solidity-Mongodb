import {
    AUTHENTICATED,
    SAVE_USER,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    ADD_POST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE,
    LOADER_FALSE, LOADER_TRUE, FORGET_PASSWORD, FORGET_PASSWORD_SUCCESS, FORGET_PASSWORD_FAILURE,
    VERIFIED_OTP, VERIFIED_OTP_SUCCESS, VERIFIED_OTP_FAILURE,
    PASSWORD_RESET, PASSWORD_RESET_SUCCESS, PASSWORD_RESET_FAILURE,
    CHANGE_PASSWORD, CHANGE_PASSWORD_FAILURE, CHANGE_PASSWORD_SUCCESS,
    LOADER
} from '../constants'


export default class AppAction {

    static isAuthenticated(payload, cb) {
        // console.log(cb,'action')
        return {
            type: AUTHENTICATED,
            payload,
            cb
        }
    }
    static saveUser(payload, cb) {
        // console.log(cb,'save user action')
        return {
            type: SAVE_USER,
            payload,
            cb
        }
    }
    static loader(payload, cb) {
        // console.log(cb,'action')
        return {
            type: LOADER,
            payload,
            cb
        }
    }
    static SignIn(payload, cb) {
        // console.log(cb)
        return {
            type: SIGNIN,
            payload,
            cb
        }
    }
    static SignInSuccess(payload) {
        return {
            type: SIGNIN_SUCCESS,
            payload
        }
    }
    static SignInFailure() {
        return {
            type: SIGNIN_FAILURE
        }
    }

    static ForgetPassword(payload, cb) {
        return {
            type: FORGET_PASSWORD,
            payload,
            cb
        }
    }

    static ForgetPasswordSuccess(payload, cb) {
        return {
            type: FORGET_PASSWORD_SUCCESS,
            payload,
            cb

        }
    }

    static ForgetPasswordFailure() {
        return {
            type: FORGET_PASSWORD_FAILURE,

        }
    }



    static PasswordReset(payload, cb) {
        // console.log(payload)
        return {
            type: PASSWORD_RESET,
            payload,
            cb
        }
    }

    static PasswordResetSuccess() {
        return {
            type: PASSWORD_RESET_SUCCESS
        }
    }

    static PasswordResetFailure() {
        return {
            type: PASSWORD_RESET_FAILURE
        }
    }

    static ChangePassword(payload, cb) {
        // console.log(cb)
        return {
            type: CHANGE_PASSWORD,
            payload,
            cb
        }
    }

    static ChangePasswordSuccess() {
        return {
            type: CHANGE_PASSWORD_SUCCESS
        }
    }

    static ChangePasswordFailure() {
        return {
            type: CHANGE_PASSWORD_FAILURE
        }
    }

    static Logout() {
        return {
            type: LOGOUT

        }
    }
    static LogoutSuccess() {
        return {
            type: LOGOUT_SUCCESS
        }
    }
    static LogoutFailure() {
        return {
            type: LOGOUT_FAILURE
        }
    }

    static AddPost(payload) {
        return {
            type: ADD_POST,
            payload
        }
    }
    static AddPostSuccess(payload) {
        return {
            type: ADD_POST_SUCCESS,
            payload
        }
    }
    static AddPostFailure() {
        return {
            type: ADD_POST_FAILURE
        }
    }

    static GetPosts() {
        return {
            type: GET_POSTS
        }
    }
    static GetPostsSuccess(payload) {
        return {
            type: GET_POSTS_SUCCESS,
            payload
        }
    }
    static GetPostsFailure() {
        return {
            type: GET_POSTS_FAILURE
        }
    }

    static LoaderTrue() {
        return {
            type: LOADER_TRUE
        }
    }
    static LoaderFalse() {
        return {
            type: LOADER_FALSE
        }
    }




    static VerifiedOtp(payload, cb) {
        return {
            type: VERIFIED_OTP,
            payload,
            cb
        }
    }

    static VerifiedOtpSuccess() {
        // console.log('verified sucess otp action')
        return {
            type: VERIFIED_OTP_SUCCESS
        }
    }

    static VerifiedOtpFailure() {
        // console.log("chalaaaa");
        return {
            type: VERIFIED_OTP_FAILURE,
        }
    }

}