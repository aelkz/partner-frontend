const keycloak_conf = {
  "realm": "demo",
  "auth-server-url": "https://localhost:8543/auth",
  "ssl-required": "external",
  "resource": "partner-frontend",
  "public-client": true,
  "confidential-port": 0,
  "url": "https://localhost:8543/auth",
  "clientId": "partner-frontend"
}

export default keycloak_conf