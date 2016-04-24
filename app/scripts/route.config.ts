import {RouteDefinition} from 'angular2/router';

import {FirstPage, SecondPage} from './pages/pages';

export const ROUTES: RouteDefinition[] = [
    {
        path: '/page1',
        name: 'FirstPage',
        component: FirstPage,
        useAsDefault: true
    }, {
        path: '/page2',
        name: 'SecondPage',
        component: SecondPage
    }
];