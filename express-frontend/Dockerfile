# Use a lightweight Node.js base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy only package files first (for efficient caching)
COPY package*.json ./

# Install dependencies (production only)
RUN npm install --production

# Copy the rest of the application
COPY . .

# --- 🔧 Inject environment variable during build ---
# This will receive the value from docker-compose build args
ARG API_URL
ENV API_URL=${API_URL}

# Create a JS config file inside /public that frontend can access
# It allows your browser-side JS to read the backend API URL
RUN mkdir -p frontend && echo "window.API_URL='${API_URL}';" > frontend/config.js


# Expose port 3000 for Express
EXPOSE 3000

# Start the Express server
CMD ["node", "express-server/server.js"]
