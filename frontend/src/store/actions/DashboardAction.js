import {
    DASHBOARD_COUNTS, DASHBOARD_COUNTS_SUCCESS, DASHBOARD_COUNTS_FAILURE,
    DASHBOARD_ACTIVITY,
    DASHBOARD_ACTIVITY_SUCCESS,
    DASHBOARD_ACTIVITY_FAILURE,
    DASHBOARD_GRAPH,
    DASHBOARD_GRAPH_SUCCESS,
    DASHBOARD_GRAPH_FAILURE
} from '../constants'

export default class DashboardAction {
    
    static GetDashboardCounts(payload, cb) {
        // alert('Dash count action')
        return {
            type: DASHBOARD_COUNTS,
            payload,
            // cb
        }
    }

    static GetDashboardCountsSuccess(payload) {
        // alert('Dash count action success')
        return {
            type: DASHBOARD_COUNTS_SUCCESS,
            payload
        }
    }
    static GetDashboardCountsFailure() {
        // alert('Dash count action failure')
        return {
            type: DASHBOARD_COUNTS_FAILURE
        }
    }
    static GetDashboardActivity(payload, cb) {

        
        return {
            type: DASHBOARD_ACTIVITY,
            payload,
            cb
        }
    }

    static GetDashboardActivitySuccess(payload) {
        // alert('Dash activity action success')
        return {
            type: DASHBOARD_ACTIVITY_SUCCESS,
            payload
        }
    }
    static GetDashboardActivityFailure() {
        // alert('Dash activity action failure')
        return {
            type: DASHBOARD_ACTIVITY_FAILURE
        }
    }

    static GetDashboardGraph(payload, cb) {
        // alert('Dash activity action')
        return {
            type: DASHBOARD_GRAPH,
            payload,
            cb
        }
    }

    static GetDashboardGraphSuccess(payload) {
        // alert('Dash activity action success')
        return {
            type: DASHBOARD_GRAPH_SUCCESS,
            payload
        }
    }
    static GetDashboardGraphFailure() {
        // alert('Dash activity action failure')
        return {
            type: DASHBOARD_GRAPH_FAILURE
        }
    }
    
}