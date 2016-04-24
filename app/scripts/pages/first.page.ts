import {Component} from 'angular2/core';
import {Connect} from 'ng2redux';

import {increment, decrement} from './../actions/counter.actions';

@Connect({
    mapStateToProps: function (state) {
        return { counter: state };
    },
    mapDispatchToProps: function (dispatch) {
        return {
            onIncrement: () => {
                dispatch(increment());
            },
            onDecrement: () => {
                dispatch(decrement());
            }
        };
    }
})
@Component({
    selector: 'test',
    template: `
        <h1>First Page</h1>
        <button (click)="onIncrement()">Increment</button>
        <button (click)="onDecrement()">Decrement</button>
        <h2>{{counter}}</h2>`,
    styles: [`
        :host {
            display: block;
            border: 1px solid black;
            min-height: 200px;
            background: palegreen;
            padding: 0 20px;
        }`]
})
export class FirstPage { }
