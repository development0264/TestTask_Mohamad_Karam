import { defineAction } from 'redux-define';


export const Types = {
    USER: defineAction('USER', ['REQUEST', 'SUCCESS', 'FAILURE']),
    DELETEPOST: defineAction('DELETEPOST', ['REQUEST', 'SUCCESS', 'FAILURE']),
    POST: defineAction('POST', ['REQUEST', 'SUCCESS', 'FAILURE']),
    COMMENT: defineAction('COMMENT', ['REQUEST', 'SUCCESS', 'FAILURE']),
    ADDCOMMENT: defineAction('ADDCOMMENT', ['REQUEST', 'SUCCESS', 'FAILURE']),
    CREATEPOST: defineAction('CREATEPOST', ['REQUEST', 'SUCCESS', 'FAILURE']),

}