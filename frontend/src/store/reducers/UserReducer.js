import {
    GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILURE,
    USER_UPDATE, USER_UPDATE_SUCCESS, USER_UPDATE_FAILURE,
    USER_DETAIL, USER_DETAIL_FAILURE, USER_DETAIL_SUCCESS,
    USER_DETAIL_POST, USER_DETAIL_POST_SUCCESS, USER_DETAIL_POST_FAILURE,
    GET_REPORT_USERS, GET_REPORT_USERS_SUCCESS, GET_REPORT_USERS_FAILURE,
    REPORT_USER_DETAIL, REPORT_USER_DETAIL_SUCCESS, REPORT_USER_DETAIL_FAILURE,
    REPORT_USER_UPDATE, REPORT_USER_UPDATE_SUCCESS, REPORT_USER_UPDATE_FAILURE
} from "../constants";

const initialState = {
    users: [],
    userDetail: [],
    userPosts: [],
    reported_users: [],
    reportedUserDetail: [],
    loader: false
}

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            state = {
                ...state,
                loader: true
            }

            break;

        case GET_USERS_SUCCESS:
            state = {
                users: action.payload,
                loader: false
            }
            break;

        case GET_USERS_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case USER_UPDATE:
            console.log(state)
            state = {
                ...state,
                loader: true
            }
            break;

        case USER_UPDATE_SUCCESS:
            state = {
                ...state,
                loader: false
            }
            break;

        case USER_UPDATE_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case USER_DETAIL:
            state = {
                ...state,
                loader: true
            }
            break;

        case USER_DETAIL_SUCCESS:
            state = {
                ...state,
                userDetail: action.payload,
                loader: false
            }
            break;

        case USER_DETAIL_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;
        case USER_DETAIL_POST:
            state = {
                ...state,
                loader: true
            }
            break;

        case USER_DETAIL_POST_SUCCESS:
            state = {
                ...state,
                userPosts: action.payload,
                loader: false
            }
            break;

        case USER_DETAIL_POST_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;
        case GET_REPORT_USERS:
            state = {
                ...state,
                loader: true
            }

            break;

        case GET_REPORT_USERS_SUCCESS:
            state = {
                reported_users: action.payload,
                loader: false
            }
            break;

        case GET_REPORT_USERS_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case REPORT_USER_UPDATE:
            console.log(state)
            state = {
                ...state,
                loader: true
            }
            break;

        case REPORT_USER_UPDATE_SUCCESS:
            state = {
                ...state,
                loader: false
            }
            break;

        case REPORT_USER_UPDATE_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case REPORT_USER_DETAIL:
            state = {
                ...state,
                loader: true
            }
            break;

        case REPORT_USER_DETAIL_SUCCESS:
            state = {
                ...state,
                reportedUserDetail: action.payload,
                loader: false
            }
            break;

        case REPORT_USER_DETAIL_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        default:
            break;
    }

    return state;
}