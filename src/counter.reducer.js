import Axios from "axios";

//Reducer
export default ( state =  { num : 1111 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return { num : state.num + 1 , payload : action.payload, payload :action.host};
        case 'DECREMENT':
            return { num : state.num - 1 };
        case  'TOZERO':
            return {num : 0 , msg: "Oh, This is new!!!"}    
        default : 
            return state;        
    }
}



// ActionCreator
export function increment() {
    return {
        type:"INCREMENT"
    }
}

export function decrement() {
    return {
        type:"DECREMENT"
    }
}

