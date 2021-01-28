let apiPath
let tokenKey

if (process.env.NODE_ENV === 'production') {
    apiPath = 'production-url'
    tokenKey = 'todos-client-auth-token'
} else {
    apiPath = 'http://localhost:8000/api'
    tokenKey = 'todos-client-auth-token'
}

export default {
    API_ENDPOINT: apiPath,
    TOKEN_KEY: tokenKey,
}