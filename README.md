# Job Api - test task

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Dependencies:

---

| @heroicons/react | axios | react | react-dom | react-paginate | react-scripts | react-spinners | typescript |
| ---------------- | ----- | ----- | --------- | -------------- | ------------- | -------------- | ---------- |

---

### API:

---

**Use api on routes: `/` and `/:id `**

- `/` you can see start page with list of actual jobs;
- `/:id` click on job if you need to read detail information about choosen job.

if you need to change settings of pagination, you can find limit of items per page in the pages/JobBoard AMOUNT_OF_ITEMS (by default = 3)
