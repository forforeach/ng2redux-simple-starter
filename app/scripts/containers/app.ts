import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ReduxApp, Connect} from 'ng2redux';

import {increment, decrement} from './../actions/counter.actions';
import {reducer} from './../reducers/reducer';
import {ROUTES} from './../route.config';


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
@RouteConfig(ROUTES)
@ReduxApp({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <h1>Hello counter app!</h1>
        <button (click)="onIncrement()">Increment</button>
        <button (click)="onDecrement()">Decrement</button>
        <h2>{{counter}}</h2>

        <br/>
        <p>
            <a [routerLink]="['FirstPage']">First Page</a>
            <a [routerLink]="['SecondPage']">Second Page</a>
        </p>
        <router-outlet></router-outlet>`,
    reducer: reducer,
    debug: true
})
export class AppComponent { }