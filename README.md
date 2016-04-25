# [ng2redux](https://github.com/forforeach/ng2redux) simple application

## Overview

[ng2redux](https://github.com/forforeach/ng2redux) is [`Angular2`](https://angular.io/) bindings for [`Redux`](http://redux.js.org/). This repository includes a very simple example of usage of ng2redux. It implements counter application with two different pages. Each page shows different approach of working with Redux `store`.

1. Usage of [`@Connect`](https://github.com/forforeach/ng2redux#connect) decorator, that allows to bind properties and actions to a component. It maps state to properties and updates them on every state change. It also maps `store`'s [dispatch](http://redux.js.org/docs/api/Store.html#dispatch) method to actions and allows to dispatch actions on `component`'s events.

2. Injection of [`Store`](https://github.com/forforeach/ng2redux#store) into a `component`. Since the store is injected, it is available in `component`'s scope and allows a user to subscribe to `state` changes and to dispatch actions.

## Live example

Live example can be found here: http://forforeach.github.io/ng2redux-simple-starter

## Quickstart

Clone this repository and run:

- `npm run setup`
- `npm start`

## Dependencies

- [node.js](https://nodejs.org/en/)

## Troubleshooting

If you find yourself running into issues during installation or running of this application, please
 open an [issue](https://github.com/forforeach/ng2redux-simple-starter/issues).

## Based on

This app is based on Google's [Web Starter Kit](https://developers.google.com/web/tools/starter-kit/). This is great starter for web apps that implements build workflow with [Gulp](http://gulpjs.com/).

## License

MIT
Copyright 2016 Dima Kuzmich
