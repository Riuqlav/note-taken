# ✨ Note-taking System ✨

## 🌟 Overview

A robust and efficient note-taking system designed to capture and organize your thoughts, ideas, and reminders.

## 🛠 Tech Stack

- **🖥 Front-end**: React with TypeScript
- **🎨 Styling**: Tailwind CSS
- **🔥 Back-end**: Firebase Firestore
- **🧪 Testing**: Jest

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js
- npm
- Firebase Account

### 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Riuqlav/note-taken.git
   ```

2. Navigate to the project directory:

   ```bash
   cd note-taken
   ```

3. Install NPM packages:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🗄 Database Schema

**Notes collection**:

- `🆔 id`: unique identifier
- `📝 title`: string
- `📃 content`: string
- `⏰ timestamp`: date
- `🔄 lastUpdated`: date

## 💡 Design Decisions

### 🔥 Firestore Firebase for Backend

Firestore Firebase was chosen as the database for its:

1. **Real-Time Updates**: Immediate data reflection.
2. **Scalability**: Effortless scaling for a potentially large user base.
3. **Simplified Data Synchronization**: Syncing across multiple devices.
4. **Security**: Measures provided directly at the database level.
5. **Ease of Use**: Simplified development with Firestore's client libraries.
6. **Reduced Server Load**: No middle-man server means improved application speed.

### Direct Frontend-Database Interaction:

1. **Lower Latency**: No server round-trips.
2. **Reduced Complexity**: No need for separate API endpoints.
3. **Cost-Efficiency**: Less extensive backend setup.
4. **Rapid Development**: Faster development with fewer layers.

### ⚖ Trade-offs

1. **Limited Business Logic**: Might limit complex server-side logic.
2. **Security Rules Complexity**: Security is directly on Firestore.
3. **Vendor Lock-in**: Dependency on Google's ecosystem.

## 🧪 Testing

To execute unit tests, run:

```bash
npm test

---

## 🎥 Demo

🔗 Project Link: [https://riuqlav.github.io/note-taken/](https://riuqlav.github.io/note-taken/)

---

## 📬 Contact

Vincent Souza
🔗 LinkedIn: [https://www.linkedin.com/in/vincentsouza/](https://www.linkedin.com/in/vincentsouza/)

---
```
