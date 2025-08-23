 Local Bahrain

**Local Bahrain** is a MERN stack web app that allows users to discover, create, rate, and comment on places (e.g. restaurants) in Bahrain.

## 🚀 Features

- 🔐 User authentication (JWT)
- 🏙 CRUD for Places (restaurants, landmarks, etc.)
- 💬 Comments and ratings on places
- 🧾 Admin or user-level access
- 📱 Responsive UI

## 🛠️ Tech Stack

- **Frontend:** React.js,
- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Deployment:** (Optional: Vercel, Netlify, Heroku, Render)

## 📁 Folder Structure

/client → React frontend
/server → Express backend
/models → Mongoose schemas
/routes → Express route handlers
/controllers → Logic per endpoint
/middleware → Auth and error handlers

bash
Copy code

## 🧑‍💻 Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas or local instance

### Installation

```bash
git clone https://github.com/yourusername/local-bahrain.git
cd local-bahrain

# Install backend
cd server
npm install

# Install frontend
cd ../client
npm install
Run Locally
bash
Copy code
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm start
⚙️ Environment Variables (/server/.env)
ini
Copy code
MONGO_URI=your_mongo_connection
JWT_SECRET=your_secret_key
PORT=5000
🔗 API Endpoints
Method	Endpoint	Description
GET	/api/places	Get all places
POST	/api/places	Create a new place
PUT	/api/places/:id	Update a place
DELETE	/api/places/:id	Delete a place
POST	/api/places/:id/comments	Add comment + rating
GET	/api/users/profile	Get logged-in user data