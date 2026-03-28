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
- CORS & Dotenv

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
