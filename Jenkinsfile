pipeline {
    agent any

    stages {
        stage('Checkout from GitHub') {
            steps {
                git url: 'https://github.com/abdobnhsn/AirportProject.git', branch: 'master'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // بناء الصورة من مجلد frontend حصراً باستخدام ملف Dockerfile الصحيح
                    bat 'docker build -t abdo030/mon-image:6 -f projetDocker/frontend/Dockerfile projetDocker/frontend'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // تسجيل الدخول ورفع الصورة
                    withDockerRegistry([credentialsId: 'docker-hub-credentials', url: '']) {
                        bat 'docker push abdo030/mon-image:6'
                        bat 'docker tag abdo030/mon-image:6 abdo030/mon-image:latest'
                        bat 'docker push abdo030/mon-image:latest'
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([file(credentialsId: 'kubeconfig-id', variable: 'KUBECONFIG')]) {
                    script {
                        // الخطوة الأهم: apply لإنشاء الـ Deployment إذا لم يكن موجوداً
                        bat 'kubectl apply -f projetDocker/deployment.yaml'
                        bat 'kubectl apply -f projetDocker/service.yaml'
                        
                        // تحديث الصورة للإصدار 6
                        bat 'kubectl set image deployment/mon-appli mon-conteneur=abdo030/mon-image:6'
                        
                        // التحقق من حالة التشغيل
                        bat 'kubectl rollout status deployment/mon-appli'
                    }
                }
            }
        }
    }

    post {
        success {
            echo '✅ Félicitations! Le déploiement est réussi et l\'image Nginx est en ligne.'
        }
        failure {
            echo '❌ Le pipeline a échoué. Vérifiez les logs.'
        }
    }
}