# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the project files
COPY . .

# Expose the Express port
EXPOSE 3000

# Run the Express server (note: it’s inside express-server/)
CMD ["node", "express-server/server.js"]
