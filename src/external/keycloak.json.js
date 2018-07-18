// RH-SSO DEV Local
// const keycloak_conf = {
//   "realm": "demo",
//   "auth-server-url": "https://localhost:8543/auth",
//   "ssl-required": "external",
//   "resource": "partner-frontend",
//   "public-client": true,
//   "confidential-port": 0,
//   "url": "https://localhost:8543/auth",
//   "clientId": "partner-frontend"
// }

//RH-SSO DEV Cloud
const keycloak_conf = {
  "realm": "3scale-sso",
  "auth-server-url": "http://sso-rhsso.apps.rh-consulting-br.com/auth",
  "url": "http://sso-rhsso.apps.rh-consulting-br.com/auth",
  "ssl-required": "none",
  "resource": "f44ab538",
  "credentials": {
    "secret": "c5a15f45ace21b3a2bf0e318ff806fbf"
  },
  "confidential-port": 0,
  "clientId": "f44ab538"
}

export default keycloak_conf