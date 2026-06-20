pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'No tests configured'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker build -t node-express-demo .'
                sh 'docker run -d -p 3000:3000 --name node-express-demo node-express-demo || true'
            }
        }
    }
}