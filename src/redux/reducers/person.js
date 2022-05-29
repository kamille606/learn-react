/**
 * 创建一个为person服务的reducer
 * 接收之前的状态，动作对象
 * 返回新的状态
 */
import {ADD_PERSON} from "../constant";

const initState = [{id: '001', name: 'tom', age: 18}]

export default function personReducer(preState = initState, action) {
    const {type, data} = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState
    }
}