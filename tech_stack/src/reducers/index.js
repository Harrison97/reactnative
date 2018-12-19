import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

//combined reducers allows for multiple reducers for app
export default combineReducers({
    //libraryReducer has key of libraries key
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});


//console.log(store.getState());
// >>> { libraries: [] }