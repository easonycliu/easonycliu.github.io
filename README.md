# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Environment

Get the pre-built environment with a single command under the project directory

```
docker run --rm --net=host -v $PWD:/root -it easonliu12138/react_basic:v1.5 bash

# In the docker
cd /root
```

## Build

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deploy
```
# Commit your changes
git add .
git commit -m "x message"

# Push to the github
git push origin master
git subtree push --prefix=build origin gh-pages
```
