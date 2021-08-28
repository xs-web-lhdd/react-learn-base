#### 俺的第一个 React 项目，用来学习 React 基础知识，嘿嘿嘿(●ˇ∀ˇ●)

React 一些知识点：

#### Redux：

先安装 Redux：

```bash
yarn add redux
```

Redux = Reducer + Flux

<img src="https://i.loli.net/2021/08/28/pVkNq4azCmF7ZhE.png" style="zoom: 50%;" />

##### 工作流：

<img src="https://i.loli.net/2021/08/28/qgAdjb16xShpHJ9.png" style="zoom:50%;" />

把 Redux 的工作流比作借书的流程：

ActionCreators：借书的话

Store：管理员

Reducers：记录本

##### 代码演示：

创建 redux：
目录结构：

```bash
store
	index.js
	reducer.js
	actionCreateors.js
	constants.js
```

index.js 初始代码：

```js
import { createStore } from "redux";
import reducer from "./reducer.js";

const store = createStore(reducer);
export default store;
```

reducer.js 初始代码：

```js
const defaultState = {};
export default (state = defaultState, action) => {
  return state;
};
```
