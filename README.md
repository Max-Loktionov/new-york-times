<div style="  padding:20px;">
 <h1 style="text-align: center;  ">New York Times</h1>
<h2>...time waits for no one</h2>

![](src/img/watch.jpeg)

</div>

Make sure you have an LTS version of Node.js installed on your computer. Download and install if it is necessary.
Clone this repo.
Install the basic project dependencies with the command npm install.
Start development mode by running the command npm start.

## Available Scripts

``
In the project directory, you can run:

`npm start`
`npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Dependencies:

---

| @reduxjs/toolkit | @mui/material | i18next | react | react-dom | react-redux | react-scripts | redux-persist | typescript |
| ---------------- | ------------- | ------- | ----- | --------- | ----------- | ------------- | ------------- | ---------- |

---

### API:

---

- Use api on routes:

* `/` you can see start page with actual date;
* `/news` click on News if you need to read the news;
* `/profile` profile settings; (private route, is required auth)

if you need to change settings of items to showing in the News, you can find limit of items per page (ITEMS_PER_PAGE = 10) in the views/NewsPage (by default = 10)

##### at this time only the correct data for authentication

#### name: admin

#### password: 12345

---
