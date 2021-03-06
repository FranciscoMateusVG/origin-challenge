# The challenge!

Origin is a platform that helps employees put their financial lives on track. It's been helping thousands of users to understand theirs expends and how they can better plan their future.

In order to do that, users should register information regarding their financial situation in our app. Two key pieces of information are his **annual gross income** and **average monthly costs**.

## Overview

### BackEnd

The back end is a microservice that calculates the user score. It is split into three main parts:

- Routes: Where we define the right method and path to call the api
- Middleware: Where we check if the parameters send to the api is sufficient for the service to calculate the user score.
- Controller: Where we receive the parameters and calculate the user score. The business logic is applied here.

### FrontEnd

The FrontEnd is a microservice that works based on react's main principle of atomicization. The main focus here are the 'pages' folder (that works as an component manager) and the 'components' folder which gathers all micro components that are highly reusable. The layout components for example is a special component that is reused across all pages. And the UI components gather all sorts of reusuble components as cards, buttons, inputs and forms!

## Installation

### Important!

We highly recommend using the node version that is specified in the .nvmrc files (16.14.0) and the yarn package manager.

### BackEnd

Go to the folder <b>back</b> and start the dev environment with

```bash
npm install
npm run dev
# Or:
yarn
yarn run dev
```

If you wish you can also run the jest tests with:

```bash
npm run test
# Or:
yarn run test
```

There is also the possibility of launching ready to production. In this case it will be created a 'build' folder in the directory with the code compiled into javascript.

```bash
npm start
# Or:
yarn start
```

There is a swagger route once you start the server with how to use the api. Just go to '.../swagger' and you should be able to see how to call the api.

## FrontEnd

Go to the folder <b>front</b> and start the dev environment with

```bash
npm install
npm run dev
# Or:
yarn
yarn run dev
```

There is also the possibility of launching ready to production. In this case it will be created a '.next' folder in the directory with the code compiled into javascript.

```bash
npm run build
npm start
# Or:
yarn run build
yarn start
```
