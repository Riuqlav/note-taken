# ✨ Note-taking System ✨

## 📑 Table of Contents

- [🌟 Overview](#overview)
- [🛠 Tech Stack](#tech-stack)
- [🚀 Getting Started](#getting-started)
  - [📦 Prerequisites](#prerequisites)
  - [🔧 Installation](#installation)
- [🗄 Database Schema](#database-schema)
- [📝 API Documentation](#api-documentation)
- [🧪 Testing](#testing)
- [💡 Design Decisions](#design-decisions)
- [⚖ Trade-offs](#trade-offs)
- [📜 License](#license)
- [📬 Contact](#contact)

---

## 🌟 Overview

A **robust and efficient** note-taking system to help you _capture_ and **organize** your thoughts, ideas, and reminders.

---

## 🛠 Tech Stack

- **🖥 Front-end**: React with TypeScript
- **🎨 Styling**: Tailwind CSS
- **🔥 Back-end**: Firebase Firestore
- **🧪 Testing**: Jest

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js
- npm
- Firebase Account

---

## 🔧 Installation

1️⃣ Clone the repo  
 `bash
    git clone https://github.com/Riuqlav/note-taken.git
    `

2️⃣ Navigate to the project directory  
 `bash
    cd note-taken
    `

3️⃣ Install NPM packages  
 `bash
    npm install
    `

4️⃣ Start the development server  
 `bash
    npm run dev
    `

---

## 🗄 Database Schema

_Notes collection_:

- `🆔 id`: unique identifier
- `📝 title`: string
- `📃 content`: string
- `⏰ timestamp`: date
- `🔄 lastUpdated`: date

---

## 📝 API Documentation

- **✨ Create Note**: `POST /api/notes`
- **📝 Update Note**: `PUT /api/notes/:id`
- **🗑 Delete Note**: `DELETE /api/notes/:id`
- **📋 List Notes**: `GET /api/notes`

---

## 🧪 Testing

Run the following command to execute the unit tests.

```bash
npm test
```

---

## 💡 Design Decisions

### 🔥 Firestore Firebase for Backend

We chose Firestore Firebase as the database for the following compelling reasons:

#### Pros:

1. **Real-Time Updates**: Firestore allows real-time data updates, invaluable for a note-taking app where immediate reflection of data is often needed.

2. **Scalability**: Firestore's design allows it to scale effortlessly, fitting well with potential for a large user base.

3. **Simplified Data Synchronization**: Firestore easily syncs data across multiple devices.

4. **Security**: Robust security measures are provided directly at the database level.

5. **Ease of Use**: Firestore's client libraries simplify the development process.

6. **Reduced Server Load**: Without the need for a middle-man server for database calls, application speed improves.

#### Direct Frontend-Database Interaction:

1. **Lower Latency**: Reduced latency as server round-trips are eliminated.

2. **Reduced Complexity**: Eliminates need to maintain separate API endpoints for CRUD operations.

3. **Cost-Efficiency**: Costs are further reduced as extensive backend setup is unnecessary.

4. **Rapid Development**: Fewer layers result in quicker development and iterations.

### ⚖ Trade-offs

1. **Limited Business Logic**: The architecture might limit complex server-side business logic.

2. **Security Rules Complexity**: As security is directly applied on Firestore, the rules can become complex.

3. **Vendor Lock-in**: Being dependent on Firestore ties you to Google's ecosystem.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📬 Contact

Vincent Souza
🔗 Project Link: [https://riuqlav.github.io/note-taken/](https://riuqlav.github.io/note-taken/)
