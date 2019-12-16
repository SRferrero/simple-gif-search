# SearchGif

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.0-rc.2.

please install the dependencies by running `npm install`

I chose to not go for the overengenering adding libraries for managing state and so and make an easy to read application. Coul look a bit stright forward and simple, but sometimes less is more.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `npm run prod` for a production build.

If you want to serve the prod build you can run `npm run start-prod` and after is finished navigate to `http://localhost:5000/`.

## What is next

Next things could be add some store like NgRx. Maybe implement some more advanced patterns like the Facade to show some more maintanable services.
Another things that can be played with would be tailwindcss.

## Using the app

The app is fairly simple. I didnt want to add any button for search since its straight forward the search bar with a small debounce on it and it will display the list of gifs you searched.

Some funcionality is hardcoded since its a demo app, but the baseline to expand from it is "drawn" in this app.

## Unit tests

All you have to do is run `npm test` and karma will run the test suites. `http://localhost:9876/` will be opened by default for a visual interface of the tests as well.

## E2E

I used cypress for e2e since I love how easy is to create tests with this tool.

# how to run it

We need to have the app running and then runn the e2e tests. We probably have the app open while tryinh it (done with `npm start`) so we can just run cypress with `npm run cypress:open`. This will open a popul with the scenarios and from there we can just see them life.
