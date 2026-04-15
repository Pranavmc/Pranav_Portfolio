# 🚀 Pranav Mallinath Chougale - Modern MERN Portfolio

[![Deploy to Netlify](https://img.shields.io/badge/Deploy-Netlify-00AD9F.svg?style=for-the-badge&logo=netlify)](https://www.netlify.com/)
[![Deploy to Render](https://img.shields.io/badge/Deploy-Render-46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)
[![Database-MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)

A premium, glassmorphic MERN-stack portfolio designed for high visibility and seamless user interaction. Built with React (Vite), Node.js, and MongoDB, featuring a fully functional contact form and 3D animations.

---

## 🌟 Key Features
*   **Premium Glassmorphic UI**: Deep-space aesthetic with floating aurora gradients and translucent components.
*   **Dynamic Animations**: Powered by `framer-motion` for smooth page transitions and interactive 3D elements.
*   **Dual Resume System**: Seamlessly switch between **MERN Developer** and **DevOps Engineer** perspectives.
*   **Integrated API Backend**: Node.js/Express server handling secure message storage and email notifications.
*   **SEO Optimized**: Semantic HTML and meta-tagging for better search engine discovery.

---

## 🏃‍♂️ Quick Start (Local Development)

To run the project locally, you'll need two terminals open:

### 1. Backend (Server)
```bash
cd server
npm install
npm run dev
```
*Runs on `http://localhost:5000`*

### 2. Frontend (Client)
```bash
cd client
npm install
npm run dev
```
*Runs on `http://localhost:5173`*

---

## ☁️ Free Deployment Guide

Follow these steps to host your portfolio for **$0/month** using industry-standard free tiers.

### 1. Database Setup (MongoDB Atlas)
1.  Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas).
2.  Deploy a "Shared" cluster (Free).
3.  Add a Database User and allow network access (IP `0.0.0.0/0`).
4.  Copy your Connection String.

### 2. Email Setup (SendGrid)
1.  Create a free [SendGrid account](https://sendgrid.com/).
2.  Create an API Key with "Full Access".
3.  Verify your "Sender Identity" (Email).

### 3. Backend Deployment (Render)
1.  Go to [Render.com](https://render.com/) and connect your GitHub repository.
2.  Click **New +** > **Blueprint**.
3.  Render will automatically use `render.yaml` to configure the service.
4.  **Important**: Set the following Environment Variables in the Render Dashboard:

| Variable | Description | Example |
| :--- | :--- | :--- |
| `MONGO_URI` | MongoDB Atlas Connection String | `mongodb+srv://...` |
| `ALLOWED_ORIGINS` | Your Netlify URL (after step 4) | `https://your-site.netlify.app` |
| `SENDGRID_API_KEY` | Your SendGrid API Key | `SG.xxxxx...` |
| `EMAIL_FROM` | Your verified SendGrid email | `hello@yourdomain.com` |
| `EMAIL_FROM_NAME` | Name shown in the inbox | `Portfolio Bot` |
| `EMAIL_RECEIVER` | Where you want to receive emails | `yourname@gmail.com` |

### 4. Frontend Deployment (Netlify)
1.  Connect your repo to [Netlify](https://www.netlify.com/).
2.  Netlify will use the `netlify.toml` file automatically.
3.  Add this Environment Variable:

| Variable | Description | Example |
| :--- | :--- | :--- |
| `VITE_API_BASE_URL` | Your Render Service URL | `https://your-api.onrender.com/api` |

---

## 📂 Project Architecture

```text
├── /client                   # REACT FRONTEND
│   ├── /src
│   │   ├── /components       # UI Components (Navbar, Footer, etc.)
│   │   ├── /pages            # Page Layouts (Home, About, Projects, etc.)
│   │   └── App.jsx           # Routing & Design Tokens
│   └── netlify.toml          # Netlify Deployment Config
│
├── /server                   # EXPRESS BACKEND
│   ├── /models               # Mongoose Schemas
│   ├── /routes               # API Endpoint Logic
│   └── index.js              # Server Entry Point
│
├── render.yaml               # Render Infrastructure-as-Code
└── README.md                 # You are here!
```

---

## 🛠️ Troubleshooting
*   **CORS Issues**: Ensure your Netlify URL is added to the `ALLOWED_ORIGINS` variable on Render.
*   **Spin-up Delay**: Render's free tier spins down after inactivity. The first request might take 30-50 seconds to respond.
*   **Email Not Sending**: Double-check your SendGrid API key and ensure your "Sender Identity" matches the `EMAIL_FROM` variable.

---
*Created with ❤️ by [Pranavmc](https://github.com/Pranavmc)*
