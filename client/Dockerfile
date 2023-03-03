# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Set the NODE_ENV environment variable to "production"
ENV NODE_ENV=production

# Build the React app
RUN npm run build

# Expose port 3001
EXPOSE 3001

# Start the development server
CMD [ "npm", "start" ]