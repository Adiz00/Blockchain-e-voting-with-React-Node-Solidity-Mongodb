import {
    GET_FORUM_LIST, GET_FORUM_LIST_SUCCESS, GET_FORUM_LIST_FAILURE,
    GET_FORUM_PARTICIPANTS, GET_FORUM_PARTICIPANTS_SUCCESS, GET_FORUM_PARTICIPANTS_FAILURE,
    GET_FORUM_DETAILS, GET_FORUM_DETAILS_SUCCESS, GET_FORUM_DETAILS_FAILURE,
    GET_FORUM_REPLIES, GET_FORUM_REPLIES_SUCCESS, GET_FORUM_REPLIES_FAILURE,
    UPLOAD_PHOTO, UPLOAD_PHOTO_SUCCESS, UPLOAD_PHOTO_FAILURE,
    REMOVE_FORUM_PARTICIPANTS, REMOVE_FORUM_PARTICIPANTS_SUCCESS, REMOVE_FORUM_PARTICIPANTS_FAILURE,
    DELETE_FORUM, DELETE_FORUM_SUCCESS, DELETE_FORUM_FAILURE,
    GET_REPORTED_FORUM_COMMENTS, GET_REPORTED_FORUM_COMMENTS_SUCCESS, GET_REPORTED_FORUM_COMMENTS_FAILURE,
    GET_REPORTED_COMMENT_DETAIL, GET_REPORTED_COMMENT_DETAIL_SUCCESS, GET_REPORTED_COMMENT_DETAIL_FAILURE,
    DELETE_REPORTED_COMMENT, DELETE_REPORTED_COMMENT_SUCCESS, DELETE_REPORTED_COMMENT_FAILURE
} from "../constants";

const initialState = {
    forumData: [],
    forumParticipants: [],
    forumDeatil: [],
    forumReplies: {},
    reportForumComment: [],
    reportedCommentDetail: [],
    loader: false
}

export default function ForumReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FORUM_LIST:
            state = {
                ...state,
                loader: true
            }

            break;

        case GET_FORUM_LIST_SUCCESS:
            state = {
                forumData: action.payload,
                loader: false
            }
            break;

        case GET_FORUM_LIST_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case GET_FORUM_PARTICIPANTS:
            state = {
                ...state,
                loader: true
            }

            break;

        case GET_FORUM_PARTICIPANTS_SUCCESS:
            console.log('This is forum participants data reducer', state.forumParticipants)
            state = {
                ...state,
                forumParticipants: action.payload,
                loader: false
            }
            break;

        case GET_FORUM_PARTICIPANTS_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case GET_FORUM_DETAILS:
            state = {
                ...state,
                loader: true
            }

            break;

        case GET_FORUM_DETAILS_SUCCESS:
            console.log('This is forum participants data reducer', state)
            state = {
                ...state,
                forumDeatil: action.payload,
                loader: false
            }
            break;

        case GET_FORUM_DETAILS_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case GET_FORUM_REPLIES:
            state = {
                ...state,
                loader: true
            }

            break;

        case GET_FORUM_REPLIES_SUCCESS:
            console.log('This is forum participants data reducer', action.payload?.data?.rows)
            for (let item of action.payload?.data?.rows) {

                if(state.forumReplies[item.parentId]){
                    state.forumReplies[item.parentId].push(item)
                }else{
                    state.forumReplies[item.parentId] = []
                    
                    state.forumReplies[item.parentId].push(item)
                }
                
            }
            state = {
                ...state,
                // forumReplies: action.payload,
                loader: false
            }
            break;

        case GET_FORUM_REPLIES_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;


        case REMOVE_FORUM_PARTICIPANTS:
            state = {
                ...state,
                loader: true
            }

            break;

        case REMOVE_FORUM_PARTICIPANTS_SUCCESS:
            // console.log('This is forum participants data reducer', state.forumParticipants)
            state = {
                ...state,
                forumParticipants: action.payload,
                loader: false
            }
            break;

        case REMOVE_FORUM_PARTICIPANTS_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case UPLOAD_PHOTO:
            state = {
                ...state,
                loader: true
            }

            break;

        case UPLOAD_PHOTO_SUCCESS:
            // console.log('This is forum participants data reducer', state.forumDeatil)
            state = {
                ...state,
                // forumDeatil: action.payload,
                loader: false
            }
            break;

        case UPLOAD_PHOTO_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case DELETE_FORUM:
            state = {
                ...state,
                loader: true
            }

            break;

        case DELETE_FORUM_SUCCESS:
            state = {
                forumData: action.payload,
                loader: false
            }
            break;

        case DELETE_FORUM_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case GET_REPORTED_FORUM_COMMENTS:
            state = {
                ...state,
                loader: true
            }

            break;

        case GET_REPORTED_FORUM_COMMENTS_SUCCESS:
            state = {
                ...state,
                reportForumComment: action.payload,
                loader: false
            }
            break;

        case GET_REPORTED_FORUM_COMMENTS_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case GET_REPORTED_COMMENT_DETAIL:
            state = {
                ...state,
                loader: true
            }

            break;

        case GET_REPORTED_COMMENT_DETAIL_SUCCESS:
            state = {
                ...state,
                reportedCommentDetail: action.payload,
                loader: false
            }
            break;

        case GET_REPORTED_COMMENT_DETAIL_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case DELETE_REPORTED_COMMENT:
            state = {
                ...state,
                loader: true
            }

            break;

        case DELETE_REPORTED_COMMENT_SUCCESS:
            state = {
                forumData: action.payload,
                loader: false
            }
            break;

        case DELETE_REPORTED_COMMENT_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;


    }

    return state;
}