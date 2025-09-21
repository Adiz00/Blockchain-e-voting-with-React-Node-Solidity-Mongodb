import { ContactSupportAction } from '../actions';
import { ApiCaller } from '../../config';
import { put, delay } from 'redux-saga/effects';
import { Utils } from "../../config"

export default class ContactSupportMiddleware {
    static *GetContactUsers(params) {
        const { limit, offset, search, status, dates } = params?.payload;
        console.log('This is contact support middleware',params?.payload)
        const { date1, date2 } = dates;
        try {
            const res = yield ApiCaller.Get(`/admin/contact-support?search=${search}&limit=${limit}&offset=${offset}&status=${status}&endDate=${date2}&startDate${date1}`);
            
            if (res.status === 200) {
                yield put(ContactSupportAction.GetContactUsersSuccess(res?.data))
                console.log('This is contact support middleware',res)
                // Utils.showMessage('success', '');
            } else {
                yield put(ContactSupportAction.GetContactUsersFailure())
                // Utils.showMessage('error', res?.message)
            }
        }
        catch (err) {
            yield put(ContactSupportAction.GetContactUsersFailure())
            // Utils.showMessage('error', 'Request Failed')
        }
    }

    static *PostContactUsersRespond(params) {
        const {cb} = params
        const { reply } = params?.payload;
        const { id,email } = params?.payload?.recordData;
        console.log('this is contact support respond middleware',id,email,reply)
        try {
            const res = yield ApiCaller.Post(`/admin/contact-support/${id}/reply`,{email,reply});
            if (res.status === 200) {
                cb && cb()
                yield put(ContactSupportAction.PostContactUsersRespondSuccess())
                Utils.showMessage('success', res?.message);
            } else {
                yield put(ContactSupportAction.PostContactUsersRespondFailure())
                Utils.showMessage('error', res?.message)
            }
        }
        catch (err) {
            yield put(ContactSupportAction.PostContactUsersRespondFailure())
            Utils.showMessage('error', 'Request Failed')
        }
    }
}