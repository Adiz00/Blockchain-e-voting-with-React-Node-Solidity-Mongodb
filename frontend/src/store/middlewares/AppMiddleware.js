import { AppAction } from '../actions';
import { ApiCaller } from '../../config';
import { put, delay } from 'redux-saga/effects';
import { Utils } from "../../config"

export default class AppMiddleware {

    static *SignIn(params) {
        const { payload, cb } = params;
        const { email, password } = payload;
        const platform = 'WEB'
        const fcmToken = null;


        try {
            let res = yield ApiCaller.Post('/auth/login', { email, password, platform, fcmToken });
            // console.log(res)
            if (res.status === 200) {
                localStorage.setItem('user', JSON.stringify(res?.data?.data));
                // auth token seperately is used in a interceptor i called .
                localStorage.setItem('authToken', JSON.stringify(res?.data?.data?.authToken));
                Utils.showMessage('success', res?.data?.message ? res?.data?.message : "login successfully")
                yield put(AppAction.SignInSuccess(res?.data?.data))
                cb && cb()
                // if (cb) {
                //     cb()
                // }
            }
            else {
                yield put(AppAction.SignInFailure())
                Utils.showMessage("error", res?.error?.message)
            }

        }

        catch (err) {
            Utils.showMessage('error', "Incorrect email or password")
            yield put(AppAction.SignInFailure())
        }
    }


    static *ForgetPassword(params) {
        const { payload, cb } = params;
        const email = payload;
        try {
            // console.log('inside of a forget password res', email)
            const res = yield ApiCaller.Post('/auth/resend-otp', { email });
            // console.log(res)
            if (res.status === 200) {
                if (cb) {
                    cb()
                }
                // saving it here in case if a user didn't receive a OTP and clicks on resend Otp,
                // then the same email will be pick from here to resend the OTP, on Logout clearing it.
                localStorage.setItem('useremail', JSON.stringify(email))
                yield put(AppAction.ForgetPasswordSuccess());
                Utils.showMessage('success', res?.message ? res.message : "otp sent successfully")

            }

            else {
                yield put(AppAction.ForgetPasswordFailure());
                Utils.showMessage('error', res?.error?.message)
            }
        }

        catch (err) {
            yield put(AppAction.ForgetPasswordFailure());
            Utils.showMessage('error', err?.response?.data?.error?.message)
        }
    }

    // static *ResendOtp(params) {
    //     const { email } = params;
    //     try {
    //         console.log('inside of a forget password res', email)
    //         const res = yield ApiCaller.Post('/auth/resend-otp', { email });
    //         console.log(res)
    //         if (res.status === 200) {

    //             if (cb) {
    //                 cb()
    //             }
    //             // saving it here in case if a user didn't receive a OTP and clicks on resend Otp,
    //             // then the same email will be pick from here to resend the OTP, on Logout clearing it.
    //             localStorage.setItem('useremail', JSON.stringify(email))
    //             yield put(AppAction.ForgetPasswordSuccess());
    //             Utils.showMessage('success', res?.message ? res.message : "otp sent successfully")

    //         }

    //         else {
    //             yield put(AppAction.ForgetPasswordFailure());
    //             Utils.showMessage('error', res?.error?.message)
    //         }
    //     }

    //     catch (err) {
    //         yield put(AppAction.ForgetPasswordFailure());
    //         Utils.showMessage('error', "error occured while sending request")
    //     }
    // }

    static *OtpVerification(params) {
        console.log('otp verification', params)
        const { payload, cb } = params;
        const otp = payload;
        const email = JSON.parse(localStorage.getItem('useremail'))
        console.log('otp verification success', otp, email)

        try {
            let res = yield ApiCaller.Post('/auth/verify-otp', { otp, email });
            console.log("from otp verification", res)

            if (res.status == 200) {
                yield put(AppAction.VerifiedOtpSuccess())
                Utils.showMessage('success', res?.data?.message ? res?.data?.message : "otp verified successful")
                localStorage.setItem('otp', otp)
                if (cb) {
                    cb()
                }
            }
            else {
                yield put(AppAction.VerifiedOtpFailure());
                Utils.showMessage('error', res?.error?.message)
            }

        }

        catch (err) {
            yield put(AppAction.VerifiedOtpFailure())
            Utils.showMessage('error',err?.response?.data?.error?.message)
        }

    }

    static *PasswordReset(params) {
        const { payload, cb } = params;
        const { password } = payload;
        const email = JSON.parse(localStorage.getItem('useremail'))
        const otp = localStorage.getItem('otp')
        try {
            let res = yield ApiCaller.Post('/auth/reset-password', { password, email, otp });
            if (res.status === 200) {
                yield put(AppAction.PasswordResetSuccess());
                if (cb) {
                    cb()
                }
                Utils.showMessage('success', res?.data?.message)

            }
            else {
                yield put(AppAction.PasswordResetFailure());
                Utils.showMessage('error', res?.error?.message)
            }
        }
        catch (err) {
            yield put(AppAction.PasswordResetFailure());
            Utils.showMessage('error', err?.response?.data?.error?.message)
        }
    }

    static *ChangePassword(params) {
        console.log(params)
        const { cb, payload } = params;
        const { old_Password, confirmPassword } = payload;
        const currentPassword = old_Password;
        const newPassword = confirmPassword;
        console.log(currentPassword, newPassword)
        console.log(cb)

        try {
            const res = yield ApiCaller.Post('/auth/change-password', { currentPassword, newPassword });
            console.log(res)
            if (res.status === 200) {
                yield put(AppAction.ChangePasswordSuccess());
                Utils.showMessage('success', res?.data?.message ? res?.data?.message : 'password changed successfully')
                if (cb) {
                    cb()
                }
            } else {
                yield put(AppAction.ChangePasswordFailure());
                Utils.showMessage('error', res?.error?.message)
            }
        }
        catch (err) {
            yield put(AppAction.ChangePasswordFailure());
            Utils.showMessage('error', err?.response?.data?.error?.message)
        }

    }


    static *Logout() {
        try {
            let res = yield ApiCaller.Post('/auth/logout', {});

            if (res.status === 200) {
                yield put(AppAction.LogoutSuccess())
                localStorage.removeItem('user');
                localStorage.removeItem('otp');
                Utils.showMessage('success', "Logout Successfully")

            }
            else {
                yield put(AppAction.LogoutFailure())
                Utils.showMessage('error', res?.error?.message)
            }

            localStorage.removeItem('authToken')
            localStorage.removeItem('useremail')
        }

        catch (err) {
            yield put(AppAction.LogoutFailure())
            Utils.showMessage('error', 'err')
        }
    }



}