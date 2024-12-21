//create pipeline script to build and deploy the application
pipeline {
    agent any
    environment {
        registry = "docker.io"
        registryCredential = 'dockerhub'
        dockerImage = ''
    }
    tools {
        nodejs 'Nodejs'
    }
    stages {

        //create a stage to build the project react project
        stage('Building project') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}
