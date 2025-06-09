# 🔐 LockIt – A Simple Password Manager

LockIt is a lightweight, front-end password manager built with **React + Vite** and styled using **Tailwind CSS**. It allows users to add, view, and manage their saved passwords securely within the browser using **localStorage** — no backend, no login, no encryption.

> ⚠️ For personal experiments or learning purposes only — not intended for production or storing real credentials.

---

## 🚀 Demo

![App Screenshot](https://github.com/arsalanans47/password-manager/blob/598b9327aaf39159391c1fee6689a7eea083d754/LockIt-mongo/Screenshot.png) <!-- Replace with actual screenshot or GIF later -->

---

## 🛠️ Tech Stack

- ⚛️ **React (Vite)**
- 🎨 **Tailwind CSS**
- 💾 **LocalStorage** (for storing password data)

---

## 📁 Project Structure

```
/
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

- 📋 Add, view, and delete saved passwords
- 🌐 Works completely offline
- 💾 Persists data using `localStorage`
- 📱 Responsive UI with Tailwind CSS
- 🧩 Modular code with React components

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

# 4. Open your browser
http://localhost:5173
```

---

## 🧠 Future Improvements

- 🔐 Add encryption for stored passwords
- 👤 User login/authentication
- ☁️ Cloud sync with a database
- 📱 Mobile-friendly UI enhancements

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
