import { UserAction } from '../actions';
import { ApiCaller } from '../../config';
import { put, delay } from 'redux-saga/effects';
import { Utils } from "../../config"

export default class UserMiddleware {
    static *GetUsers(params) {
        const { limit, offset, search, status, dates } = params?.payload;
        const { date1, date2 } = dates;
        try {
            const res = yield ApiCaller.Get(`/admin/users?search=${search}&limit=${limit}&offset=${offset}&status=${status}&startDate=${date1}&endDate=${date2}`);
            if (res.status === 200) {
                yield put(UserAction.GetUsersSuccess(res?.data))
                // Utils.showMessage('success', '');
            } else {
                yield put(UserAction.GetUsersFailure())
                Utils.showMessage('error', res?.message)
            }
        }
        catch (err) {
            yield put(UserAction.GetUsersFailure())
            Utils.showMessage('error', 'Request Failed')
        }
    }

    static *UpdateUser(params) {
        const { payload, cb } = params;
        const { status, id } = payload;
        console.log(status, id)

        try {
            let res = yield ApiCaller.Patch(`/admin/user/${id}`, { status });
            console.log(res)
            if (res.status === 200) {
                yield put(UserAction.StatusUpdateSuccess())
                if (cb) {
                    cb()
                }
                // Utils.showMessage('success', '')
            }
            else {
                yield put(UserAction.StatusUpdateFailure())
                Utils.showMessage('error')
            }
        }

        catch (err) {
            yield put(UserAction.StatusUpdateFailure())
            Utils.showMessage('error', err);
        }
    }

    static *UserDetail(params) {
        const { payload } = params;
        const id = Number(payload);
        console.log("This is the user details of the id",id)
        try {
            const res = yield ApiCaller.Get(`/admin/user/${id}/details`);
            if (res.status === 200) {
                yield put(UserAction.UserDetailSuccess(res?.data.data));
                Utils.showMessage('success', res?.data.message)
            }
            else {
                yield put(UserAction.UserDetailFailure());
                Utils.showMessage('error', res?.data?.message)
            }
        }
        catch (err) {
            yield put(UserAction.UserDetailFailure())
            Utils.showMessage('error', err)
        }
    }
    static *UserDetailPost(params) {
        const { payload } = params;
        const {limit,offset} = payload?.state;
        const id = Number(payload?.id);
        console.log("This is the user details of the id",params?.payload?.state)
        try {
            const res = yield ApiCaller.Get(`/admin/user/posts/${id}?limit=${limit}&offset=${offset}`);
            if (res.status === 200) {
                yield put(UserAction.UserDetailPostSuccess(res?.data.data));
                // Utils.showMessage('success', res?.data.message)
            }
            else {
                yield put(UserAction.UserDetailPostFailure());
                // Utils.showMessage('error', res?.data?.message)
            }
        }
        catch (err) {
            yield put(UserAction.UserDetailPostFailure())
            // Utils.showMessage('error', err)
        }
    }

    static *GetReportUsers(params) {
        const { limit, offset, search, status, dates } = params?.payload;
        const { date1, date2 } = dates;
        try {
            const res = yield ApiCaller.Get(`/admin/users/reported?search=${search}&startDate=${date1}&endDate=${date2}&limit=${limit}&offset=${offset}&status=${status}`);
            if (res.status === 200) {
                yield put(UserAction.GetReportUsersSuccess(res?.data))
                // Utils.showMessage('success', '');
            } else {
                yield put(UserAction.GetReportUsersFailure())
                Utils.showMessage('error', res?.message)
            }
        }
        catch (err) {
            yield put(UserAction.GetReportUsersFailure())
            Utils.showMessage('error', 'Request Failed')
        }
    }

    static *ReportUserStatusUpdate(params) {
        const { payload, cb } = params;
        const { status, id } = payload;
        console.log("statis of the reported user",status, id)

        try {
            let res = yield ApiCaller.Patch(`/admin/user/${id}`, { status });
            console.log(res)
            if (res.status === 200) {
                yield put(UserAction.ReportUserStatusUpdateSuccess())
                if (cb) {
                    cb()
                }
                // Utils.showMessage('success', '')
            }
            else {
                yield put(UserAction.ReportUserStatusUpdateFailure())
                Utils.showMessage('error')
            }
        }

        catch (err) {
            yield put(UserAction.ReportUserStatusUpdateFailure())
            Utils.showMessage('error', err);
        }
    }

    static *ReportUserUserDetail(params) {
        const { payload } = params;
        const limit  = payload?.limit
        const search = payload?.search
        const offset = payload?.offset
        const id = Number(payload?.id);
        console.log("This is the user details of the id of the reported user",payload)
        
        try {
            const res = yield ApiCaller.Get(`/admin/users/reported/${id}?search=${search}&limit=${limit}&offset=${offset}`);
            if (res.status === 200) {
                yield put(UserAction.ReportUserUserDetailSuccess(res?.data.data));
                Utils.showMessage('success', res?.data.message)
            }

            else {
                yield put(UserAction.ReportUserUserDetailFailure());
                Utils.showMessage('error', res?.data?.message)
            }

        }

        catch (err) {
            yield put(UserAction.ReportUserUserDetailFailure())
            Utils.showMessage('error', err)
        }


    }
}