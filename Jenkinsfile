pipeline {
    agent any

    stages {

        stage('Check SonarScanner Installation') {
            steps {
                script {
                    def scannerHome = tool 'MySonarScanner11'
                    echo "SonarScanner should be installed at: ${scannerHome}"

                    bat "dir \"${scannerHome}\\bin\\sonar-scanner.bat\""
                    bat "\"${scannerHome}\\bin\\sonar-scanner.bat\" -v"
                }
            }
        }

        stage('Checkout GitHub') {
            steps {
                git url: 'https://github.com/abdobnhsn/AirportProject.git'
            }
        }

        stage('Analyse SonarQube') {
            steps {
                script {
                    def scannerHome = tool 'MySonarScanner11'

                    withSonarQubeEnv('111') {
                        withCredentials([string(credentialsId: '111', variable: 'TOKEN')]) {
                            bat """
                            ${scannerHome}\\bin\\sonar-scanner.bat ^
                            -Dsonar.projectKey=AirportProject ^
                            -Dsonar.sources=. ^
                            -Dsonar.login=%TOKEN% ^
                            -Dsonar.projectVersion=1.0.0 ^
                            -Dsonar.sourceEncoding=UTF-8
                            """
                        }
                    }
                }
            }
        }
    }
}
