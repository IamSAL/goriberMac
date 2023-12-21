node {


    stage('Checkout') {
        checkout scm
    }

     tools {
        nodejs '/root/.nvm/versions/node/v21.5.0/bin/node'
        pnpm '/root/.nvm/versions/node/v21.5.0/bin/pnpm'
        pm2 '/root/.nvm/versions/node/v21.5.0/bin/pm2'
    }

    stage('Install Dependencies') {
        sh "node -v"
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
