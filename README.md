# 🚀 Pranav Mallinath Chougale - Modern MERN Portfolio

Welcome to my personal portfolio! This project is a complete modernization of my previous static HTML portfolio into a full **MERN-stack application** with a premium, glassmorphic UI, smooth framer-motion animations, and a functioning backend contact form.

---

## 🌟 Highlights & Features
- **Glassmorphic & Dark Neon Aesthetic**: Deep dark backgrounds (`#050816`) with floating aurora gradients and translucent glass cards.
- **Animated Interactions**: Page transitions, 3D tilt hover effects, and animated progress bars powered by `framer-motion`.
- **Dual Resume System**: Seamlessly swap between my **MERN Developer** experience and **DevOps Engineer** experience using a clean tab interface.
- **RESTful API Backend**: A Node.js/Express backend connected to MongoDB that securely handles messages sent through the Contact form.
- **Fully Responsive**: Designed mobile-first to look stunning on both desktop and mobile devices.

---

## 🛠️ Technology Stack
**Frontend (`client/`)**
- React.js (Bootstrapped with Vite for instant server start)
- React Router DOM (Client-side routing)
- Framer Motion (Complex declarative animations)
- Axios (HTTP client for API requests)
- Vanilla CSS (Custom design system utilities)

**Backend (`server/`)**
- Node.js & Express
- MongoDB & Mongoose (NoSQL Database)
- CORS, Dotenv, and Resend email API

---

## 🏃‍♂️ How to Run the Project Locally

Because this is a full-stack application, you need to run both the Backend (server) and the Frontend (client) at the same time.

### 1. Start the Backend API (Terminal 1)
Open a terminal, navigate to the `server` folder, install dependencies (if not already done), and start the Express server.

```bash
cd "server"
npm install
node index.js
```
The server will start running on `http://localhost:5000`. It will attempt to connect to a local MongoDB instance. If MongoDB isn't running locally, the server will still boot up but log a warning text.

### 2. Start the Frontend App (Terminal 2)
Open a new terminal, navigate to the `client` folder, install dependencies, and start the Vite development server.

```bash
cd "client"
npm install
npm run dev
```
The frontend will start running on `http://localhost:5173`. 

### 3. View the App
Open your web browser and go to:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## ☁️ Free Deployment

As of April 6, 2026, a practical free setup for this project is:
- `Vercel Hobby` for the frontend
- `Render Free Web Service` for the backend
- `MongoDB Atlas Free` for the database
- `Resend Free` for email notifications

After finishing this checklist:
1. your frontend will be deployed on Vercel
2. your backend will be deployed on Render
3. contact form data will be stored in MongoDB Atlas
4. you will receive an email notification for every message through Resend

### Checklist

#### 1. Push the project to GitHub

1. Create a GitHub repository.
2. Push the full project to GitHub.
3. Make sure `client/`, `server/`, [render.yaml](/c:/Users/ignit/OneDrive/Desktop/Pranav%20Portfoio/render.yaml), and [client/vercel.json](/c:/Users/ignit/OneDrive/Desktop/Pranav%20Portfoio/client/vercel.json) are included.

#### 2. Create a free MongoDB Atlas database

1. Create a MongoDB Atlas account.
2. Create a free cluster.
3. Create a database user.
4. Allow network access.
5. Copy the connection string and replace username, password, and database name.

Example:

```text
MONGO_URI=mongodb+srv://username:password@clustername.mongodb.net/pranavportfolio?retryWrites=true&w=majority
```

#### 3. Create a free Resend setup

1. Create a Resend account.
2. Add a sender email or verified domain.
3. Create an API key.
4. Choose the inbox where you want to receive contact form messages.

Use values like:

```text
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
EMAIL_FROM=Portfolio <noreply@yourdomain.com>
EMAIL_RECEIVER=yourname@gmail.com
```

What these mean:
- `RESEND_API_KEY`: lets your backend send emails through Resend
- `EMAIL_FROM`: the sender address shown in the notification email
- `EMAIL_RECEIVER`: the inbox where you receive contact form notifications

This project already sends contact form notifications through [server/routes/contact.js](/c:/Users/ignit/OneDrive/Desktop/Pranav%20Portfoio/server/routes/contact.js).

#### 4. Configure local environment files

Copy [server/.env.example](/c:/Users/ignit/OneDrive/Desktop/Pranav%20Portfoio/server/.env.example) to `server/.env`.

Set `server/.env` like this:

