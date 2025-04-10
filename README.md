# Fruits Store - DevOps Project

A full-stack web application for managing and displaying a fruit store's inventory. This project demonstrates modern web development techniques and DevOps practices including containerization, infrastructure as code, and CI/CD pipeline implementation.

## Tech Stack

### Frontend
* React.js
* Vite
* Tailwind CSS
* Framer Motion (for animations)
* Axios (API requests)
* React Router

### Backend
* Node.js
* Express.js
* MongoDB (with Mongoose)
* CORS

### DevOps
* Docker & Docker Compose
* Jenkins CI/CD pipeline
* Git & GitHub for version control
* Terraform for infrastructure provisioning
* AWS Cloud Services (ECR, ECS, EC2, etc.)

## Features

* **Customer Features**:
   * Browse available fruits
   * View product details (name, price, quantity, discount)
   * Responsive design for multiple device types
* **Manager Features**:
   * Secure manager login
   * Add new fruits with image upload
   * Edit existing fruit details
   * Delete fruits from inventory
   * Apply discounts with automatic price calculation

## Project Structure
```
.
├── frontend/                # React frontend application
│   ├── src/                 # Source files
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   └── assets/          # Images and other static assets
│   ├── Dockerfile           # Frontend container configuration
│   └── ...
├── backend/                 # Node.js backend API
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── Dockerfile           # Backend container configuration
│   └── ...
├── docker-compose.yml       # Multi-container Docker configuration
├── jenkinsfile              # Jenkins CI/CD pipeline configuration
├── terraform/               # Infrastructure as Code
│   ├── main.tf              # Main Terraform configuration
│   ├── variables.tf         # Input variables
│   ├── outputs.tf           # Output values
│   └── ...
└── README.md
```

## Installation & Setup

### Running Locally
1. **Clone the repository**
```
git clone https://github.com/Govindu-Thejana/Dev_Ops.git
cd Dev_Ops
```

2. **Backend Setup**
```
cd backend
npm install
npm start
```
The backend will run on http://localhost:5555

3. **Frontend Setup**
```
cd frontend
npm install
npm run dev
```
The frontend will run on http://localhost:5173

### Using Docker
1. **Build and run using Docker Compose**
```
docker-compose up --build
```
   * Frontend will be available at http://localhost:8000
   * Backend will be available at http://localhost:5000

## API Endpoints

* **GET /fruits** - Get all fruits
* **GET /fruits/:id** - Get fruit by ID
* **POST /fruits** - Add new fruit
* **PUT /fruits/:id** - Update fruit by ID
* **DELETE /fruits/:id** - Delete fruit by ID

## CI/CD Pipeline

The project includes a Jenkins pipeline that:
1. Checks out code from GitHub repository
2. Initializes and plans Terraform infrastructure
3. Builds Docker images for frontend and backend
4. Pushes images to AWS ECR (Elastic Container Registry)
5. Deploys infrastructure using Terraform (on main branch)
6. Deploys containers to AWS ECS (Elastic Container Service)
7. Automatically logs out from AWS after completion

To use the pipeline:
1. Set up Jenkins with Docker, Terraform, and AWS CLI capabilities
2. Create credentials in Jenkins with ID 'test-pass' for Docker Hub access
3. Configure AWS credentials in Jenkins for ECR/ECS deployments
4. Create a new pipeline job using the included Jenkinsfile

## Infrastructure as Code

The project uses Terraform to provision and manage AWS cloud infrastructure:

1. **Initialize Terraform**
```
cd terraform
terraform init
```

2. **Plan infrastructure changes**
```
terraform plan -out=tfplan
```

3. **Apply infrastructure**
```
terraform apply tfplan
```

### AWS Resources

The project utilizes several AWS services provisioned through Terraform:

* **ECR** (Elastic Container Registry) - for storing Docker images
* **ECS** (Elastic Container Service) - for running containerized applications
* **EC2** - virtual servers for hosting the application
* **VPC** - virtual private cloud for networking
* **S3** - object storage for static assets and backups
* **CloudWatch** - for monitoring application and infrastructure metrics
* **IAM** - for managing access permissions

## Environment Variables

### Backend
* PORT - Backend server port (default: 5555)
* `DB_URL` - MongoDB connection string
* `AWS_REGION` - AWS region for services

### Frontend
* `VITE_API_URL` - Backend API URL
* `VITE_ASSETS_BUCKET` - S3 bucket for storing assets

## License

MIT License

## Contributors

* Govindu Thejana
