import {
    ALL_EVENT_LIST, ALL_EVENT_LIST_SUCCESS, ALL_EVENT_LIST_FAILURE,
    DELETE_EVENT, DELETE_EVENT_FAILURE, DELETE_EVENT_SUCCESS,
    EVENT_UPDATE, EVENT_UPDATE_SUCCESS, EVENT_UPDATE_FAILURE,
    CREATE_EVENT, CREATE_EVENT_SUCCESS, CREATE_EVENT_FAILURE
} from "../constants";

const initialState = {
    eventData: [],
    loader: false
}

export default function EventReducer(state = initialState, action) {
    switch (action.type) {
        case ALL_EVENT_LIST:
            state = {
                ...state,
                loader: true
            }

            break;

        case ALL_EVENT_LIST_SUCCESS:
            state = {
                eventData: action.payload,
                loader: false
            }
            break;

        case ALL_EVENT_LIST_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;
        case CREATE_EVENT:
            state = {
                ...state,
                loader: true
            }

            break;

        case CREATE_EVENT_SUCCESS:
            state = {
                ...state,
                loader: false
            }
            console.log("Event created")
            break;

        case CREATE_EVENT_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case DELETE_EVENT:
            state = {
                ...state,
                loader: true
            }

            break;

        case DELETE_EVENT_SUCCESS:
            state = {
                eventData: action.payload,
                loader: false
            }
            break;

        case DELETE_EVENT_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case EVENT_UPDATE:
            state = {
                ...state,
                loader: true
            }

            break;

        case EVENT_UPDATE_SUCCESS:
            state = {
                ...state,
                loader: false
            }
            break;

        case EVENT_UPDATE_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        
    }

    return state;
}