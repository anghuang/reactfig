
import * as types from '../../action-types'
import requst from '../../../utils/request'
function getList() {
    return new Promise((resolve)=> {
        requst('/todoList.mock','POST','')
            .then((response)=>{
                resolve(response)
            })
    })

}
function getMemberList(){
     return async function (dispatch) {
         return dispatch({type:types.ADD_TODO,payload:await getList()})
     }
}
function addd(text) {
    return function(dispatch){
        return dispatch({ type: types.ADD_TODO1, payload:text })
    }
}
export default {
    getMemberList,
    addd
}