# Creative Agency Management System  
**Submitted by:** Shaik Nayum Akthar  
**Role:** Full Stack Developer  
**Tech Stack:** MERN (MongoDB, Express.js, React.js, Node.js)

---

## 1. Introduction  
The **Creative Agency Management System** is a full-stack web application designed to simplify how a creative agency manages its daily operations. The system provides capabilities to manage projects, clients, contact form submissions, and newsletter subscribers in a clean and efficient workflow.

This project includes:  
- A professional and responsive customer-facing website  
- A complete Admin Dashboard for managing agency data  
- Backend API system built with Node.js and Express.js  
- MongoDB integration for real-time database operations  
- Fully functional CRUD features  
- Live cloud deployment using Render  
- End-to-end implementation of modern MERN stack development

This project highlights skills in **React UI/UX**, **REST API development**, **MongoDB schema design**, **image upload handling**, and **cloud deployment workflows**.

---

## 2. Objective of the Project  
The main objectives of this project are:  
- Build a clean, modern, responsive frontend UI  
- Provide an Admin Panel for managing agency tasks  
- Integrate a real MongoDB database  
- Implement proper RESTful API routing  
- Perform CRUD operations across all modules  
- Deploy the frontend to a cloud hosting platform  
- Showcase complete MERN stack development workflow

---

## 3. Features  

### A. Frontend Features (User Website)
#### 1. Hero Section  
- Gradient background  
- Professional headline  
- SVG shapes and design elements  
- CTA (Call-To-Action) button  

#### 2. About Us Section  
- Clear vision explanation  
- Clean typography  
- Professional layout  

#### 3. Why Choose Us Section  
- Attractive icon-based cards  
- Hover effects  
- Modern color themes  

#### 4. Projects Section  
- Fetches projects from backend  
- Shows image, title, and description  

#### 5. Clients Section  
- Dynamic client logos from backend  
- Smooth card layout  

#### 6. Contact Form  
- Fields: Full Name, Email, Mobile, City  
- Saves data to MongoDB  

#### 7. Newsletter Subscription  
- Email subscription  
- Saves to database  

#### 8. Footer  
- Social media icons  
- Company details  
- Copyright

---

### B. Admin Panel Features  
The admin dashboard enables easy management of agency data.

#### 1. Add Project  
- Upload image  
- Enter title & description  
- Stores in MongoDB  

#### 2. View Projects  
- List all projects  
- Delete project  

#### 3. Add Client  
- Upload client logo  
- Enter client name  

#### 4. View Clients  
- View all clients  
- Delete client  

#### 5. Contacts Page  
- Display customer contact submissions  

#### 6. Subscribers Page  
- View all newsletter subscribers  

---

## 4. Technology Stack  

### **Frontend**
- React.js  
- Vite  
- Axios  
- React Router  
- HTML5, CSS3, JavaScript (ES6)

### **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- Multer (File Upload)  
- dotenv  
- CORS  

### **Deployment**
- Render (Frontend Hosting)  
- GitHub (Version Control)

---

## 5. System Architecture  

-Frontend (React + Axios)
  -      |
  -      |  HTTP Requests (GET, POST, DELETE)
  -      ↓
-Backend (Node.js + Express.js)
 -       |
 -       |  Database Queries (Mongoose)
 -       ↓
-MongoDB Database




---

## 6. Database Structure  

### **Clients Collection**
```json
{
  "name": "String",
  "logo": "String"
}
```
### **Projects Collection**
```json
{
  "title": "String",
  "description": "String",
  "image": "String"
}
```
### **Contacts Collection**
```json
{
  "fullName": "String",
  "email": "String",
  "mobile": "String",
  "city": "String"
}
```
### **Newsletter Collection**
```json
{
  "email": "String",
  "date": "Timestamp"

  ```



  ### **7. API Endpoints**
- Clients
- Method	    Endpoint     	Description
- POST	   /api/clients/add	   Add a new client
- GET	/api/clients/all	Get all clients
- DELETE	/api/clients/:id	Delete client
- Projects
- Method	Endpoint	Description
- POST	/api/projects/add	Add new project
- GET	/api/projects/all	Fetch all projects
- DELETE	/api/projects/:id	Delete project
- Contact Form
- Method	Endpoint	Description
- POST	/api/contact/submit	Save contact form data
- GET	/api/contact/all	View all submissions
- Newsletter
- Method	Endpoint	Description
- POST	/api/newsletter/subscribe	Add subscriber
- GET	/api/newsletter/all	View all subscribers


### **8. Steps to Run the Project Locally**
**Backend Setup**
```
cd backend
npm install
npm run dev
```

**Frontend Setup**
```
cd frontend
npm install
npm run dev
```

**Open in Browser**
```
http://localhost:5173/
```

### **9. Deployment Links**

**GitHub Repository**
```
https://github.com/NayumAkthar/creative-agency-management
```

***Live Frontend Deployment**
```

https://creative-agency-management-1.onrender.com/

```
