import {
    DASHBOARD_COUNTS, DASHBOARD_COUNTS_FAILURE, DASHBOARD_COUNTS_SUCCESS,
    DASHBOARD_ACTIVITY, DASHBOARD_ACTIVITY_SUCCESS, DASHBOARD_ACTIVITY_FAILURE,
    DASHBOARD_GRAPH,
    DASHBOARD_GRAPH_SUCCESS,
    DASHBOARD_GRAPH_FAILURE,
} from "../constants";

const initialState = {
    // postsCount: {
    //     today: 0,
    //     yesterday: 0,
    //     totalPosts: 0
    // },
    // usersCount: {
    //     today: 0,
    //     yesterday: 0,
    //     totalUsers: 0
    // },
    // commentsCount: {
    //     today: 0,
    //     yesterday: 0,
    //     totalComments: 0
    // },
    // messagesCount: 0,
    loader: false,
    // newUsers: [], 
    // activity: []  
}

export default function DashboardReducer(state = initialState, action) {
    switch (action.type) {
        
        case DASHBOARD_COUNTS:
            // alert('Dash count reducer')
            state = {
                ...state,
                loader: true
            }
            break;
        case DASHBOARD_COUNTS_SUCCESS:
            // alert('Dash count reducer success')
            state = {
                ...state,
                loader: false,
                dashboardCounts: action.payload,
                // ...action.payload
            }
            break;
        case DASHBOARD_COUNTS_FAILURE:
            // alert('Dash count reducer failure')
            state = {
                ...state,
                loader: false
            }
            break;
        case DASHBOARD_ACTIVITY:
            // alert('Dash activity reducer')
            state = {
                ...state,
                loader: true
            }
            break;
        case DASHBOARD_ACTIVITY_SUCCESS:
            // alert('Dash count reducer success')
            state = {
                ...state,
                loader: false,
                newUsersAndActivity: action.payload, // Update newUsers from the payload
                // activity: action.payload.activity   // Update activity from the payload
            }
            break;
        case DASHBOARD_ACTIVITY_FAILURE:
            // alert('Dash count reducer failure')
            state = {
                ...state,
                loader: false
            }
            break;
        case DASHBOARD_GRAPH:
            // alert('Dash activity reducer')
            state = {
                ...state,
                loader: true
            }
            break;
        case DASHBOARD_GRAPH_SUCCESS:
            // alert('Dash count reducer success')
            state = {
                ...state,
                loader: false,
                graphData: action.payload, // Update newUsers from the payload
                // activity: action.payload.activity   // Update activity from the payload
            }
            break;
        case DASHBOARD_GRAPH_FAILURE:
            // alert('Dash count reducer failure')
            state = {
                ...state,
                loader: false
            }
            break;
    }
    return state;
}