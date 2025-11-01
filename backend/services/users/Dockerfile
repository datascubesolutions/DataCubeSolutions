# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml* ./

# Install pnpm
RUN npm install -g pnpm

# Install any needed packages specified in package.json
RUN pnpm install

# Copy the rest of the application's code
COPY . .

# Build the TypeScript code
RUN pnpm run build

# Make port 3001 available to the world outside this container
EXPOSE 3001

# Run the app when the container launches
CMD ["pnpm", "start"]
