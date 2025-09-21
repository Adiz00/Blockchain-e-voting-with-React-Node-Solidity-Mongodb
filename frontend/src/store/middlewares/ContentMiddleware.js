import { ContentUserAction } from '../actions';
import { ApiCaller } from '../../config';
import { put } from 'redux-saga/effects';
import { Utils } from "../../config"

export default class ContentUserMiddleware {
    static *GetContentPosts(params) {
        console.log("This is the Content report params",params)
        const { limit, offset, search, status, dates } = params?.payload;
        const { date1, date2 } = dates;
        try {
            const res = yield ApiCaller.Get(`/admin/posts/reported?limit=${limit}&offset=${offset}&search=${search}&status=${status}&startDate=${date1}&endDate=${date2}`);
            if (res.status === 200) {
                yield put(ContentUserAction.GetContentPostsSuccess(res?.data))
                // Utils.showMessage('success', '');
            } else {
                yield put(ContentUserAction.GetContentPostsFailure())
                // Utils.showMessage('error', res?.message)
            }
        }
        catch (err) {
            yield put(ContentUserAction.GetContentPostsFailure())
            // Utils.showMessage('error', 'Request Failed')
        }
    }

    static *ContentStatusUpdate(params) {
        const { payload, cb } = params;
        const {reportId,reportableId, email, status, relType } = payload;
        console.log("This is the satiat ajfs",payload)

        try {
            let res = yield ApiCaller.Patch(`/admin/reported`, {reportId, reportableId, email, status, relType });
            console.log(res)
            if (res.status === 200) {
                yield put(ContentUserAction.ContentStatusUpdateSuccess())
                if (cb) {
                    cb()
                }
                // Utils.showMessage('success', '')
            }
            else {
                yield put(ContentUserAction.ContentStatusUpdateFailure())
                // Utils.showMessage('error')
            }
        }

        catch (err) {
            yield put(ContentUserAction.ContentStatusUpdateFailure())
            // Utils.showMessage('error', err);
        }
    }

    static *PostsContentDetail(params) {
        const { payload } = params;
        const {id, limit, offset} = payload
        console.log("This is the Content report details",payload)
        // const id = Number(payload?.id);
        

        try {
            const res = yield ApiCaller.Get(`/admin/reported/${id}/details?offset=${offset}&type=POST&limit=${limit}`);
            if (res.status === 200) {
                yield put(ContentUserAction.PostsContentDetailSuccess(res?.data.data));
                // Utils.showMessage('success', res?.data.message)
            }

            else {
                yield put(ContentUserAction.PostsContentDetailFailure());
                // Utils.showMessage('error', res?.data?.message)
            }

        }

        catch (err) {
            yield put(ContentUserAction.PostsContentDetailFailure())
            // Utils.showMessage('error', err)
        }


    }
    static *GetContentComments(params) {
        console.log("This is the Content report comments params",params)
        const { limit,status, offset, search, dates } = params?.payload;
        const { date1, date2 } = dates;
        try {
            const res = yield ApiCaller.Get(`/admin/comments/reported?limit=${limit}&offset=${offset}&search=${search}&status=${status}&startDate=${date1}&endDate=${date2}`);
            if (res.status === 200) {
                yield put(ContentUserAction.GetContentCommentsSuccess(res?.data))
                // Utils.showMessage('success', '');
            } else {
                yield put(ContentUserAction.GetContentCommentsFailure())
                // Utils.showMessage('error', res?.message)
            }
        }
        catch (err) {
            yield put(ContentUserAction.GetContentCommentsFailure())
            // Utils.showMessage('error', 'Request Failed')
        }
    }

    static *ContentStatusUpdateComments(params) {
        const { payload, cb } = params;
        const {reportId,reportableId, email, status, relType } = payload;
        console.log("This is middleware comments payload",params?.payload)
        // const { status, id } = payload;
        // console.log(status, id)

        try {
            let res = yield ApiCaller.Patch(`/admin/reported`, { reportId, reportableId, email, status, relType });
            console.log(res)
            if (res.status === 200) {
                yield put(ContentUserAction.ContentStatusUpdateCommentsSuccess())
                if (cb) {
                    cb()
                }
                // Utils.showMessage('success', '')
            }
            else {
                yield put(ContentUserAction.ContentStatusUpdateCommentsFailure())
                // Utils.showMessage('error')
            }
        }

        catch (err) {
            yield put(ContentUserAction.ContentStatusUpdateCommentsFailure())
            // Utils.showMessage('error', err);
        }
    }

    static *CommentsContentDetail(params) {
        const { payload } = params;
        const id = Number(payload);

        try {
            const res = yield ApiCaller.Get(`/admin/reported/${id}/details?type=COMMENT`);
            if (res.status === 200) {
                yield put(ContentUserAction.CommentsContentDetailSuccess(res?.data.data));
                // Utils.showMessage('success', res?.data.message)
            }

            else {
                yield put(ContentUserAction.CommentsContentDetailFailure());
                // Utils.showMessage('error', res?.data?.message)
            }

        }

        catch (err) {
            yield put(ContentUserAction.CommentsContentDetailFailure())
            // Utils.showMessage('error', err)
        }


    }

    static *ChatsContentDetail(params) {
        const { payload } = params;
        const id = Number(payload);

        try {
            const res = yield ApiCaller.Get(`/admin/reported/${id}/details?type=MESSAGE`);
            if (res.status === 200) {
                yield put(ContentUserAction.ChatsContentDetailSuccess(res?.data.data));
                // Utils.showMessage('success', res?.data.message)
            }

            else {
                yield put(ContentUserAction.ChatsContentDetailFailure());
                // Utils.showMessage('error', res?.data?.message)
            }

        }

        catch (err) {
            yield put(ContentUserAction.ChatsContentDetailFailure())
            // Utils.showMessage('error', err)
        }


    }

    static *GetReportedChats(params) {
        // alert("This is the Content report params",params)
        const { limit, offset, search, status, dates } = params?.payload;
        const { date1, date2 } = dates;
        try {
            const res = yield ApiCaller.Get(`/admin/messages/reported?limit=${limit}&offset=${offset}&search=${search}&status=${status}&startDate=${date1}&endDate=${date2}`);
            if (res.status === 200) {
                
                // alert("This is the middleware response Content report chats",res?.data)
                yield put(ContentUserAction.GetReportedChatsSuccess(res?.data))
                // Utils.showMessage('success', '');
            } else {
                yield put(ContentUserAction.GetReportedChatsFailure())
                // Utils.showMessage('error', res?.message)
            }
        }
        catch (err) {
            yield put(ContentUserAction.GetReportedChatsFailure())
            // Utils.showMessage('error', 'Request Failed')
        }
    }
}