import store from './index'
import { CHNAGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TPDO_ITEM, Init_List_Action } from './actionTypes'

export const  actionCreate = () => {
  const handleInputChange = (e) => {
    const action = {
      type: CHNAGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action)
  }

  const handleButtonClick = () => {
    const action = {
      type: ADD_TODO_ITEM
    }
    store.dispatch(action)
  }

  const handleItemDelete = (index) => {
    const action = {
      type: DELETE_TPDO_ITEM,
      index
    }
    store.dispatch(action)
  }

  const initListAction = (data) => {
    return {
      type: Init_List_Action,
      data
    }
    // store.dispatch(action)
  }
  return { initListAction, handleInputChange, handleButtonClick, handleItemDelete }
}