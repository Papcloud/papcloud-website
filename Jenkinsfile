//create pipeline script to build and deploy the application
pipeline {
    agent any
    environment {
        registry = "docker.io"
        registryCredential = 'dockerhub'
        dockerImage = ''
    }
    stages {
        stage('Cloning Git') {
            steps {
                git 'https://github.com/Papcloud/papcloud-website.git'
            }
        }

        stage('Building image') {
            steps {
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }
    }
}
