import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import axios from 'axios'
import { actionCreate } from './actionCreate'

// eslint-disable-next-line require-yield
function* getInitList() {
  const { initListAction } = actionCreate()

  try {
    const res = yield axios.get('https://www.fastmock.site/mock/9bb3d7842201f4a8971a5d62847340bb/api/list')
    const action = initListAction(res.data)
    console.log(action);
    yield put(action)
  } catch (error) {
    console.log(error);
  }
}

// generator函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga