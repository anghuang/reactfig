
import * as types from '../../action-types'
function thunkB(text) {
    return new Promise((resolve)=> {
         setTimeout (function () {
             resolve(text)
        },20);
    })
}

function getMemberList(text){
     return async function (dispatch) {
         await thunkB(text)
         console.log(text)
         return dispatch({type:types.ADD_TODO,payload:text})
     }
}
function addd(text) {
    return function(dispatch){
        setTimeout(function () {
            return dispatch({ type: types.ADD_TODO1, payload:text })
        },10)

    }
}
export default {
    getMemberList,
    addd
}