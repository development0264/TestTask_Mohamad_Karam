import { Types } from '../Types/types';
import API from '../API/api';

export function Userdata() {
    console.log("Userdata==>");
    return dispatch => {
        dispatch(request());
        return API
            .getuserdata()
            .then(resp => {
                console.log("USER RESPONSE==>", resp);
                return dispatch(success(resp.data))
            })
            .catch(error => dispatch(failure(error)));
    };
    function request() { return { type: Types.USER.REQUEST } }
    function success(activity) { return { type: Types.USER.SUCCESS, payload: activity } }
    function failure(error) { return { type: Types.USER.FAILURE, payload: error } }
};

export function DeletePost(id) {
    console.log("DeletePost==>", id);
    return dispatch => {
        dispatch(request());
        return API
            .getdeletepost(id)
            .then(resp => {
                console.log("Delete RESPONSE==>", resp);
                return dispatch(success(resp.data))
            })
            .catch(error => dispatch(failure(error)));
    };
    function request() { return { type: Types.DELETEPOST.REQUEST } }
    function success(activity) { return { type: Types.DELETEPOST.SUCCESS, payload: activity } }
    function failure(error) { return { type: Types.DELETEPOST.FAILURE, payload: error } }
};


export function Postdata() {

    return dispatch => {
        dispatch(request());
        return API
            .getpostdata()
            .then(resp => {
                console.log("RESPONSE==>", resp);
                return dispatch(success(resp.data))
            })
            .catch(error => dispatch(failure(error)));
    };
    function request() { return { type: Types.POST.REQUEST } }
    function success(activity) { return { type: Types.POST.SUCCESS, payload: activity } }
    function failure(error) { return { type: Types.POST.FAILURE, payload: error } }
};

export function Openpost(id) {
    console.log("Openpostid==>", id);
    return dispatch => {
        dispatch(request());
        return API
            .getcommentdata(id)
            .then(resp => {
                console.log("RESPONSE==>", resp);
                return dispatch(success(resp.data))
            })
            .catch(error => dispatch(failure(error)));
    };
    function request() { return { type: Types.COMMENT.REQUEST } }
    function success(activity) { return { type: Types.COMMENT.SUCCESS, payload: activity } }
    function failure(error) { return { type: Types.COMMENT.FAILURE, payload: error } }
};

export function CommentPost(clickpost) {
    console.log(clickpost);
    return dispatch => {
        dispatch(request());
        return API
            .addcommentpost(clickpost)
            .then(resp => {
                console.log(resp);
                return dispatch(success(resp.data))
            })
            .catch(error => dispatch(failure(error)));
    };
    function request() { return { type: Types.ADDCOMMENT.REQUEST } }
    function success(activity) { return { type: Types.ADDCOMMENT.SUCCESS, payload: activity } }
    function failure(error) { return { type: Types.ADDCOMMENT.FAILURE, payload: error } }
};


export function Createpost(submitpostdata) {
    console.log(submitpostdata);
    return dispatch => {
        dispatch(request());
        return API
            .submitpost(submitpostdata)
            .then(resp => {
                console.log(resp);
                return dispatch(success(resp.data))
            })
            .catch(error => dispatch(failure(error)));
    };
    function request() { return { type: Types.CREATEPOST.REQUEST } }
    function success(activity) { return { type: Types.CREATEPOST.SUCCESS, payload: activity } }
    function failure(error) { return { type: Types.CREATEPOST.FAILURE, payload: error } }
};




