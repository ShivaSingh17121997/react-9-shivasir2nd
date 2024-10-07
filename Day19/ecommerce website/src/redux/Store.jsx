import { legacy_createStore } from 'redux'
import Reducer from './Reducer';



export const store = legacy_createStore(Reducer);   // store { }


// store setup completd

// 1 create store
// pass reducer as argument in store
// define initial state in reducer
// define action types
// create reducer;