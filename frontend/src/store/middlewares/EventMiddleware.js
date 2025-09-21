import { EventAction } from '../actions';
import { ApiCaller } from '../../config';
import { put } from 'redux-saga/effects';
import { Utils } from "../../config"

export default class EventMiddleware {
    static *AllEvents(params) {
        console.log("This is the All Events params", params)
        const { limit, offset, search } = params?.payload;
        try {
            const res = yield ApiCaller.Get(`/admin/event-calendar?search=${search}&limit=${limit}&offset=${offset}`);
            if (res.status === 200) {
                yield put(EventAction.AllEventsSuccess(res?.data))
                // Utils.showMessage('success', '');
            } else {
                yield put(EventAction.AllEventsFailure())
                // Utils.showMessage('error', res?.message)
            }
        }
        catch (err) {
            yield put(EventAction.AllEventsFailure())
            // Utils.showMessage('error', 'Request Failed')
        }
    }

    static *CreateEvent(params) {
        console.log("This is create event middleware", params.payload.mainData)
        const { coordinates, data, mainData } = params.payload;
        const { cb } = params;
        const latitude = coordinates.lat;
        const longitude = coordinates.lng;
        const title = data.EventTitle;
        const description = data.Description;
        const { value, enddate, imageUrl, startdate } = mainData;
        const location = value.label;
        const city = value.value.terms?.[value.value.terms.length - 2].value;
        const country = value.value.terms?.[value.value.terms.length - 1].value;
        const startDate = startdate;
        const endDate = enddate;
        const startTime = startDate;
        const endTime = endDate;

        const formdata = new FormData();
        formdata.append("eventMedia", imageUrl);
        formdata.append("title", title);
        formdata.append("location", location);
        formdata.append("latitude", latitude);
        formdata.append("longitude", longitude);
        formdata.append("startDate", startDate);
        formdata.append("endDate", endDate);
        formdata.append("description", description);
        formdata.append("city", city);
        formdata.append("country", country);
        formdata.append("startTime", startTime);
        formdata.append("endTime", endTime);
        console.log("this is teh real data", formdata)
        try {
            const res = yield ApiCaller.Post(`/admin/event-calendar`, formdata);
            console.log("response of api",res)
            if (res.status === 200) {

                yield put(EventAction.CreateEventSuccess(res?.data))
                cb && cb()
                Utils.showMessage('success', 'Event Create Successfully');

            } else {
                yield put(EventAction.CreateEventFailure())
                // Utils.showMessage('error', 'Event Not Create Successfully');
            }
        }
        catch (err) {
            yield put(EventAction.CreateEventFailure())
            // Utils.showMessage('error', 'Event Not Create Successfully');
        }
    }

    static *UpdateEvent(params) {
        console.log("This is the Content report params", params)
        const { payload, cb } = params;
        const { id, DateEnd, Datestart, address, city, country ,description, latitude, longitude, mediaUrl, title } = payload;
        const formdata = new FormData();
        formdata.append("eventMedia", mediaUrl);
        formdata.append("title", title);
        formdata.append("location", address);
        formdata.append("latitude", latitude);
        formdata.append("longitude", longitude);
        formdata.append("startDate", Datestart);
        formdata.append("endDate", DateEnd);
        formdata.append("description", description);
        formdata.append("city", city);
        formdata.append("country", country);
        formdata.append("startTime", Datestart);
        formdata.append("endTime", DateEnd);
        
        try {
            const res = yield ApiCaller.Patch(`/admin/event-calendar/${id}`,formdata);
            if (res.status === 200) {
                yield put(EventAction.UpdateEventSuccess(res?.data))
                cb && cb()
                Utils.showMessage('success', 'Event Update Successfully');
                // Utils.showMessage('success', '');
            } else {
                yield put(EventAction.UpdateEventFailure())
                // Utils.showMessage('error', res?.message)
            }
        }
        catch (err) {
            yield put(EventAction.UpdateEventFailure())
            // Utils.showMessage('error', 'Request Failed')
        }
    }

    static *DeleteEvent(params) {

        const id = params?.payload;
        console.log("This is the Delete event", id)
        // const { limit, offset, search, status, dates } = params?.payload;
        // const { date1, date2 } = dates;
        try {
            const res = yield ApiCaller.Delete(`/admin/event-calendar/${id}`);
            if (res.status === 200) {
                yield put(EventAction.DeleteEventSuccess())
                // Utils.showMessage('success', '');
            } else {
                yield put(EventAction.DeleteEventFailure())
                // Utils.showMessage('error', res?.message)
            }
        }
        catch (err) {
            yield put(EventAction.DeleteEventFailure())
            // Utils.showMessage('error', 'Request Failed')
        }
    }
}