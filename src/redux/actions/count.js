/**
 * 专门为count组件生成action对象
 */
import {DECREMENT, INCREMENT} from "../constant";

//action的值为对象就是同步action
export const increment = (data) => ({type: INCREMENT, data})
export const decrement = (data) => ({type: DECREMENT, data})
//action的值为函数就是异步action
export const incrementAsync = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data))
        }, time)
    }
}