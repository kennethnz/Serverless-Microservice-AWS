# 1. Start with a lightweight Linux computer that already has Node.js installed
FROM node:18-alpine

# 2. Create a folder inside the container where our app will live
WORKDIR /usr/src/app

# 3. Copy ONLY the package.json first (this is a speed optimization trick)
COPY package*.json ./

# 4. Tell the container to install our dependencies (Express)
RUN npm install

# 5. Now copy the rest of our code (the server.js file) into the container
COPY . .

# 6. Tell Docker that our app uses port 8080
EXPOSE 8080

# 7. The final command to run when the container starts up
CMD ["node", "server.js"]