export default { 
    jwtSecret: process.env.JWT_SECRET || 'someSecretToken',
    DB: {
        URI: process.env.MONGODB_URI ||'mongodb://localhost/jwt-tsc-passport',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD
    }
}