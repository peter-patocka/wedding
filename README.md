# Wedding page

* React - frontend application
* PHP - to support backend api
* MySQL - to store data

## Development

In the project directory, you run:

```
./run.sh install
```

Then you can start application:

```
./run.sh start_dev
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Run unit tests

`./run.sh test`

Launches the test runner in the interactive watch mode.

## Deployment to production

`yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### Deployment consists of these steps:
1. run all database migration in folder `/api/db/`
2. setup database connection in file `/api/db.php`
3. copy `build/` content to document root
4. copy `/api/` content to `/api/` folder