# Full-Stack App Dockerization (Backend + Frontend in One Container)

This guide explains how to dockerize a Node.js backend and a React frontend so they run together inside a single Docker container.

---

## 🛠 Prerequisites

* **Docker** installed ([Get Docker](https://docs.docker.com/get-docker/))
* A project folder with the following structure:

  ```
  Devops-Activity-2/
  ├── backend/
  │   ├── app.js
  │   ├── package.json
  │   └── ...
  ├── frontend/
  │   ├── package.json
  │   └── ...
  └── Dockerfile
  ```

---

## 📝 Dockerfile Used

```dockerfile
# Use Node.js 20 as base image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Backend setup
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend ./

# Frontend setup
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend ./

# Install process manager to run both apps together
RUN npm install -g concurrently

# Expose backend (8080) and frontend (5173) ports
EXPOSE 8080 5173

# Move back to /app
WORKDIR /app

# Run both backend and frontend simultaneously
CMD ["concurrently", "npm --prefix backend start", "npm --prefix frontend run dev"]
```

---

## 🚀 Build the Docker Image

In the root project folder (`Devops-Activity-2`), run:

```bash
docker build -t my-app .
```

---

## ▶️ Run the Container

```bash
docker run -p 8080:8080 -p 5173:5173 my-app
```

---

## ✅ Results

* **Backend** will run on: [http://localhost:8080](http://localhost:8080)
* **Frontend (React Vite)** will run on: [http://localhost:5173](http://localhost:5173)

Sample logs:

```
[0] app is listening at port8080
[1] VITE v7.1.7  ready in 423 ms
[1]   ➜  Local:   http://localhost:5173/
```

---

## 📄 Notes

* Make sure your backend has a `"start"` script defined in `backend/package.json`, e.g.:

  ```json
  "scripts": {
    "start": "node app.js"
  }
  ```
* The frontend should have `"dev"` script (default for Vite).
* Both services run in a single container for simplicity.
  (In real production, you may use **Docker Compose** to separate backend & frontend containers.)
