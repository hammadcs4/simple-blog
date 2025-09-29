# Use Node 20 for compatibility with Vite
FROM node:20-alpine

WORKDIR /app

# --------------------
# Backend setup
# --------------------
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend ./

# --------------------
# Frontend setup
# --------------------
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend ./

# Install process manager globally
RUN npm install -g concurrently

# Expose ports
EXPOSE 8080 5173

# Back to root so paths resolve correctly
WORKDIR /app

# Start both backend and frontend
CMD ["concurrently", "npm --prefix backend start", "npm --prefix frontend run dev"]
