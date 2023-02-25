# Use the official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Install OpenSSL and other dependencies
RUN apk add --no-cache openssl libssl1.1 libssl-dev

# Remove prisma package if it's already installed
RUN npm uninstall prisma

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files to the container
COPY . .

# Set the OPENSSL_CONF environment variable
ENV OPENSSL_CONF=/etc/ssl/

# Generate Prisma client
RUN npm run prismag

# Build the application
RUN npm run build

# Expose port 3000, which is the default port used by Keystone.js
EXPOSE 3000

# Start the application
CMD ["npm", "start"]