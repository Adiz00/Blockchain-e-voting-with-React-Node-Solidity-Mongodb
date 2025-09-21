import {
    ALL_EVENT_LIST, ALL_EVENT_LIST_SUCCESS, ALL_EVENT_LIST_FAILURE,
    DELETE_EVENT, DELETE_EVENT_FAILURE, DELETE_EVENT_SUCCESS,
    EVENT_UPDATE, EVENT_UPDATE_SUCCESS, EVENT_UPDATE_FAILURE,
    CREATE_EVENT, CREATE_EVENT_SUCCESS, CREATE_EVENT_FAILURE
} from "../constants";

export default class EventAction {
    static AllEvents(payload) {
        // console.log('this is event console',payload)
        return {
            type: ALL_EVENT_LIST,
            payload
        }
    }

    static AllEventsSuccess(payload) {
        console.log('this is event console',payload)
        return {
            type: ALL_EVENT_LIST_SUCCESS,
            payload
        }
    }

    static AllEventsFailure(payload) {
        return {
            type: ALL_EVENT_LIST_FAILURE,
            payload
        }
    }

    static CreateEvent(payload,cb) {
        console.log('Event create successfully',payload)
        return {
            type: CREATE_EVENT,
            payload,
            cb
        }
    }

    static CreateEventSuccess(payload) {
        
        return {
            type: CREATE_EVENT_SUCCESS,
            payload
        }
    }

    static CreateEventFailure(payload) {
        return {
            type: CREATE_EVENT_FAILURE,
            payload
        }
    }

    static UpdateEvent(payload,cb) {
        console.log("The event update successfully",payload)
        return {
            type: EVENT_UPDATE,
            payload,
            cb
        }
    }

    static UpdateEventSuccess(payload) {
        return {
            type: EVENT_UPDATE_SUCCESS,
            payload
        }
    }

    static UpdateEventFailure(payload) {
        return {
            type: EVENT_UPDATE_FAILURE,
            payload
        }
    }

    static DeleteEvent(payload) {
        console.log('Event delete successfully',payload)
        return {
            type: DELETE_EVENT,
            payload
        }
    }

    static DeleteEventSuccess(payload) {
        return {
            type: DELETE_EVENT_SUCCESS,
            payload
        }
    }

    static DeleteEventFailure(payload) {
        return {
            type: DELETE_EVENT_FAILURE,
            payload
        }
    }

}