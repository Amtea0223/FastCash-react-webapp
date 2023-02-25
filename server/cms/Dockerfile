# Use the official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

RUN apk update && apk add openssl && \
    npm install


# Copy the rest of the files to the container
COPY . .

# # Build the application
# RUN npm run build

# Expose port 3000, which is the default port used by Keystone.js
EXPOSE 3000

# Start the application
CMD ["npm", "start"]