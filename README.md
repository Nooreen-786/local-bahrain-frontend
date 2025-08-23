 Local Bahrain

**Local Bahrain** is a MERN stack web app that allows users to discover, create, rate, and comment on places and restaurants in Bahrain.

 
 Screenshots

<img width="1897" height="852" alt="Screenshot 2025-08-24 014253" src="https://github.com/user-attachments/assets/8b860b15-0318-4773-b343-0115098d41bf" />


<img width="1914" height="853" alt="Screenshot 2025-08-24 011919" src="https://github.com/user-attachments/assets/f900e7d2-28bb-4d32-b643-3e0d5092354c" />

<img width="1919" height="855" alt="Screenshot 2025-08-24 011938" src="https://github.com/user-attachments/assets/f233527b-1b17-499f-a119-66eb586604ed" />

<img width="1894" height="844" alt="Screenshot 2025-08-24 011950" src="https://github.com/user-attachments/assets/629ae265-2219-4f61-83e3-ec3266f9146e" />

<img width="1893" height="850" alt="Screenshot 2025-08-24 012008" src="https://github.com/user-attachments/assets/d0ce976e-6a54-4c21-9e5a-7daf14dae04e" />


ERD
<img width="1536" height="1024" alt="20250824_013927" src="https://github.com/user-attachments/assets/5c9d91a6-ff5e-4e09-a108-36ba2ddbbeb0" />


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
- **Deployment:** ( Heroku, Railway)

## 📁 Folder Structure

/client → React frontend
/server → Express backend
/models → Mongoose schemas
/routes → Express route handlers
/controllers → Logic per endpoint
/middleware → Auth and error handlers

deployed frontend: https://local-bahrain-frontend.vercel.app/
/ deployed server: https://local-bahrain-backend.up.railway.app/
backend repository: https://github.com/Nooreen-786/local-bahrain-backend.git
frontend repository: https://github.com/Nooreen-786/local-bahrain-frontend.git

## 🧑‍💻 Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas or local instance

### Installation

```bash
git clone https://github.com/nooreenkhatoon786/local-bahrain-frontend.git
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
