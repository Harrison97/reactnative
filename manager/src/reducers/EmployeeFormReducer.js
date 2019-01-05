import {
    EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            //action.payloa === {prop: 'name', value: 'harrison'}
            //[] is ES6 syntax that will = which ever prop is 
            //being called: shift, name, phone etc...
            return { ...state, [action.payload.prop]: action.payload.value };
        default: return state;
    }
};
