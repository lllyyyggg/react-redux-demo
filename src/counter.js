import React from 'react';
import {connect} from 'react-redux'
import {increment, decrement} from './counter.reducer'

class Counter extends React.Component {

  render() {
    //value是store中的State，而其中的两个方法会触发Reducer的执行导致State的变化，State变化之后，Store的subscribe监听的方法(render,setState)会执行,导致重新渲染组件，进入下一个循环。
    console.log("this.props: ", this.props)
  
    return (
        <p>Clicked: {this.props.num} times{' '}
          <button onClick={this.props.increment}>+</button>{' '}
          <button onClick={this.props.decrement}>-</button>
        </p>    
    );
  }
}

export default connect(state => state.counter, {increment, decrement})(Counter);
