import { ForumAction } from '../actions';
import { ApiCaller } from '../../config';
import { put } from 'redux-saga/effects';
import { Utils } from "../../config"

export default class ForumMiddleware {
    static *GetForumList(params) {
        console.log("This is the Content report params", params)
        const { limit, offset, search, status, dates } = params?.payload;
        const { date1, date2 } = dates;
        try {
            const res = yield ApiCaller.Get(`/admin/forums?search=${search}&limit=${limit}&offset=${offset}&status=${status}&endDate=${date2}&startDate${date1}`);
            if (res.status === 200) {
                yield put(ForumAction.GetForumListSuccess(res?.data))
                // Utils.showMessage('success', '');
            } else {
                yield put(ForumAction.GetForumListFailure())
                // Utils.showMessage('error', res?.message)
            }
        }
        catch (err) {
            yield put(ForumAction.GetForumListFailure())
            // Utils.showMessage('error', 'Request Failed')
        }
    }

    static *GetForumParticipants(params) {

        const { payload } = params;
        const { id, limit, offset } = payload

        console.log("This is the Forum Participants middleware ", params)
        try {
            const res = yield ApiCaller.Get(`/admin/forums/${id}/members?limit=${limit}&offset=${offset}`);
            if (res.status === 200) {
                yield put(ForumAction.GetForumParticipantsSuccess(res?.data))
                // Utils.showMessage('success', '');
            } else {
                yield put(ForumAction.GetForumParticipantsFailure())
                // Utils.showMessage('error', res?.message)
            }
        }
        catch (err) {
            yield put(ForumAction.GetForumParticipantsFailure())
            // Utils.showMessage('error', 'Request Failed')
        }
    }

    static *GetForumDetails(params) {

        const id = params?.payload;
        console.log("This is the Content report params", id)
        try {
            const res = yield ApiCaller.Get(`/admin/forums/${id}/details`);
            if (res.status === 200) {
                yield put(ForumAction.GetForumDetailsSuccess(res?.data))
            } else {
                yield put(ForumAction.GetForumDetailsFailure())
            }
        }
        catch (err) {
            yield put(ForumAction.GetForumDetailsFailure())
            // Utils.showMessage('error', 'Request Failed')
        }
    }

    static *GetForumReplies(params) {
        const { cb } = params;
        const { parentId, limit, offset } = params?.payload;
        console.log("This is the params of the replies click", params)
        try {
            const res = yield ApiCaller.Get(`/admin/forums/comment/${parentId}/replies?limit=${limit}&offset=${offset}`);

            if (res.status === 200) {
                // console.log("This is the params of the replies click", res?.data)

                cb && cb(res?.data)

                yield put(ForumAction.GetForumRepliesSuccess(res?.data))
            } else {
                yield put(ForumAction.GetForumRepliesFailure())
            }
        }
        catch (err) {
            yield put(ForumAction.GetForumRepliesFailure())
            // Utils.showMessage('error', 'Request Failed')
        }
    }

    static *UploadPhoto(params) {
        console.log("this is the middleware of the upload photo", params)
        const { payload, cb } = params;
        const { imageUrl, descriptionType, id } = payload;
        console.log(imageUrl)
        const formData = new FormData();
        formData.append("postFiles", imageUrl)
        console.log("this is the forum upload photo of the middleware", formData)
        // formData.append("name", payload?.)
        if (descriptionType == 'IMAGE') {
            try {
                const res = yield ApiCaller.Post(`/post/files`, formData);
                if (res.status === 200) {
                    console.log("loooooodddd", res);
                    const description = res?.data?.data?.postFiles[0]?.fileUrl
                    const otherres = yield ApiCaller.Patch(`/admin/forums/${id}`, { descriptionType, description });
                    cb && cb()
                    if (otherres.status === 200) {
                        yield put(ForumAction.UploadPhotoSuccess())
                        Utils.showMessage('success', 'Image Add Successfully');
                    }

                } else {
                    yield put(ForumAction.UploadPhotoFailure())
                    Utils.showMessage('error', 'Not Upload Image Successfully')
                }
            }
            catch (err) {
                yield put(ForumAction.UploadPhotoFailure())
                Utils.showMessage('error', 'Not Upload Image Successfully')
            }
        }

        else if (descriptionType === 'TEXT') {
            const description = params?.payload?.description
            console.log('this is the middleware of the upload photo', description, descriptionType, id)
            try {
                const res = yield ApiCaller.Patch(`/admin/forums/${id}`, { descriptionType, description });
                cb && cb()
                if (res.status === 200) {
                    yield put(ForumAction.UploadPhotoSuccess())
                    Utils.showMessage('success', 'Description Add Successfully');
                } else {
                    yield put(ForumAction.UploadPhotoFailure())
                    Utils.showMessage('error', 'Not Upload Text Successfully')
                }
            }
            catch (err) {
                yield put(ForumAction.UploadPhotoFailure())
                Utils.showMessage('error', 'Not Upload Text Successfully')
            }
        }

    }

