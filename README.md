# 🩺 DocSpot – Seamless Appointment Booking for Health

DocSpot is a **Full Stack MERN Web Application** designed to simplify doctor appointment booking and healthcare management.
It provides a centralized platform where **patients**, **doctors**, and **admins** can securely manage appointments, schedules, and medical records. 
Drive link source code : https://drive.google.com/drive/folders/15fphp5C54Dj41-NCj6QRZ6DlJJtjDKet?usp=sharing

## 📌 Project Overview

Traditional appointment systems often involve manual booking, long waiting times, and scheduling issues.
DocSpot digitalizes the process by providing an automated, secure, and user-friendly solution using modern web technologies. 

### 🎯 Goals

* Simplify appointment booking for patients
* Help doctors manage schedules efficiently
* Provide admin control over platform operations
* Ensure secure authentication & authorization
* Provide real-time appointment status updates
* Build a scalable MERN-stack healthcare system

---

## 👥 Team Members

* **Suma Sree Mandru** – Frontend Development & UI Design
* **Mohammed Farhan** – Backend Development & API Development
* **Nalam Sathvika** – Database Design & Implementation
* **Trinadh Kurapati** – Testing & System Validation

---

## 🚀 Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Bootstrap
* Material UI

### Backend

* Node.js
* Express.js
* MVC Architecture
* JWT Authentication
* bcrypt Password Hashing

### Database

* MongoDB (Mongoose ODM)

---

## ✨ Features

### 👤 Patient Features

* Registration & Login
* Browse available doctors
* Filter by specialization & availability
* Book appointments (date & time)
* Upload medical documents
* View booking history
* Cancel / Reschedule appointments

### 👨‍⚕️ Doctor Features

* Doctor account registration
* Admin approval workflow
* View appointment requests
* Confirm / Reject / Reschedule appointments
* Manage schedule & consultation details

### 🛠️ Admin Features

* Approve doctor applications
* Manage users and doctors
* Monitor overall platform activities
* Maintain system integrity

---

## 🏗️ Architecture

### Frontend Flow

User Interaction → Axios API Call → Backend → Response → UI Update

### Backend Flow

Client Request → Route → JWT Middleware → Controller → Database → Response

### Backend Structure

```
Routes → Controllers → Models → Middleware
```

---

## 🗂️ Database Collections

### Users

* _id
* name
* email
* password (hashed)
* role

### Doctors

* userId
* specialization
* experience
* availability
* status

### Appointments

* userId
* doctorId
* appointmentDate
* appointmentTime
* status
* documents

---

## ⚙️ Setup Instructions

### Prerequisites

* Node.js (v16+)
* npm
* MongoDB Atlas account
* Git
* VS Code (recommended)

Optional:

* Postman
* MongoDB Compass

---

### 1️⃣ Clone Repository

