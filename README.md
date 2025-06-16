# 📊 ExcelAnalytics

> Transform raw Excel data into dynamic dashboards, charts, and AI-powered summaries — built using the MERN stack and OpenRouter AI.

---

## 🌟 Live Demo

🌐: [https://visualexcel.netlify.app](https://visualexcel.netlify.app) 

---
ExcelAnalytics/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── utils/
│   ├── config/
│   └── server.js
└── README.md

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



