# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli@20

# Install the missing build package
RUN npm install @angular-devkit/build-angular

# Generate the build of the application
RUN ng build

# Stage 2: Serve app with nginx server
FROM nginx:latest

# Copy the custom nginx configuration file
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy the built Angular app from the build stage to the Nginx directory
COPY --from=build /usr/local/app/dist/neohoods-landing/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
