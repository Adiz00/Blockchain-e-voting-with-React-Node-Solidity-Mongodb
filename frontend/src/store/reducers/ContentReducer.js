import {
    GET_CONTENT_POSTS, GET_CONTENT_POSTS_FAILURE, GET_CONTENT_POSTS_SUCCESS,
    POSTS_CONTENT_DETAIL, POSTS_CONTENT_DETAIL_FAILURE, POSTS_CONTENT_DETAIL_SUCCESS,
    POSTS_CONTENT_UPDATE, POSTS_CONTENT_UPDATE_FAILURE, POSTS_CONTENT_UPDATE_SUCCESS,
    GET_CONTENT_COMMENTS, GET_CONTENT_COMMENTS_FAILURE, GET_CONTENT_COMMENTS_SUCCESS,
    COMMENTS_CONTENT_DETAIL, COMMENTS_CONTENT_DETAIL_FAILURE, COMMENTS_CONTENT_DETAIL_SUCCESS,
    COMMENTS_CONTENT_UPDATE, COMMENTS_CONTENT_UPDATE_FAILURE, COMMENTS_CONTENT_UPDATE_SUCCESS,
    GET_REPORT_CHATS,
    GET_REPORT_CHATS_SUCCESS,
    GET_REPORT_CHATS_FAILURE,
    CHATS_CONTENT_DETAIL,
    CHATS_CONTENT_DETAIL_SUCCESS,
    CHATS_CONTENT_DETAIL_FAILURE,
} from "../constants";

const initialState = {
    reported_posts: [],
    reportDetailPosts: [],
    reportDetailComments: [],
    reported_comments: [],
    loader: false
}

export default function ContentReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CONTENT_POSTS:
            state = {
                ...state,
                loader: true
            }

            break;

        case GET_CONTENT_POSTS_SUCCESS:
            state = {
                reported_posts: action.payload,
                loader: false
            }
            break;

        case GET_CONTENT_POSTS_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case POSTS_CONTENT_UPDATE:
            console.log(state)
            state = {
                ...state,
                loader: true
            }
            break;

        case POSTS_CONTENT_UPDATE_SUCCESS:
            state = {
                ...state,
                loader: false
            }
            break;

        case POSTS_CONTENT_UPDATE_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case POSTS_CONTENT_DETAIL:
            state = {
                ...state,
                loader: true
            }
            break;

        case POSTS_CONTENT_DETAIL_SUCCESS:
            state = {
                ...state,
                reportDetailPosts: action.payload,
                loader: false
            }
            break;

        case POSTS_CONTENT_DETAIL_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;
        case GET_CONTENT_COMMENTS:
            state = {
                ...state,
                loader: true
            }

            break;

        case GET_CONTENT_COMMENTS_SUCCESS:
            state = {
                reported_comments: action.payload,
                loader: false
            }
            // console.log("this is the middleware of the comment",state)
            break;

        case GET_CONTENT_COMMENTS_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case COMMENTS_CONTENT_UPDATE:
            console.log(state)
            state = {
                ...state,
                loader: true
            }
            break;

        case COMMENTS_CONTENT_UPDATE_SUCCESS:
            state = {
                ...state,
                loader: false
            }
            break;

        case COMMENTS_CONTENT_UPDATE_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case COMMENTS_CONTENT_DETAIL:
            state = {
                ...state,
                loader: true
            }
            break;

        case COMMENTS_CONTENT_DETAIL_SUCCESS:
            state = {
                ...state,
                reportDetailComments: action.payload,
                loader: false
            }
            break;

        case COMMENTS_CONTENT_DETAIL_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;
        case GET_REPORT_CHATS:
            // alert("get report chats")
            state = {
                ...state,
                loader: true
            }
            break;

        case GET_REPORT_CHATS_SUCCESS:
            // alert("get report chats success")
            state = {
                ...state,
                reportedChats: action.payload,
                loader: false
            }
            break;

        case GET_REPORT_CHATS_FAILURE:
            // alert("get report chats failure")
            state = {
                ...state,
                loader: false
            }
            break;

        case CHATS_CONTENT_DETAIL:
            // alert("get report chats")
            state = {
                ...state,
                loader: true
            }
            break;

        case CHATS_CONTENT_DETAIL_SUCCESS:
            // alert("get report chats success")
            state = {
                ...state,
                reportDetailChats: action.payload,
                loader: false
            }
            break;

        case CHATS_CONTENT_DETAIL_FAILURE:
            // alert("get report chats failure")
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