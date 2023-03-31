# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deploying

1. Build your React application by running the npm run build command in your project directory. This will create a build directory containing your production-ready static files.
2. Create a Cloudflare account if you don't have one already, and add your domain to your account.

3. Create a new Cloudflare Workers script by navigating to the Workers section in your Cloudflare dashboard, and clicking on "Create a Worker".

4. In the Workers editor, paste the following code:

```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const path = url.pathname
  const filePath = `/path/to/build/${path}` // Update this to the correct path to your build directory
  const staticAsset = await fetch(filePath)

  if (staticAsset.ok) {
    return staticAsset
  } else {
    return fetch('/index.html') // Update this to the correct path to your index.html file
  }
}
```

This code sets up a Cloudflare Worker to serve your static assets from the build directory, and fallback to serving index.html for all other requests.

5. Save the worker and test it by navigating to your domain in a web browser.

6. Optionally, configure your domain to use HTTPS and enable caching for your static assets.

Note that these steps are a general guide, and the specific steps may vary depending on your specific application and hosting needs.