    static *RemoveForumParticipants(params) {

        const { payload, cb } = params;
        const { id, userId } = payload;
        console.log("This is the Remove Forum Participants middleware ", id)
        try {
            const res = yield ApiCaller.Patch(`/admin/forums/${id}/remove-member`, { userId });
            if (res.status === 200) {
                cb && cb()
                yield put(ForumAction.RemoveForumParticipantsSuccess())

            } else {
                yield put(ForumAction.RemoveForumParticipantsFailure())
            }
        }
        catch (err) {
            yield put(ForumAction.RemoveForumParticipantsFailure())
        }
    }

    static *DeleteForum(params) {
        console.log("This is the Content report params delete", params?.payload)
        const id = params?.payload
        // const { id } = params ;
        try {
            const res = yield ApiCaller.Delete(`/admin/forums/${id}`);
            if (res.status === 200) {
                yield put(ForumAction.DeleteForumSuccess(res?.data))
                // Utils.showMessage('success', '');
            } else {
                yield put(ForumAction.DeleteForumFailure())
                // Utils.showMessage('error', res?.message)
            }
        }
        catch (err) {
            yield put(ForumAction.DeleteForumFailure())
            // Utils.showMessage('error', 'Request Failed')
        }
    }

    static *GetReportForumComment(params) {
        console.log("This is the Content report params", params)
        const { limit, offset, search, status, dates } = params?.payload;
        const { date1, date2 } = dates;
        try {
            const res = yield ApiCaller.Get(`/admin/forums/reported?limit=${limit}&offset=${offset}&search=${search}&status=${status}&startDate=${date1}&endDate=${date2}`);
            if (res.status === 200) {
                yield put(ForumAction.GetReportForumCommentSuccess(res?.data))
                // Utils.showMessage('success', '');
            } else {
                yield put(ForumAction.GetReportForumCommentFailure())
                // Utils.showMessage('error', res?.message)
            }
        }
        catch (err) {
            yield put(ForumAction.GetReportForumCommentFailure())
            // Utils.showMessage('error', 'Request Failed')
        }
    }

    static *GetReportedCommentDetail(params) {
        console.log("This is the Content report params", params?.payload)
        const {id, limit, offset, current } = params?.payload;
        // const { date1, date2 } = dates;
        // const { id } = params?.payload
        try {
            const res = yield ApiCaller.Get(`/admin/reported/${id}/details?type=FORUM&limit=${limit}&offset=${offset}&current=${current}`);
            if (res.status === 200) {
                yield put(ForumAction.GetReportedCommentDetailSuccess(res?.data))
            } else {
                yield put(ForumAction.GetReportedCommentDetailFailure())
            }
        }
        catch (err) {
            yield put(ForumAction.GetReportedCommentDetailFailure())
        }
    }

    static *DeleteReportedComment(params) {
        console.log("This is the Content report comments delete", params?.payload)
        const id = params?.payload
        // const { id } = params ;
        try {
            const res = yield ApiCaller.Delete(`/admin/forums/comment/12`);
            if (res.status === 200) {
                yield put(ForumAction.DeleteReportedCommentSuccess(res?.data))
                // Utils.showMessage('success', '');
            } else {
                yield put(ForumAction.DeleteReportedCommentFailure())
                // Utils.showMessage('error', res?.message)
            }
        }
        catch (err) {
            yield put(ForumAction.DeleteReportedCommentFailure())
            // Utils.showMessage('error', 'Request Failed')
        }
    }
}