# Use an official Node.js runtime as a parent image
FROM node:22-alpine As build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . ./

# Build the React application
RUN npm run build

# Production environment
FROM nginx:alpine

# Copy the built React application from the previous stage to the Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80
