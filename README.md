# Sample Todo App (React)

This project is written using ReactJS with Typescript.

![](https://github.com/sameera9th/todo-syfe/blob/main/application-demo.gif?raw=true)

The React source (`src`) was built using [`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html).

## Requisites
* npm >= 6
* NodeJS >= 10

## Quick Reference
* React Dev Server -- You can find the React source code from here (`src`), please use npm (`npm start`) or (`yarn start`) to start the server. Please be make sure to run (`npm install`) before start the dev server.
    * http://localhost:3000*


## File Structure
This is not an exhaustive list, just some worth noting
```
+-- /                             : React application
|   +-- /public                   : React public assets
|   +-- /src                      : React app source
|       +-- /components           : All the components created
|       +-- /customHooks          : Custom hooks created to use within the application
|       +-- /mock                 : Mock data used to run tests
|       +-- /reducer              : Reducers
|       +-- /types                : Data types
|       +-- /utils                : All the utilities (helpers, etc...)
|   +-- /package.json             : React dependencies
```
### Starting React Application

> **First** - move to `/client`, then you need to intall dependencies using `npm install` or `yarn install` then you can start the dev server using `npm start` or `yarn start`. The defaul port for the react application is 3000, you can check if the application started successfully by visiting `http://localhost:3000`

### Run API tests

**First** -  You can run the tests using `npm run test` or `yarn run test`. Please note that test coverage is only for the main logic which are (Add, Edit, Delete, Reset Todos)

> **Note**: There are no test converage for User Interfaces.

![alt text](https://github.com/sameera9th/todo-syfe/blob/main/test-coverage.png?raw=true)