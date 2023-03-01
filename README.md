# New York Times - test task

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

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

**Use api on routes: **

- `/` you can see start page with actual date;
- `/news` click on News if you need to read the news;
- `/profile` profile settings; (private route, is required auth)

if you need to change settings of items to showing in the News, you can find limit of items per page (ITEMS_PER_PAGE = 10) in the views/NewsPage (by default = 10)

at this time only the correct data for authentication

### name: admin

### password: 12345
