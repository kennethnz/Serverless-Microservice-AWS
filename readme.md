# 🚀 AWS ECS/Fargate Serverless Microservice

## 📖 Overview
This project demonstrates a production-grade, highly available microservice deployed on AWS. It features a containerized Node.js application running on AWS Fargate (serverless compute for containers), managed by Amazon Elastic Container Service (ECS), and distributed via an Application Load Balancer (ALB).

This repository contains the application code and the Docker configuration required to containerize the service before pushing it to Amazon Elastic Container Registry (ECR).

## 🏗️ Architecture Stack
* **Application:** Node.js / Express
* **Containerization:** Docker
* **Registry:** Amazon ECR
* **Orchestration:** Amazon ECS
* **Compute:** AWS Fargate (Serverless)
* **Networking:** Application Load Balancer (ALB)

## 📂 Project Structure
\`\`\`text
.
├── server.js        # The Node.js microservice logic (Random Joke API)
├── package.json     # Node.js dependencies (Express)
├── Dockerfile       # Instructions to build the Docker image
└── README.md        # Project documentation
\`\`\`

## 🛠️ Local Development

### Prerequisites
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### Building the Container
To package this application into a Docker container, run the following command in the root directory:
\`\`\`bash
docker build -t ecs-joke-api .
\`\`\`

### Running the Container Locally
To test the container on your local machine before deploying to AWS:
\`\`\`bash
docker run -p 8080:8080 ecs-joke-api
\`\`\`
Once running, open your browser and navigate to `http://localhost:8080` to see the application and the active Container ID.

## ☁️ AWS Deployment Steps (Overview)
1. **ECR:** Authenticate with AWS CLI and push the local Docker image to a private Amazon ECR repository.
2. **ALB:** Provision an Application Load Balancer with target groups listening on port 8080.
3. **ECS Task Definition:** Create a Fargate task definition assigning CPU/Memory and linking the ECR image URI.
4. **ECS Service:** Deploy the task definition to an ECS Cluster, attaching it to the ALB to maintain a desired task count for high availability.