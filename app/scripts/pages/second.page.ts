import {Component, OnDestroy} from 'angular2/core';
import {Store} from 'ng2redux';

import {counterActions} from './../actions/counter.actions';

@Component({
    selector: 'test',
    template: `
        <h1>Second Page</h1>
        <button (click)="onIncrement()">Increment</button>
        <button (click)="onDecrement()">Decrement</button>
        <h2>{{counter}}</h2>`,
    styles: [`
        :host {
            display: block;
            border: 1px solid black;
            min-height: 200px;
            background: paleturquoise;
            padding: 0 20px;
        }`]
})
export class SecondPage implements OnDestroy {
    unsubscribe: Function;
    counter: number;

    constructor(private store: Store) {
        this.counter = store.getState();
        this.unsubscribe = store.subscribe((state) => {
            this.counter = state;
        });
    }
    onIncrement() {
        this.store.dispatch({ type: counterActions.INCREMENT });
    }
    onDecrement() {
        this.store.dispatch({ type: counterActions.DECREMENT });
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
}
