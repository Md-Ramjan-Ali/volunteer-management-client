# SebaConnect – Volunteer Management Website

🌱 A full-stack web application to manage and explore volunteer opportunities. Organizers can post volunteer needs, and users can join as volunteers with seamless authentication and a friendly interface.

---

## 🌐 Live Site

🔗 [Live Site URL](https://your-volunteer-site.web.app/)  
🔗 [Client Repository](https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-ramjan88)  
🔗 [Server Repository](https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-ramjan88)

---

## 🧩 Key Features

- 🔐 Firebase authentication (Email/Password + Google login)
- 📝 Add, update, and delete volunteer need posts
- 🔎 View all volunteer posts with search and category filters
- 🙋 “Be a Volunteer” feature with auto-filled data and request tracking
- 📋 “My Volunteer Posts” and “My Requests” pages for management
- 📬 Organizer can view all requests submitted for their posts
- 💬 Toast and SweetAlert2 for real-time user feedback
- 🔒 Protected routes and role-based data filtering
- 🌗 Clean, responsive UI using Tailwind CSS, Flowbite, and DaisyUI

---

## ⚙️ Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI, Flowbite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Authentication
- **Deployment:** Firebase Hosting (Client) + Vercel (Server)

---

## 📦 npm Packages Used

| Package                     | Purpose                                                  |
|-----------------------------|----------------------------------------------------------|
| `@tailwindcss/vite`         | Integrate Tailwind with Vite for efficient build process |
| `axios`                     | Make HTTP requests to the server                         |
| `firebase`                  | Firebase Auth & SDK                                      |
| `flowbite`                  | UI components for Tailwind CSS                           |
| `framer-motion`             | Smooth animations                                        |
| `motion`                    | Animation utility (used with Framer Motion)              |
| `react` & `react-dom`       | Core React libraries                                     |
| `react-datepicker`          | Date picker input field                                  |
| `react-helmet-async`        | Manage page metadata dynamically                         |
| `react-icons`               | Icon library used in UI                                  |
| `react-router`              | Routing and navigation                                   |
| `react-toastify`            | Toast notifications for user feedback                   |
| `react-toggle-dark-mode`    | UI component for toggling dark/light theme               |
| `react-tooltip`             | Tooltips for hover hints                                |
| `sweetalert2`               | Modals for confirmation, success, and error messages     |
| `swiper`                    | Modern mobile touch slider                              |
| `tailwindcss`               | Utility-first CSS framework                             |

---

## 🔐 Environment Variables

### Client `.env`
```env
VITE_API_URL=https://your-volunteer-server.vercel.app
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
