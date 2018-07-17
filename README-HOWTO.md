# Partner Frontend

This application will be created using [Vue](https://vuejs.org/).

## Building the application

1. Create an application using the front-end components framework [bootstrap-vue](https://bootstrap-vue.js.org/).

    ```
    $ vue init bootstrap-vue/webpack-simple <project-name>
    ```

2. Install all basic dependencies to test it

    ```
    $ npm install
    ```

3. Test the application running the following command, and access [http://localhost:8080]()

    ```
    $ npm run dev
    ```

4. *[Optional]* - In case you see errors while executing the command above `'npm run dev'`, it's possible that some libraries are missing. Use the following commands to install some possible ones:

    ```
    $ npm i -s postcss-import
    $ npm i -s postcss-url
    ```

5. Add the [vue-router](https://router.vuejs.org) to control the routing within the application

    ```
    $ npm i -s vue-router
    ```
    
6. Add the [vuex](https://vuex.vuejs.org/) which will be the *Centralized State Management* for this application

    ```
    $ npm i -s vuex
    ```

7. Add the [vuex-router-sync](https://github.com/vuejs/vuex-router-sync) which will be router state synchronization mechanism.

    ```
    $ npm i -s vuex-router-sync
    ```

8. Add the [vue-resource](https://github.com/pagekit/vue-resource) which will be used to execute the remote calls to the API's.

    ```
    $ npm i -s vue-resource
    ```

9. Add support for [ES2015](https://babeljs.io/docs/en/babel-preset-es2015).

    ```
    npm i -s babel-preset-es2015
    ```

10. Add support for [Rest Spread](https://babeljs.io/docs/en/babel-plugin-transform-es2015-spread).

    ```
    $ npm i -s babel-plugin-transform-object-rest-spread
    ```

11. Add support for [Destricturing](https://babeljs.io/docs/en/babel-plugin-transform-es2015-destructuring).

    ```
    $ npm i -s babel-plugin-transform-es2015-destructuring
    ```

12. To build the application for production use the following command

    ```
    $ npm run build
    ```

## RH-SSO Integration

1. Install RH-SSO as documented in this link [RH-SSO Installation](https://access.redhat.com/documentation/en-us/red_hat_single_sign-on/7.2/html/red_hat_single_sign-on_for_openshift/getting_started#using_the_rh_sso_for_openshift_image_streams_and_application_templates).

2. Login as `admin` in RH-SSO

3. Create a realm for the application (e.g demo).

4. Create a new client accessing the item `Client` in the main menu.

5. Fill fields with the following values:
    * ID: `partner-frontend` 
    * Root URL: `[application URL. Ex: http://localhost:8080]`

6. In *Settings* select the following options:
    * Access Type: `Public`
    * Implicit Flow Enabled: `On`

7. In the application *roles* access the tab `Roles`.
    * Role Admin
        * Role Name: `admin`
    * Role User
        * Role Name: `user`
 
8. Create a user accessing the item `User` in the main menu.
    * Add the following user:
        * User name: `test-adm`
        * Add the role: `admin`
    * Add the following user:
        * User name: `test-user`
        * Add the role: `user`

9.  In the client's *Installation* tab, select the option *Keycloak OIDC JSON*, download the JSON file, and save it into `src/external`.

10. Format the downloaded file as describe bellow:

    ```
    const keycloak_conf = {
        //Include the JSON properties here

        //Add the following properties
        "url": "[this property has have the same value of auth-server-url]",
        "clientId": "partner-frontend"
    }

    export default keycloak_conf
    ```

11. Download the Javascript Adapter [https://RH-SSO-Host/auth/js/keycloak.js]()

12. Test the application running `npm dev run`.

13. Access the application's login URL [http://localhost:8080/login]() and click the button *Login with Single Sign-On*.