pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script { script ->
                    // Clean workspace and checkout code
                    cleanWs()
                    checkout scm
                }
            }
        }

        stage('Install dependencies') {
            steps {
                script {
                    // Install project dependencies using pnpm
                    sh 'pnpm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build Next.js project
                    sh 'pnpm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Add deployment steps if needed
                    // e.g., deploy to a server, push to a CDN, etc.
                }
            }
        }
    }

    post {
        always {
            // Cleanup steps if needed
            // e.g., notify, clean up temporary files, etc.
            echo 'Build completed!'
        }
    }
}