```bash
git clone <repository-link>
cd docspot
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create `.env` inside **server/**

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---
### Frontend Setup (Node Modules Installation)
## Step 1 — Go to frontend folder
cd frontend

## Step 2 — Install dependencies
npm install


This will install all required packages from package.json into the node_modules folder.

## Step 3 — Run frontend
npm start


or

npm run dev


Frontend will run on:

http://localhost:3000

🛠️ Backend Setup (Node Modules Installation)
## Step 1 — Go to backend folder
cd backend

## Step 2 — Install dependencies
npm install

This installs backend dependencies like Express, Mongoose, etc.

## Step 3 — Run backend server
npm start 


### 3️⃣ Setup Frontend

```bash
cd client
npm install
```

---

### 4️⃣ Run Application

#### Start Backend

```bash
cd server
npm start
```

Backend runs at:

```
http://localhost:5000
```

#### Start Frontend

```bash
cd client
npm start
```

Frontend runs at:

```
http://localhost:3000
```
#### Running Frontend & Backend Together

### Open two terminals:

### Terminal 1
cd frontend
npm start

### Terminal 2
cd backend
npm start

## 📂 Folder Structure

### Client

```
client/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/ or context/
│   ├── hooks/
│   ├── utils/
│   ├── assets/
│   ├── App.js
│   └── index.js
└── package.json
```

### Server

```
server/
│
├── config/
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── uploads/
├── server.js
└── package.json
```

---


### APIs

* Authentication APIs (JWT)
* Doctor APIs
* Appointment APIs
* Admin APIs

Protected routes require:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## 🔐 Authentication & Security

* Password hashing using bcrypt
* JWT token generation
* Role-based access control
* Middleware validation
* Environment variable protection
* HTTP 401/403 for unauthorized access

---

## 🧪 Testing

### Frontend Testing

* Form validation
* Navigation checks
* Role-based rendering
* Appointment workflow

### Backend Testing

* API validation
* JWT verification
* CRUD operations
* Error handling

### Integration Testing

* Axios API communication
* Data consistency validation

---

## ⚠️ Known Issues

* No real-time push notifications
* No email/SMS alerts
* No payment gateway integration
* Basic error messages
* No load balancing or caching
* Manual testing only
* No token refresh mechanism
* Limited file validation
* Minor mobile UI adjustments required

---

## 🔮 Future Enhancements

* Online Payment Integration
* Email & SMS notifications
* Video consultation feature
* Doctor rating & review system
* Advanced search & filtering
* Admin analytics dashboard
* Mobile application (React Native / Flutter)
* Cloud file storage integration
* Automated testing (Jest, Mocha)
* JWT refresh token implementation

---

## 📄 License

This project is built for educational and academic purposes.

---

## ⭐ Acknowledgements

Built using the **MERN Stack** to improve healthcare accessibility through modern web technologies.


## project screenshots
<img width="1280" height="616" alt="image" src="https://github.com/user-attachments/assets/246ba6ba-6698-4594-b17c-43c6c7630f09" />
<img width="1280" height="642" alt="image" src="https://github.com/user-attachments/assets/2b3fb8b8-b223-4905-9383-e4dfec83320a" />
<img width="1280" height="648" alt="image" src="https://github.com/user-attachments/assets/09b838fb-ade9-49a5-aa6d-8dac09b1599b" />
<img width="1280" height="647" alt="image" src="https://github.com/user-attachments/assets/19a43a91-347b-42aa-9bf2-0723d1ebb1fc" />
<img width="1280" height="645" alt="image" src="https://github.com/user-attachments/assets/e5913f90-e617-45ae-bb6f-88f4fdeb6ef3" />
<img width="1280" height="645" alt="image" src="https://github.com/user-attachments/assets/c8489e67-32ab-42c1-aa0a-5d3dcfa15c90" />
<img width="1280" height="644" alt="image" src="https://github.com/user-attachments/assets/b0d0002c-71ca-4062-91f8-e2e1c96ea159" />
<img width="1280" height="643" alt="image" src="https://github.com/user-attachments/assets/6d10f881-2400-4226-b6f0-2059b91d1dee" />
<img width="1280" height="647" alt="image" src="https://github.com/user-attachments/assets/198e29af-54f4-420b-99d8-6a73f7979ec6" />
<img width="1280" height="647" alt="image" src="https://github.com/user-attachments/assets/1504ddfa-be9e-4ff9-bb0f-f847b5c08ada" />
<img width="1280" height="647" alt="image" src="https://github.com/user-attachments/assets/3286dbed-0e4d-426f-ae5a-c2c54563ecf3" />
<img width="1280" height="648" alt="image" src="https://github.com/user-attachments/assets/f4a37487-5875-49dd-946a-3533ae6d8a36" />
<img width="1280" height="650" alt="image" src="https://github.com/user-attachments/assets/8564b9c7-87be-4ac8-b5db-90ac02c8bdfc" />
<img width="1280" height="644" alt="image" src="https://github.com/user-attachments/assets/2ac36996-eb90-4a3a-9c38-91fb164ddb78" />
<img width="1280" height="643" alt="image" src="https://github.com/user-attachments/assets/297841fe-aa5e-4315-b183-3d179863660b" />
<img width="1280" height="645" alt="image" src="https://github.com/user-attachments/assets/2d01f948-6f5b-4ed4-91e7-3eda48a37e8f" />

How to Push Project from VS Code to GitHub
1️⃣ Initialize Git (if not already done)
git init

2️⃣ Add all project files
git add .

3️⃣ Commit your changes
git commit -m "Initial commit"

4️⃣ Create a repository on GitHub

Go to GitHub

Click New Repository

Copy the repository URL

5️⃣ Connect local project to GitHub
git remote add origin https://github.com/your-username/repository-name.git

6️⃣ Push code to GitHub
git branch -M main
git push -u origin main

📂 Pushing Future Changes

Whenever you update your project:

git add .
git commit -m "Updated project"
git push

🤝 Contributing

Contributions are welcome! Follow these steps to contribute:

Fork the repository

Clone your fork:

git clone https://github.com/your-username/repository-name.git


Create a new branch:

git checkout -b feature-name


Make your changes

Commit your changes:

git commit -m "Added new feature"


Push to your branch:

git push origin feature-name


Open a Pull Request on GitHub













