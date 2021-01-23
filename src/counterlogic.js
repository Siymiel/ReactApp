import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import Counter from './Counter';


const initialState = {count: 0};

// Create a reducer function
function reducer(state = initialState, action){
    switch(action.type) {
        case 'INCREMENT':
            return {count: state.count + action.num};
        default:
            return state;
    }
}

// Create store
const store = createStore(reducer);

// Make the store available to the Counter Component
const el = <Provider store={store}>
                <Counter/>
            </Provider>;

ReactDOM.render(el, document.getElementById('root'));
