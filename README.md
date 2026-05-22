# FoodShare 🍱

A full-stack MERN application that helps reduce food waste by connecting people with surplus food to nearby individuals who can claim it.

Users can post food listings, browse available food nearby, claim listings in real time, and share pickup details seamlessly.

---

# 🚀 Features

* Create food listings
* Browse nearby available food
* Claim food listings
* Share claimer details with food owners
* Food expiry/deadline tracking
* Active & claimed status management
* Responsive modern UI
* REST API integration
* Professional frontend/backend architecture
* MongoDB database integration

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* React Router DOM
* Axios
* CSS3

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

---

# 📂 Project Structure

```bash
foodshare/
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── styles/
│   │   └── data/
│   │
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── app.js
│   │   └── server.js
│   │
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <your-repository-url>
cd foodshare
```

---

# 🔹 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🔹 Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🔹 Environment Variables

Create a `.env` file inside `backend/`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

---

# 🧩 API Endpoints

## Get All Listings

```http
GET /api/listings
```

---

## Create Listing

```http
POST /api/listings
```

---

## Claim Listing

```http
PATCH /api/listings/:id/claim
```

---

# 📸 Core Functionalities

### ✅ Post Food Listings

Users can share surplus food with details like:

* title
* quantity
* location
* expiry duration
* food type

---

### ✅ Browse Available Food

Users can explore nearby available food listings with:

* status indicators
* urgency labels
* expiry countdowns

---

### ✅ Claim Food

Users can claim food listings and automatically share:

* name
* phone number
* pickup message

with the listing owner.

---

# 💡 Future Improvements

* JWT Authentication
* Real-time notifications
* Google Maps integration
* Image uploads
* Chat system
* Push notifications
* Geolocation support
* Admin dashboard
* Dark mode

---

# 🧠 What I Learned

* Building scalable MERN architecture
* REST API development
* MongoDB schema design
* Frontend-backend integration
* React component structuring
* State management
* Professional project organization

---

# 👨‍💻 Author

Aditya

---

# ⭐ If you like this project

Give it a star on GitHub and feel free to contribute!
