
import actions from './action'
const state1 = {
    text: '',
    list:''
}

const planlist = (state = state,  action = actions) => {
    const {type,payload}=action
    switch (type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {
                text:payload,
                list:state.list
            })
        case 'ADD_TODO1':
            return Object.assign({}, state, {
                text:state.text,
                list:payload
            })
        default:
            return state1;
    }
}
export default planlist;