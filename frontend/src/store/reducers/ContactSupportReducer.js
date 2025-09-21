import {
    GET_CONTACT_USERS, GET_CONTACT_USERS_SUCCESS, GET_CONTACT_USERS_FAILURE,
    POST_CONTACT_USERS_RESPOND, POST_CONTACT_USERS_RESPOND_SUCCESS, POST_CONTACT_USERS_RESPOND_FAILURE
} from "../constants";

const initialState = {
    users: [],
    loader:false
}

export default function ContactSupportReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CONTACT_USERS:
            state = {
                ...state,
                loader: true
            }

            break;

        case GET_CONTACT_USERS_SUCCESS:
            state = {
                users: action.payload,
                loader: false
            }
            break;

        case GET_CONTACT_USERS_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;
        case POST_CONTACT_USERS_RESPOND:
            state = {
                ...state,
                loader: true
            }

            break;

        case POST_CONTACT_USERS_RESPOND_SUCCESS:
            state = {
                ...state,
                users: action.payload,
                loader: false
            }
            break;

        case POST_CONTACT_USERS_RESPOND_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

    }

    return state;
}