# Base image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy app files
COPY . .

# Copy environment variables
COPY .env ./

# Expose the port the app runs on
EXPOSE 5000

# Start the server
CMD ["node", "index.js"] 