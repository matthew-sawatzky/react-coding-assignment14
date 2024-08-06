# Use an official node image as a parent image
FROM node:18

# Set the working directory
WORKDIR /sawatzky_matthew_final_site

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Clean npm cache and install dependencies
RUN npm cache clean --force
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the app
RUN npm run build

# Install serve to serve the build directory
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 5575

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "5575"]
