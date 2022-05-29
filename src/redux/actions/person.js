/**
 * 专门为person组件生成action对象
 */
import {ADD_PERSON} from "../constant";

export const addPerson = (data) => ({type: ADD_PERSON, data})