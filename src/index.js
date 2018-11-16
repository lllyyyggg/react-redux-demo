import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


import reducer from './reducer'     //Reducer, store.dispatch(Action)之后，Reducer就会根据Action的type来返回新的state。
import {createStore} from 'redux';    //Store,用于创建Store，createStore(Reducer), applyMiddleware用于创建中间件。
import Counter from './counter';        //VIEW, VIEW来绑定事件触发Reducer的执行。

import { Provider } from 'react-redux'  //提供全局的store

const store = createStore(reducer);    //使用中间件
const rootEl = document.getElementById('root');

const render = () => {
    ReactDOM.render(
            <Provider store={store}>
                <div>
                    <Counter/>
                </div>
            </Provider>
        , 
        rootEl
    );
}

render();   //执行渲染操作      
store.subscribe(render);    //store绑定渲染事件，只要status发生变化，那么就调用render函数。
//listener

serviceWorker.unregister(); 
