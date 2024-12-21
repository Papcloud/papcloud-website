//create pipeline script to build and deploy the application
pipeline {
    agent any
    environment {
        registry = "docker.io"
        registryCredential = 'dockerhub'
        dockerImage = ''
    }
    stages {

        stage('Building image') {
            steps {
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }
    }
}
