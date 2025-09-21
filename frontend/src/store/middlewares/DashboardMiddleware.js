import { AppAction, DashboardAction } from '../actions';
import { ApiCaller } from '../../config';
import { put, delay } from 'redux-saga/effects';
import { Utils } from "../../config"
// import { json } from 'd3';
// import { getCityCountry } from '../../config'; 
// import { Utils } from "../../config";


export default class DashboardMiddleware {

    static *GetDashboardCounts(params) {
        // console.log("Middleware - This is the dashboard count params",params)
        // const { limit, offset, search, status, dates } = params?.payload;
        // const { date1, date2 } = dates;
        try {
            const date = params?.payload ? params?.payload : '';
            const queryString = date ? `?date=${date}` : '';
            const res = yield ApiCaller.Get(`admin/dashboard/counts${queryString}`);
            if (res.status === 200) {
                yield put(DashboardAction.GetDashboardCountsSuccess(res?.data))
                // Utils.showMessage('success', '');
            } else {
                yield put(DashboardAction.GetDashboardCountsFailure())
                // Utils.showMessage('error', res?.message)
            }
        }
        catch (err) {
            yield put(DashboardAction.GetDashboardCountsFailure())
            // Utils.showMessage('error', 'Request Failed')
        }
    }

    static *GetDashboardActivity(params) {
        // alert("Middleware - This is the dashboard Activity params",params)
        // const { limit, offset, search, status, dates } = params?.payload;
        // const { date1, date2 } = dates;
        try {
            const res = yield ApiCaller.Get(`admin/dashboard/activity`);
            if (res.status === 200) {
                console.log("Middleware - This is the dashboard Activity res",res?.data)
                yield put(DashboardAction.GetDashboardActivitySuccess(res?.data))
                // const updatedActivity = res?.data?.data?.activity?.map((item, index) =>{
                //     const parsedItem = JSON.parse(item.data);
                //     if (parsedItem?.latitude && parsedItem?.longitude) {
                //         // alert('location');
                //             const location = yield Utils.getCityCountry(parsedItem.latitude, parsedItem.longitude)
                //             // .then((result) => {
                //             //     // return { ...item, location };
                //             //     if(result){

                //             //         console.log('result', result);
                //             //         return { ...item, result };
                //             //     }
                //             //   })
                //             //   .catch(console.error);
                //             console.log('location', location);
                        
                //         }
                //     });
                // console.log("updatedActivity", updatedActivity)

             
                // Utils.showMessage('success', '');
            } else {
                yield put(DashboardAction.GetDashboardActivityFailure())
                // Utils.showMessage('error', res?.message)
            }
        }
        catch (err) {
            yield put(DashboardAction.GetDashboardActivityFailure())
            // Utils.showMessage('error', 'Request Failed')
        }
    }

    static *GetDashboardGraph(params) {
        // console.log("Middleware - This is the dashboard Graph params",params)
        // const { limit, offset, search, status, dates } = params?.payload;
        // const { date1, date2 } = dates;
        try {
            const graphValue = params?.payload ? params?.payload : '';
            const queryString = graphValue ? `?tenure=${graphValue}` : '';
            const res = yield ApiCaller.Get(`admin/dashboard/graph${queryString}`);
            if (res.status === 200) {
                yield put(DashboardAction.GetDashboardGraphSuccess(res?.data))
                // Utils.showMessage('success', '');
            } else {
                yield put(DashboardAction.GetDashboardGraphFailure())
                // Utils.showMessage('error', res?.message)
            }
        }
        catch (err) {
            yield put(DashboardAction.GetDashboardGraphFailure())
            // Utils.showMessage('error', 'Request Failed')
        }
    }

}