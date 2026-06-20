pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test || true'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t node-express-app .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Stopping old container (if any)...'
                sh 'docker stop node-app || true'
                sh 'docker rm node-app || true'

                echo 'Running new container...'
                sh 'docker run -d -p 3000:3000 --name node-app node-express-app'
            }
        }
    }

    post {
        success {
            echo 'Pipeline SUCCESS 🎉 App is running on port 3000'
        }
        failure {
            echo 'Pipeline FAILED ❌ Check logs'
        }
    }
}
