# Taskify - Todo Application

A full-stack todo application built with **React** (frontend), **FastAPI** (backend), and **MongoDB** (database). This application allows users to create, read, update, and delete todo items with a modern, responsive interface.

## 🌐 Live Demo

- **Frontend**: [https://taskify-todo-app.web.app](https://taskify-todo-app.web.app)
- **API Documentation**: [https://your-backend-url.com/docs](https://your-backend-url.com/docs)

## 🚀 Features

- ✅ **Create** new todo items
- 📝 **Edit** existing todos inline
- ✔️ **Mark** todos as complete/incomplete
- 🗑️ **Delete** todos with confirmation
- 📊 **Progress tracking** with completion percentage
- 🎨 **Modern UI** with Tailwind CSS
- 📱 **Responsive design** for all devices
- ⚡ **Real-time updates** with loading states
- 🔄 **Error handling** and user feedback
- 🌐 **REST API** with automatic documentation

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Beautiful icons for React applications
- **JavaScript ES6+** - Modern JavaScript features

### Backend
- **FastAPI** - Modern, fast Python web framework
- **Pydantic** - Data validation using Python type annotations
- **Motor** - Async MongoDB driver for Python
- **Uvicorn** - ASGI server for running FastAPI applications

### Database
- **MongoDB** - NoSQL document database for flexible data storage

### Deployment
- **Firebase Hosting** - Frontend deployment
- **Railway/Heroku** - Backend deployment options

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Python** (v3.8 or higher) - [Download here](https://python.org/)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download here](https://git-scm.com/)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/SimranShaikh20/taskify.git
cd taskify
```

### 2. Backend Setup (FastAPI + MongoDB)

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install fastapi uvicorn motor pymongo python-multipart

# Or using requirements.txt (if available)
pip install -r requirements.txt
```

### 3. Frontend Setup (React)

```bash
# Navigate to frontend directory
cd todo-frontend

# Install dependencies
npm install

# Install additional dependencies
npm install lucide-react

# Install Tailwind CSS (if not already configured)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 4. Database Setup (MongoDB)

#### Option A: Local MongoDB Installation
1. Install MongoDB Community Edition
2. Start MongoDB service:
   ```bash
   # On Windows (as service)
   net start MongoDB
   
   # On macOS with Homebrew
   brew services start mongodb-community
   
   # On Linux
   sudo systemctl start mongod
   ```

#### Option B: MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Update the `MONGODB_URL` in your backend configuration

### 5. Environment Configuration

Create a `.env` file in the backend directory:

```env
# Database Configuration
MONGODB_URL=mongodb://localhost:27017
# For MongoDB Atlas, use your connection string:
# MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/

# API Configuration
HOST=0.0.0.0
PORT=8000
DEBUG=True
```

## 🏃‍♂️ Running the Application

### 1. Start the Backend Server

```bash
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The backend will be available at:
- **API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **Alternative Docs**: http://localhost:8000/redoc

### 2. Start the Frontend Development Server

```bash
cd todo-frontend
npm start
```

The frontend will be available at:
- **Application**: http://localhost:3000

## 📁 Project Structure

```
taskify/
├── __pycache__/                 # Python cache files
├── config/
│   ├── __pycache__/
│   └── database.py             # Database connection configuration
├── model/
│   ├── __pycache__/
│   └── todos.py                # Pydantic models for data validation
├── routes/
│   ├── __pycache__/
│   └── route.py                # API route handlers
├── schema/
│   ├── __pycache__/
│   └── schemas.py              # Data schemas
├── todo-frontend/
│   ├── node_modules/           # Node.js dependencies
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoForm.js     # Form for creating new todos
│   │   │   ├── TodoItem.js     # Individual todo item component
│   │   │   └── TodoList.js     # List container for todos
│   │   ├── App.css             # Application styles
│   │   ├── App.js              # Main React application
│   │   ├── App.test.js         # Application tests
│   │   ├── index.css           # Global styles
│   │   ├── index.js            # React entry point
│   │   ├── logo.svg            # React logo
│   │   └── reportWebVitals.js  # Performance monitoring
│   ├── package.json            # Node.js dependencies
│   └── package-lock.json       # Dependency lock file
├── firebase.json               # Firebase configuration
├── .firebaserc                 # Firebase project settings
└── main.py                     # FastAPI application entry point
```

## 🔌 API Endpoints

The backend provides the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/todos/` | Get all todos |
| `POST` | `/todos/` | Create a new todo |
| `GET` | `/todos/{id}` | Get a specific todo |
| `PUT` | `/todos/{id}` | Update a todo |
| `DELETE` | `/todos/{id}` | Delete a todo |
| `GET` | `/` | API status |
| `GET` | `/health` | Health check |


## 🔧 Configuration

### Backend Configuration

Edit `.env` file in the root directory to configure:

```env
# Database
MONGODB_URL=mongodb://localhost:27017
DATABASE_NAME=taskify_db

# Server
HOST=0.0.0.0
PORT=8000
DEBUG=True

# CORS (add your frontend URLs)
CORS_ORIGINS=["http://localhost:3000", "https://taskify-todo-app.web.app"]
```

### Frontend Configuration

Update API base URL in your frontend service files:

```javascript
// For development
const API_BASE_URL = 'http://localhost:8000';

// For production
const API_BASE_URL = 'https://your-backend-url.com';
```

## 🚀 Deployment

### 🔥 Firebase Deployment (Frontend)

Deploy your React frontend to Firebase Hosting for free:

#### 1. 📦 Build the React App

```bash
cd todo-frontend
npm run build
```

#### 2. 🔧 Set Up Firebase Hosting

Install Firebase CLI and login (one-time setup):

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login
```

#### 3. 🎯 Initialize Firebase

```bash
cd todo-frontend
firebase init
```

**Configuration Options:**
- ❓ **Which Firebase features?** → Select "Hosting"
- ❓ **Select a default Firebase project** → Choose existing or create new project
- ❓ **Public directory** → Enter: `build`
- ❓ **Configure as single-page app?** → **Yes**
- ❓ **Set up automatic builds with GitHub?** → **No** (for now)
- 🚫 **Don't overwrite** `index.html` if prompted

This creates a `firebase.json` file:

```json
{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

#### 4. 🚀 Deploy to Firebase

```bash
firebase deploy
```

After deployment, you'll get a live URL:
```
✅ Deploy complete!

Project Console: https://console.firebase.google.com/project/taskify-todo-app
Hosting URL: https://taskify-todo-app.web.app
```

#### 5. 🔄 Future Deployments

For subsequent deployments:

```bash
# Build the latest changes
npm run build

# Deploy to Firebase
firebase deploy
```

### 🚂 Backend Deployment (Render)

Deploy your FastAPI backend easily using [Render](https://render.com):

## 🐛 Troubleshooting

### Common Issues

#### 1. MongoDB Connection Error
```
pymongo.errors.ServerSelectionTimeoutError
```
**Solution**: Make sure MongoDB is running and the connection string is correct.

#### 2. CORS Error
```
Access to fetch at 'http://localhost:8000' from origin 'http://localhost:3000' has been blocked by CORS policy
```
**Solution**: Ensure CORS middleware is properly configured in `main.py`.

#### 3. Firebase Deployment - Blank Page
**Solution**: 
- Ensure `"public": "build"` in `firebase.json`
- Check SPA rewrite rule exists
- Clear browser cache

#### 4. Port Already in Use
```
OSError: [Errno 48] Address already in use
```
**Solution**: Kill the process using the port or use a different port:
```bash
# Kill process on port 8000
lsof -ti:8000 | xargs kill -9

# Or use different port
uvicorn main:app --reload --port 8001
```

### Debug Mode

Enable debug mode by setting `DEBUG=True` in `.env` file or running:

```bash
uvicorn main:app --reload --log-level debug
```

## 📚 API Documentation

FastAPI automatically generates interactive API documentation:

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

These interfaces allow you to:
- Explore all available endpoints
- Test API calls directly from the browser
- View request/response schemas
- Download OpenAPI specification

## 🧪 Testing

### Backend Testing

```bash
# Install testing dependencies
pip install pytest httpx

# Run tests
pytest
```

### Frontend Testing

```bash
cd todo-frontend

# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Simran Shaikh**
- GitHub: [SimranShaikh20](https://github.com/SimranShaikh20)
- Project: [Taskify](https://github.com/SimranShaikh20/taskify)

## 🙏 Acknowledgments

- [FastAPI](https://fastapi.tiangolo.com/) for the amazing Python web framework
- [React](https://reactjs.org/) for the powerful frontend library
- [MongoDB](https://www.mongodb.com/) for the flexible database solution
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Firebase](https://firebase.google.com/) for free and reliable hosting

---

⭐ **If you found Taskify helpful, please give it a star!** ⭐

🌐 **Live Demo**: [App](https://taskify-1e72c.web.app/)