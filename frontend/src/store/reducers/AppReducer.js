import {
    AUTHENTICATED,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    ADD_POST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    LOADER_TRUE, LOADER_FALSE, FORGET_PASSWORD, FORGET_PASSWORD_SUCCESS, FORGET_PASSWORD_FAILURE,
    PASSWORD_RESET, PASSWORD_RESET_SUCCESS, PASSWORD_RESET_FAILURE,
    VERIFIED_OTP, VERIFIED_OTP_SUCCESS, VERIFIED_OTP_FAILURE,
    CHANGE_PASSWORD, CHANGE_PASSWORD_FAILURE, CHANGE_PASSWORD_SUCCESS,
    LOADER,
    SAVE_USER

} from '../constants';

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "",
    userData: {},
    loader: false,
    isAuthenticated: false,
}

export default function AppReducer(state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATED:
            // console.log('Auth reducer', action.payload)
            state = {
                ...state,
                isAuthenticated: action.payload,
                // loader: action.payload
            }
            break;

        case SAVE_USER:
            console.log('save user reducer', action.payload )
            // localStorage.setItem("user", JSON.stringify(action?.payload?.token));
            state = {
                ...state,
                // user: JSON.stringify(action?.payload?.token),
                userData: { 
                    email: action?.payload?.email, 
                    name: action?.payload?.name,
                    role: action?.payload?.role
                },
                // loader: action.payload
                userData: { ...action.payload },
            }
            break;

        case LOADER:
            // console.log('Auth reducer loader', action.payload)
            state = {
                ...state,
                // isAuthenticated: action.payload,
                loader: action.payload
            }
            break;
        // case SIGNIN:
        //     state = {
        //         ...state,
        //         loader: true
        //     }
        //     break;
        // case SIGNIN_SUCCESS:
        //     state = {
        //         ...state,
        //         user: action.payload,
        //         loader: false
        //     }
        //     break;
        // case SIGNIN_FAILURE:
        //     state = {
        //         ...state,
        //         loader: false
        //     }
        //     break;

        // case LOGOUT:
        //     state = {
        //         ...state,
        //         loader: true
        //     }
        //     break;
        // case LOGOUT_SUCCESS:
        //     state = {
        //         user: {},
        //         posts: [],
        //         loader: false
        //     }
        //     break;
        // case LOGOUT_FAILURE:
        //     state = {
        //         ...state,
        //         loader: false
        //     }
        //     break;

        // case FORGET_PASSWORD:
        //     state = {
        //         ...state,
        //         loader: true
        //     }
        //     break;

        // case FORGET_PASSWORD_SUCCESS:
        //     state = {
        //         ...state,
        //         loader: false,
        //     }
        //     break;

        // case FORGET_PASSWORD_FAILURE:
        //     state = {
        //         ...state,
        //         loader: false
        //     }
        //     break;

        // case VERIFIED_OTP:
        //     state = {
        //         ...state,
        //         loader: true
        //     }
        //     console.log("verified state", state)
        //     break

        // case VERIFIED_OTP_SUCCESS:
        //     console.log("verified state reducer success", state)

        //     state = {
        //         ...state,
        //         loader: false
        //     }
        //     break;

        // case VERIFIED_OTP_FAILURE:
        //     console.log("verified state failure", state)
        //     state = {
        //         ...state,
        //         loader: false
        //     }
        //     break;

        // case PASSWORD_RESET:
        //     state = {
        //         ...state,
        //         loader: true
        //     }
        //     break;

        // case PASSWORD_RESET_SUCCESS:
        //     state = {
        //         user: {},
        //         posts: [],
        //         loader: false
        //     }
        //     break;

        // case PASSWORD_RESET_FAILURE:
        //     state = {
        //         ...state,
        //         loader: false
        //     }
        //     break;

        // case CHANGE_PASSWORD:
        //     state = {
        //         ...state,
        //         loader: true
        //     }
        //     break;

        // case CHANGE_PASSWORD_SUCCESS:
        //     state = {
        //         ...state,
        //         loader: false
        //     }
        //     break;

        // case CHANGE_PASSWORD_FAILURE:
        //     state = {
        //         ...state,
        //         loader: false
        //     }
        //     break;

        // case ADD_POST:
        //     state = {
        //         ...state,
        //         loader: true
        //     }
        //     break;
        // case ADD_POST_SUCCESS:
        //     // state.posts.unshift(action.payload)
        //     state = {
        //         ...state,
        //         posts: [action.payload, ...state.posts],
        //         loader: false
        //     }
        //     break;
        // case ADD_POST_FAILURE:
        //     state = {
        //         ...state,
        //         loader: false
        //     }
        //     break;

        // case GET_POSTS:
        //     state = {
        //         ...state,
        //         loader: true
        //     }
        //     break;
        // case GET_POSTS_SUCCESS:
        //     state = {
        //         ...state,
        //         posts: action.payload,
        //         loader: false
        //     }
        //     break;
        // case GET_POSTS_FAILURE:
        //     state = {
        //         ...state,
        //         loader: false
        //     }
        //     break;


        // case LOADER_TRUE:
        //     state = {
        //         ...state,
        //         loader: true
        //     }
        //     break;

        // case LOADER_FALSE:
        //     state = {
        //         ...state,
        //         loader: false
        //     }
        //     break;





        case VERIFIED_OTP:
            state = {
                ...state,
                loader: true
            }
            // console.log("verified state", state)
            break

        case VERIFIED_OTP_SUCCESS:
            // console.log("verified state reducer success", state)

            state = {
                ...state,
                loader: false
            }
            break;

        case VERIFIED_OTP_FAILURE:
            // console.log("verified state failure", state)
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