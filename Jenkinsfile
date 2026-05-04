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
                    // بناء الـ Frontend الذي يستخدم Nginx والمنفذ 80
                    bat 'docker build -t "abdo030/mon-image:4" -f projetDocker/frontend/Dockerfile projetDocker/frontend'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    bat 'docker push "abdo030/mon-image:4"'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'kubectl apply -f projetDocker/deployment.yaml'
                bat 'kubectl apply -f projetDocker/service.yaml'
                // أمر لضمان تحديث الـ Pods فوراً بالصورة الجديدة
                bat 'kubectl rollout restart deployment mon-appli'
            }
        }
    }

    post {
        success {
            echo '✅ تمت العملية بنجاح! الموقع جاهز.'
        }
        failure {
            echo '❌ فشل الـ Pipeline. تحقق من الإعدادات.'
        }
    }
}