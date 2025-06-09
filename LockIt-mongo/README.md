# 🔐 LockIt – A Simple Password Manager

LockIt is a full-stack password manager built with **React + Vite**, styled using **Tailwind CSS**, and powered by a **Node.js** backend with **MongoDB** for data storage. It allows users to add, view, and manage their saved passwords securely — no login, no encryption.

> ⚠️ For personal experiments or learning purposes only — not intended for production or storing real credentials.

---

## 🚀 Demo

![App Screenshot](https://github.com/arsalanans47/password-manager/blob/9477c0871bb8978ef3ffc75179c9e4c53c1ca770/LockIt-mongo/Screenshot.png) <!-- Replace with actual screenshot or GIF later -->

---

## 🛠️ Tech Stack

- ⚛️ **React (Vite)** - Fast and modern frontend framework with Vite for optimized builds.
- 🎨 **Tailwind CSS** - Utility-first CSS framework for responsive and intuitive UI.
- 🗄️ **MongoDB** - NoSQL database for persistent and scalable password storage.
- 🌐 **Node.js** - Backend server to handle API requests and database operations.

---

## 📁 Project Structure

```
/
├── backend/                  # Node server (optional or placeholder)
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   ├── server.js
├── public/
│   └── icons/, vite.svg      # Public assets
├── src/
│   ├── assets/               # Images and media
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Manager.jsx       # Main password manager logic
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── vite.config.js
├── package.json
├── README.md                # You're here
```

---

## ✨ Features

- 📋 Add, view, and delete saved passwords via a secure backend.
- 🗄️ Persists data using MongoDB for scalability and reliability.
- 📱 Responsive UI with Tailwind CSS for seamless cross-device experience.
- 🧩 Modular code with React components for maintainability.
---

## 📦 Installation & Running

```bash
# 1. Clone the repository
git clone https://github.com/arsalanans47/lockit.git
cd lockit

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

---

## 📂 Backend Note


The `/backend` folder contains a functional Node.js server (server.js) that connects to MongoDB for storing and retrieving password data.
Ensure the MongoDB URI is correctly configured in the `.env` file.

---

## 🧠 Future Improvements

-  🔐 Add encryption for stored passwords.
-  👤 User login/authentication.
-  ☁️ Cloud sync with a database.
-  📱 Mobile-friendly UI enhancements.

---

## ⚠️ Disclaimer

This app does **not use encryption** or authentication. It is for **educational/demo** purposes only. **Do not use it to store real passwords.**

---

## 📄 License

MIT License – free to use, modify, and distribute.

---

## 👨‍💻 Author

Made with ❤️ by [Arsalan Ayub](https://github.com/arsalanans47)  
Feel free to reach out for collaboration or feedback!
