import { Types } from '../Types/types';

const intialstate = {
    loading: false,
    UserData: "",
    PostData: "",
    CommentData: ""
}

const HomeReducer = (state = intialstate, action = {}) => {
    console.log("actioncomm==>", action)
    switch (action.type) {


        case Types.USER.REQUEST:
            return {
                ...state,
                loading: true
            }
        case Types.USER.SUCCESS:
            return {
                ...state,
                UserData: action.payload,
                loading: false
            }
        case Types.USER.FAILURE:
            return {
                ...state,
                loading: false
            }

        case Types.POST.REQUEST:
            return {
                ...state,
                loading: true
            }
        case Types.POST.SUCCESS:
            return {
                ...state,
                PostData: action.payload,
                loading: false
            }
        case Types.POST.FAILURE:
            return {
                ...state,
                loading: false
            }


        case Types.COMMENT.REQUEST:
            return {
                ...state,
                loading: true
            }
        case Types.COMMENT.SUCCESS:
            return {
                ...state,
                CommentData: action.payload,
                loading: false
            }
        case Types.COMMENT.FAILURE:
            return {
                ...state,
                loading: false
            }


        case Types.DELETEPOST.REQUEST:
            return {
                ...state,
                loading: true
            }
        case Types.DELETEPOST.SUCCESS:
            return {
                ...state,
                loading: false
            }
        case Types.DELETEPOST.FAILURE:
            return {
                ...state,
                loading: false
            }


        case Types.ADDCOMMENT.REQUEST:
            return {
                ...state,
                loading: true
            }
        case Types.ADDCOMMENT.SUCCESS:
            return {
                ...state,

                loading: false
            }
        case Types.ADDCOMMENT.FAILURE:
            return {
                ...state,
                loading: false
            }

        case Types.CREATEPOST.REQUEST:
            return {
                ...state,
                loading: true
            }
        case Types.CREATEPOST.SUCCESS:
            return {
                ...state,
                loading: false
            }
        case Types.CREATEPOST.FAILURE:
            return {
                ...state,
                loading: false
            }


        default:
            console.log("default==>", state);
            return state;

    }
};

export default HomeReducer;
