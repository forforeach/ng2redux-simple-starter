import {counterActions} from './../actions/counter.actions';

export const reducer = (state = 0, action) => {
    switch (action.type) {
        case counterActions.INCREMENT:
            return state + 1;
        case counterActions.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};