```text
MONGO_URI=your-mongodb-connection-string
PORT=5000
ALLOWED_ORIGINS=http://localhost:5173
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
EMAIL_FROM=Portfolio <noreply@yourdomain.com>
EMAIL_RECEIVER=yourname@gmail.com
```

Create `client/.env` like this:

```text
VITE_API_BASE_URL=http://localhost:5000/api
```

#### 5. Test the project locally

Start backend:

```bash
cd server
npm install
npm start
```

Start frontend:

```bash
cd client
npm install
npm run dev
```

Then:
1. open the contact page
2. submit a test message
3. confirm the message is saved in MongoDB
4. confirm the email arrives at `EMAIL_RECEIVER`

If email does not arrive, check:
- `RESEND_API_KEY`
- `EMAIL_FROM`
- spam folder

#### 6. Deploy the backend to Render

1. Create a Render account.
2. Connect GitHub.
3. Click `New +` and choose `Blueprint`.
4. Select this repository.
5. Render will detect [render.yaml](/c:/Users/ignit/OneDrive/Desktop/Pranav%20Portfoio/render.yaml).
6. Keep the plan as `Free`.
7. Add these environment variables:

```text
MONGO_URI=your-mongodb-connection-string
ALLOWED_ORIGINS=https://your-project-name.vercel.app
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
EMAIL_FROM=Portfolio <noreply@yourdomain.com>
EMAIL_RECEIVER=yourname@gmail.com
```

8. Deploy.
9. Copy the backend URL.

Example:

```text
https://your-service-name.onrender.com
```

#### 7. Deploy the frontend to Vercel

1. Create a Vercel account.
2. Connect GitHub.
3. Import the same repository.
4. Set `Root Directory` to `client`.
5. Confirm framework `Vite`.
6. Add this environment variable:

```text
VITE_API_BASE_URL=https://your-service-name.onrender.com/api
```

7. Deploy.
8. Copy the frontend URL.

Example:

```text
https://your-project-name.vercel.app
```

#### 8. Connect frontend and backend

1. Go back to Render.
2. Set `ALLOWED_ORIGINS` to your real Vercel URL.
3. Save and redeploy if required.

Example:

```text
ALLOWED_ORIGINS=https://your-project-name.vercel.app
```

#### 9. Test the live deployed contact form

1. Open your Vercel site.
2. Go to the contact page.
3. Submit a message.
4. Confirm:
- frontend works
- backend receives the request
- MongoDB stores the message
- Resend sends the email to your inbox

#### 10. Final production example

```text
Render
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/pranavportfolio?retryWrites=true&w=majority
ALLOWED_ORIGINS=https://your-project-name.vercel.app
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
EMAIL_FROM=Portfolio <noreply@yourdomain.com>
EMAIL_RECEIVER=yourname@gmail.com

Vercel
VITE_API_BASE_URL=https://your-service-name.onrender.com/api
```

#### 11. Important notes

- Render free services may sleep after inactivity, so the first request can be slow.
- Vercel Hobby is enough for most portfolio frontends.
- MongoDB Atlas free is enough for low-volume contact form storage.
- Resend free is usually enough for portfolio email notifications.
- This project saves the message in MongoDB before trying to send the email notification.

---

## 📂 Project Structure Overview

```text
d:\Pranav Portfoio\
│
├── README.md                 # You are here!
├── Pranav_Resume.pdf         # Downloadable Resume File
│
├── /server                   # ⚙️ EXPRESS BACKEND
│   ├── index.js              # Entry point & Express Config
│   ├── .env                  # Environment Variables (Port & Mongo URI)
│   ├── /models
│   │   └── Contact.js        # Mongoose Schema for Contact Form messages
│   └── /routes
│       └── contact.js        # POST /api/contact logic securely saving data
│
└── /client                   # 🎨 REACT FRONTEND
    ├── index.html            # Vite HTML Entry
    └── /src
        ├── App.jsx           # Main React Router configuration + Aurora Base
        ├── index.css         # Global Glassmorphic Design System Variables
        ├── /components
        │   ├── Navbar.jsx    # Animated sticky navigation
        │   └── Footer.jsx    # Glass footer with social icons
        └── /pages
            ├── Home.jsx      # Hero with typewriter and floating orbs
            ├── About.jsx     # Profile photo, hobbies, and bio
            ├── Projects.jsx  # Highlighted projects with 3D tilt cards
            ├── Skills.jsx    # Animated progress slider metrics
            ├── Resume.jsx    # Complex page with MERN / DevOps dual tabs
            └── Contact.jsx   # Contact form configured to perfectly hit the Backend
```

---
*Created by [Pranavmc](https://github.com/Pranavmc)*
