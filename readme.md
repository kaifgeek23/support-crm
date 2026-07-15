# 🎫 Support CRM System

A modern full-stack Customer Support Ticket Management System built using **React**, **FastAPI**, and **SQLite**. The application enables customer support teams to create, manage, search, filter, and update support tickets through a clean and responsive interface.

---

## 📌 Features

### Dashboard
- View all support tickets
- Dashboard statistics (Total, Open, In Progress, Closed)
- Search tickets by customer name, email, subject, description, or ticket ID
- Filter tickets by status

### Ticket Management
- Create new support tickets
- Auto-generated Ticket IDs
- View detailed ticket information
- Update ticket status
- Add internal notes/comments
- Automatic timestamps

### User Experience
- Responsive UI
- Toast notifications
- Clean dashboard layout
- Status badges
- Fast search and filtering

---

# 🛠 Tech Stack

## Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router
- React Hot Toast
- React Icons

## Backend
- FastAPI
- SQLAlchemy
- SQLite
- Pydantic
- Uvicorn

---

# 📂 Project Structure

```
support-crm/
│
├── backend/
│   ├── main.py
│   ├── routes.py
│   ├── crud.py
│   ├── models.py
│   ├── schemas.py
│   ├── database.py
│   └── tickets.db
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation

## Clone the Repository

```bash
git clone https://github.com/yourusername/support-crm.git
cd support-crm
```

---

## Backend Setup

```bash
cd backend

python -m venv venv
```

Activate the virtual environment

### Windows

```bash
venv\Scripts\activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

Run the backend

```bash
uvicorn main:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 📡 API Endpoints

## Create Ticket

```
POST /api/tickets/
```

## Get All Tickets

```
GET /api/tickets/
```

Supports

- Search
- Status Filter

---

## Get Ticket Details

```
GET /api/tickets/{ticket_id}
```

---

## Update Ticket

```
PUT /api/tickets/{ticket_id}
```

---



# 🎥 Demo Video

Demo Video:

```
Add YouTube Link Here
```

---

# 📈 Future Improvements

- Authentication & User Roles
- Email Notifications
- File Attachments
- Ticket Priority
- Ticket Assignment
- Pagination
- Analytics Dashboard
- Dark Mode

---

# 👨‍💻 Author

**Kaif Shaikh**

Computer Engineering (IoT & Cybersecurity)

M.H. Saboo Siddik College of Engineering

GitHub: https://github.com/kaifgeek23

LinkedIn: https://www.linkedin.com/in/kaif-shaikh-a536262b3/

---

# 📜 License

This project was developed as part of the Datastraw Technologies Full Stack Assessment.