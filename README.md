# 📊 ExcelAnalytics

> Transform raw Excel data into dynamic dashboards, charts, and AI-powered summaries — built using the MERN stack and OpenRouter AI.

---

## 🌟 Live Demo

🌐 Frontend: [https://visualexcel.netlify.app](https://visualexcel.netlify.app)  
🌐 Backend: [https://excelanalytics-backend-l7ql.onrender.com](https://excelanalytics-backend-l7ql.onrender.com)

---

## 🛠 Tech Stack

**Frontend** (React + Tailwind):
- React 19
- Tailwind CSS
- Axios
- Chart.js + react-chartjs-2
- React Router DOM
- AOS Animations
- React Icons
- React Toastify
- Framer Motion

**Backend** (Express + MongoDB):
- Node.js + Express.js
- MongoDB + Mongoose
- Passport.js (Session-based Authentication)
- Google OAuth 2.0
- JWT for password reset
- Express-session + connect-mongo
- CORS, dotenv, bcrypt

**AI Integration**:
- OpenRouter API (GPT-3.5 / Mixtral) for summarization of Excel content.

---

## 🚀 Features

- ✅ **User Authentication**
  - Register/Login with Email
  - Login via Google OAuth
  - Secure session-based auth (with cookies)

- ✅ **Excel File Upload**
  - Parse `.xlsx` files
  - Render charts from selected data
  - Filter by columns and values

- ✅ **Data Visualization**
  - Chart generation (bar, pie, line)
  - Shareable links with embedded chart config

- ✅ **AI Summarization**
  - Smart summaries via OpenRouter API
  - Real-time explanation of uploaded Excel data

- ✅ **Admin Panel**
  - View registered users (available for admin@example.com)

- ✅ **Mobile Responsive**
  - Fully responsive across devices
  - Collapsible navigation for small screens

---

## 🔐 Environment Variables

### Backend `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_uri
SESSION_SECRET=your_super_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_RESET_SECRET=your_jwt_reset_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
OPENROUTER_API_KEY=your_openrouter_api_key


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
