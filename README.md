# ☁️ AWS Cloud Services Project

A full-stack web application demonstrating AWS cloud services with a modern architecture using Express.js, Flask, and MongoDB.

## 🔰 Project Overview

This project showcases a complete full-stack application with:
- **Frontend**: HTML, CSS (Bootstrap 5), and JavaScript (Fetch API)
- **UI Server**: Express.js (Node.js)
- **Backend API**: Flask (Python)
- **Database**: MongoDB

## ⚙️ Tech Stack

- **Frontend**: HTML5, CSS3, Bootstrap 5, Vanilla JavaScript
- **Express Server**: Node.js with Express.js (serves static files)
- **Backend API**: Flask with Flask-CORS
- **Database**: MongoDB with PyMongo
- **Port Configuration**:
  - Express: `3000`
  - Flask API: `5000`
  - MongoDB: `27017`

## 🌐 Project Features

### Home Page (`index.html`)
- AWS-themed cloud design with gradient backgrounds
- Displays all AWS services from the database
- Dynamic loading with Bootstrap cards
- Responsive design for all devices
- Floating cloud icon animation

### Form Page (`form.html`)
- Add new AWS services
- Form validation
- Real-time feedback with success/error alerts
- Auto-redirect to home after successful submission

### API Endpoints

#### Flask Backend (Port 5000)
- `GET /api/services` - Fetch all services
- `POST /api/add_service` - Add a new service
- `GET /api/health` - Health check endpoint

## 📂 Folder Structure

```
aws-services-project/
│
├──express-frontend 
|   ├──frontend/
│   │    ├── index.html          # Home page
│   │    ├── form.html           # Add service form
│   │    ├── style.css           # AWS-themed styling
│   │    └── script.js           # API integration logic
│   ├──express-server/
│        ├── server.js           # Express server
│        ├── package.json        # Dependencies
│        └── node_modules/       # (after npm install)
│
├── flask-backend/
│   ├── app.py              # Flask API
│   └── requirements.txt    # Python dependencies
│
└── README.md               # This file
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- MongoDB (local installation or MongoDB Atlas)

### Step 1: Install MongoDB
Make sure MongoDB is installed and running on your system.

**Start MongoDB locally:**
```bash
mongod
```

Or use MongoDB Atlas (cloud database) and update the connection string in `flask-backend/app.py`.

### Step 2: Install Python Dependencies
```bash
cd flask-backend
pip install -r requirements.txt
```

### Step 3: Install Node.js Dependencies
```bash
cd express-server
npm install
```

### Step 4: Start Flask Backend
```bash
cd flask-backend
python app.py
```
Flask API will run on: `http://localhost:5000`

### Step 5: Start Express Server
```bash
cd express-server
npm start
```
Express server will run on: `http://localhost:3000`

### Step 6: Open the Application
Visit: `http://localhost:3000`

## 🎯 Usage

1. **View Services**: Navigate to the home page to see all AWS services
2. **Add Service**: Click "Add New Service" button or navigate to `/form`
3. **Fill Form**: Enter service name and description
4. **Submit**: Service is saved to MongoDB and displayed on the home page

## 🔧 API Testing

### Test Flask API directly:

**Get all services:**
```bash
curl http://localhost:5000/api/services
```

**Add a service:**
```bash
curl -X POST http://localhost:5000/api/add_service \
  -H "Content-Type: application/json" \
  -d '{"name":"Amazon EC2","description":"Scalable virtual servers in the cloud"}'
```

## 🎨 Features

- ✅ Fully responsive design
- ✅ AWS-themed UI with cloud gradients
- ✅ Real-time data loading
- ✅ Form validation
- ✅ Error handling
- ✅ Loading states
- ✅ Success/failure alerts
- ✅ CORS enabled for cross-origin requests

## 🐛 Troubleshooting

**Services not loading?**
- Ensure Flask API is running on port 5000
- Check MongoDB is running
- Verify CORS is enabled in Flask

**Cannot connect to MongoDB?**
- Check MongoDB service is running
- Verify connection string in `app.py`
- Ensure port 27017 is not blocked

**Port already in use?**
- Change ports in `server.js` (Express) or `app.py` (Flask)
- Update API_URL in `script.js` and `form.html` if Flask port changes

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Developer

Built with Express, Flask, MongoDB, and Bootstrap 5.
