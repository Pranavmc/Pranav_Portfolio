# 🚀 Pranav Mallinath Chougale - Modern MERN Portfolio

[![Deploy with Vercel](https://img.shields.io/badge/Deploy-Vercel-000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/new)
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

## ☁️ Ultimate Free Deployment Guide

Follow these granular steps to host your portfolio for **$0/month**.

### Phase 1: Database Setup (MongoDB Atlas)
1.  **Sign Up**: Go to [MongoDB Atlas](https://www.mongodb.com/atlas) and create a free account.
2.  **Create Cluster**: 
    *   Click **"Create"** and select the **"M0"** (Free) tier.
    *   Choose a provider (AWS/Google Cloud) and a region near you.
    *   Click **"Create Deployment"**.
3.  **Security - Quickstart**:
    *   **Username/Password**: Create a user (e.g., `pranav_user`) and a strong password. **Save this!**
    *   **IP Access List**: Click **"Add My Current IP Address"** AND click **"Add IP Address"** and enter `0.0.0.0/0` (this allows Render/Vercel to connect).
4.  **Connect**:
    *   Go to **"Database"** > **"Connect"**.
    *   Select **"Drivers"** > **"Node.js"**.
    *   Copy the connection string (it looks like `mongodb+srv://...`).
    *   Replace `<password>` with your actual password in the string.

### Phase 2: Email Setup (SendGrid)
1.  **Account**: Create a free account at [SendGrid](https://sendgrid.com/).
2.  **Sender Verification**:
    *   Go to **"Settings"** > **"Sender Authentication"**.
    *   Click **"Verify a Single Sender"**.
    *   Fill out the form with your name and email. Check your inbox to verify.
3.  **API Key**:
    *   Go to **"Settings"** > **"API Keys"**.
    *   Click **"Create API Key"** > **"Full Access"**.
    *   **Copy and save this key immediately!** (It won't be shown again).

### Phase 3: Backend Deployment (Render)
1.  **Connect GitHub**: Log in to [Render](https://render.com/) and click **"New +"** > **"Web Service"**.
2.  **Repository**: Select your `Pranav_Portfolio` repository.
3.  **Settings**:
    *   **Name**: `portfolio-api` (or similar).
    *   **Root Directory**: `server`
    *   **Build Command**: `npm install`
    *   **Start Command**: `npm start`
    *   **Plan**: `Free`
4.  **Environment Variables**: Click **"Advanced"** > **"Add Environment Variable"**:
    *   `MONGO_URI`: (Your string from Phase 1)
    *   `ALLOWED_ORIGINS`: (Enter `https://temp-placeholder.vercel.app` for now, update later)
    *   `SENDGRID_API_KEY`: (Your key from Phase 2)
    *   `EMAIL_FROM`: (Your verified email from Phase 2)
    *   `EMAIL_FROM_NAME`: `Portfolio Notification`
    *   `EMAIL_RECEIVER`: (The email where you want to receive messages)
5.  **Deploy**: Click **"Create Web Service"**. Copy the service URL (e.g., `https://api.onrender.com`).

### Phase 4: Frontend Deployment (Vercel)
1.  **Project**: Log in to [Vercel](https://vercel.com/) and click **"Add New"** > **"Project"**.
2.  **GitHub**: Import your repository.
3.  **Configure Project**:
    *   **Root Directory**: Click "Edit" and select the `client` folder.
    *   **Framework Preset**: Select **"Vite"** (should be auto-detected).
    *   **Build & Output Settings**: Should be `npm run build` and `dist`.
4.  **Environment Variables**: Click **"Environment Variables"**:
    *   Add `VITE_API_BASE_URL`: (Your Render URL from Phase 3 + `/api`)
    *   *Example: `https://portfolio-api.onrender.com/api`*
5.  **Deploy**: Click **"Deploy"**. Copy your new Vercel URL (e.g., `https://pranav-portfolio.vercel.app`).

### Phase 5: Final Handshake
1.  **CORS**: Go back to **Render** > Your Service > **Settings** > **Environment**.
2.  Update `ALLOWED_ORIGINS` to your actual Vercel URL.
3.  **Redeploy**: Render will automatically redeploy when you save the variables.

---

## 🛠️ Performance & Troubleshooting
*   **Cold Starts**: Render's Free Tier pauses after 15 mins of inactivity. The first contact form submission might take **~30 seconds** to trigger.
*   **Redirects**: The `client/vercel.json` file handles SPA routing, ensuring that page refreshes on sub-routes don't trigger 404s.
*   **Environment Sync**: Ensure `VITE_API_BASE_URL` on Vercel always ends with `/api`.

---
*Created with ❤️ by [Pranavmc](https://github.com/Pranavmc)*


