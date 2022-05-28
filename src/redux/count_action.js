/**
 * 专门为count组件生成action对象
 */
import {DECREMENT, INCREMENT} from "./constant";

//action的值为对象就是同步action
export const createIncrementAction = (data) => ({type: INCREMENT, data})
export const createDecrementAction = (data) => ({type: DECREMENT, data})
//action的值为函数就是异步action
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}