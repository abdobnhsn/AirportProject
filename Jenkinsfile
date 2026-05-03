pipeline {
    agent any

    stages {
        stage('Checkout from GitHub') {
            steps {
                git url: 'https://github.com/abdobnhsn/AirportProject.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // إذا تريد بناء الـ backend:
                    bat 'docker build -t "abdo030/mon-image:2" -f projetDocker/backend/Dockerfile projetDocker/backend'
                    
                    // أو إذا تريد بناء الـ frontend:
                    // bat 'docker build -t "abdo030/mon-image:2" -f projetDocker/frontend/Dockerfile projetDocker/frontend'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    bat 'docker push "abdo030/mon-image:2"'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'kubectl apply -f projetDocker/deployment.yaml'
                bat 'kubectl apply -f projetDocker/service.yaml'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline نجح!'
        }
        failure {
            echo '❌ Pipeline فشل!'
        }
    }
}
