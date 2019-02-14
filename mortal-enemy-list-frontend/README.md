#Mortal enemy list front-end

Purpose of this sample application is to show how to create task-based UI.

There are no tests in this project. Architecture is far from perfect. That's not the point of this project.

## Local environment setup

### Install dependencies

```bash
yarn install
```

### Start local server

```bash
yarn start
```

### Prepare build for deployment

Make sure to choose production API host in `src/services/ApiService.js`.

```bash
yarn build
```

## Deployment
```bash
cd /build
surge --domain mortal-enemy-list.surge.sh
```
