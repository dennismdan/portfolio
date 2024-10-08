This is a static website hosted on S3 and distributed with cloud front. 

# Quick Start 
1. Get latest code from github master 
2. Update code 
3. Update data (src/assets/data.json) all text, logos, and paragraphs
2. npm install - installs all needed packages 
3. npm run - runs app during development 
4. npm run build - build app and creates **build** folder 
5. aws s3 sync build "s3://www.dennismorozov.com/" 



# Lengthy Resouces 
## React Portfolio Initial Contribution 
A few resources for the react app portofolio

https://github.com/techomoro/ReactMultiPageWebsite

https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/

https://react-resume-template.herokuapp.com/#portfolio

### Routing Within Static Website 
https://www.internetkatta.com/host-angular-2-or-4-or-5-version-in-aws-s3-using-cloudfront



## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## S3 Deployment 

### Method 1
Copy and paste built react app in the s3 bucket that is used to serve the app

### Method 2 
Install [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
Sync up built folder [with s3 bucket](https://sammeechward.com/aws-cli-s3-static-website/)

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)



