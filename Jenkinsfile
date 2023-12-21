node {


    stage('Checkout') {
        checkout scm
    }

    stage('Install Dependencies') {
        // Install project dependencies
        sh "pnpm install"
    }

    stage('Build') {
        // Build the Next.js project
        sh "pnpm run build"
    }

    // Add more stages as needed, such as testing, deployment, etc.

    post {
        success {
            // Add any post-build steps or notifications on success
        }
        failure {
            // Add any post-build steps or notifications on failure
        }
    }
}
