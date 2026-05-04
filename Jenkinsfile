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
                    // بناء الصورة من مجلد frontend حصراً لضمان استخدام Nginx
                    bat 'docker build -t "abdo030/mon-image:6" -f projetDocker/frontend/Dockerfile projetDocker/frontend'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // رفع الصورة بالوسم 6 وبالوسم latest
                    bat 'docker push "abdo030/mon-image:6"'
                    bat 'docker tag "abdo030/mon-image:6" "abdo030/mon-image:latest"'
                    bat 'docker push "abdo030/mon-image:latest"'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                // تطبيق الإعدادات وتحديث الصورة في Kubernetes
                bat 'kubectl apply -f projetDocker/deployment.yaml'
                bat 'kubectl apply -f projetDocker/service.yaml'
                // تحديث الصورة يدوياً لضمان الانتقال للإصدار 6
                bat 'kubectl set image deployment/mon-appli mon-conteneur=abdo030/mon-image:6'
                bat 'kubectl rollout status deployment/mon-appli'
            }
        }
    }

    post {
        success {
            echo '✅ تم التحديث! الموقع الآن يعمل بنسخة Nginx.'
        }
    }
}