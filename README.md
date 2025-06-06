# Todo Application

A full-stack todo application built with **React** (frontend), **FastAPI** (backend), and **MongoDB** (database). This application allows users to create, read, update, and delete todo items with a modern, responsive interface.

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

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Python** (v3.8 or higher) - [Download here](https://python.org/)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download here](https://git-scm.com/)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/SimranShaikh20/todo-app.git
cd todo-app
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
todo-app/
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

### Request/Response Examples

#### Create Todo
```bash
curl -X POST "http://localhost:8000/todos/" \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Learn FastAPI",
       "description": "Study FastAPI documentation and build a project",
       "completed": false
     }'
```

#### Response
```json
{
  "id": "64a7b8c9d1e2f3a4b5c6d7e8",
  "name": "Learn FastAPI",
  "description": "Study FastAPI documentation and build a project",
  "completed": false
}
```

## 🔧 Configuration

### Backend Configuration

Edit `.env` file in the root directory to configure:

```env
# Database
MONGODB_URL=mongodb://localhost:27017
DATABASE_NAME=todo_app

# Server
HOST=0.0.0.0
PORT=8000
DEBUG=True

# CORS (add your frontend URLs)
CORS_ORIGINS=["http://localhost:3000", "http://127.0.0.1:3000"]
```

### Frontend Configuration

Update API base URL in your frontend service files:

```javascript
const API_BASE_URL = 'http://localhost:8000';
```

### Tailwind CSS Configuration

The `tailwind.config.js` should include:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

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

#### 3. Port Already in Use
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

#### 4. Module Not Found Error
```
ModuleNotFoundError: No module named 'fastapi'
```
**Solution**: Make sure virtual environment is activated and dependencies are installed.

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

## 🚀 Deployment

### Backend Deployment (Railway/Heroku)

1. Create `Procfile`:
```
web: uvicorn main:app --host 0.0.0.0 --port $PORT
```

2. Update `requirements.txt`:
```
fastapi
uvicorn[standard]
motor
pymongo
python-multipart
```

### Frontend Deployment (Vercel/Netlify)

1. Build the project:
```bash
cd todo-frontend
npm run build
```

2. Deploy the `build` folder to your hosting service.

### Environment Variables for Production

Set these environment variables in your deployment platform:

```env
MONGODB_URL=your_production_mongodb_url
DEBUG=False
CORS_ORIGINS=["https://yourdomain.com"]
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

**Your Name**
- GitHub: [Simran Shaikh](https://github.com/SimranShaikh20)


## 🙏 Acknowledgments

- [FastAPI](https://fastapi.tiangolo.com/) for the amazing Python web framework
- [React](https://reactjs.org/) for the powerful frontend library
- [MongoDB](https://www.mongodb.com/) for the flexible database solution
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons

---

⭐ **If you found this project helpful, please give it a star!** ⭐