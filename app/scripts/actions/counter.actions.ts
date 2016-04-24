export const counterActions = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
};

export const increment = () => {
    return {
        type: counterActions.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: counterActions.DECREMENT
    };
};