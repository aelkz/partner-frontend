# Partner Frontend

Nesta aplicação utilizamos o framework de frontend [vue](https://vuejs.org/).

## Construindo a aplicação

1. Criar a aplicação utilizando o template com o [bootstrap-vue](https://bootstrap-vue.js.org/).

    ```
    $ vue init bootstrap-vue/webpack-simple <project-name>
    ```

2. Instalar as dependências básicas.

    ```
    $ npm install
    ```

3. Testar a aplicaão.

    ```
    $ npm run dev
    ```

4. *[Opcional]* - Caso ocorra erro na execuão do comando `'npm run dev'` possívelmente deve ser por conta da falta de algumas dependências. Utilize os comandos abaixo para instalar algumas já mapeadas:

    ```
    $ npm i -s postcss-import
    $ npm i -s postcss-url
    ```

5. Adicionar o [vue-router](https://router.vuejs.org) para tratarmos as questões de Roteamento na aplicaão.

    ```
    $ npm i -s vue-router
    ```
    
6. Adicionar o [vuex](https://vuex.vuejs.org/) que será o nosso 'Centralized State Management'.

    ```
    $ npm i -s vuex
    ```

7. Adicionar o [vuex-router-sync](https://github.com/vuejs/vuex-router-sync) que será syncronizará as rotas com o storage centralizado.

    ```
    $ npm i -s vuex-router-sync
    ```

8. Adicionar o suporte a [ES2015](https://babeljs.io/docs/en/babel-preset-es2015).

    ```
    npm i -s babel-preset-es2015
    ```

9. Adicionar o suporte a [Rest Spread](https://babeljs.io/docs/en/babel-plugin-transform-es2015-spread).

    ```
    $ npm i -s babel-plugin-transform-object-rest-spread
    ```

10. Adicionar o suporte a [Destricturing](https://babeljs.io/docs/en/babel-plugin-transform-es2015-destructuring).

    ```
    $ npm i -s babel-plugin-transform-es2015-destructuring
    ```

11. Para executar o build para Produção executar o seguinte comando.

    ```
    $ npm run build
    ```

## Integração com RH-SSO

1. Instalar o RH-SSO documentado no access [RH-SSO Installation](https://access.redhat.com/documentation/en-us/red_hat_single_sign-on/7.2/html/red_hat_single_sign-on_for_openshift/getting_started#using_the_rh_sso_for_openshift_image_streams_and_application_templates).

2. Logar como `admin` no RH-SSO.

3. Criar um realm para a aplicação.

4. Criar um client acessando o item `Client` no menu principal.

5. Configurar o cliente com:
    * ID: `partner-frontend` 
    * Root URL: `[URL da aplicação. Ex: http://localhost:8080]`

6. Na página *Settings* cliente configure as seguintes propriedades:
    * Access Type: `Public`
    * Implicit Flow Enabled: `On`

7. Criar as *roles* da aplicação acessando a Aba `Roles`.
    * Role Admin
        * Role Name: `admin`
    * Role User
        * Role Name: `user`
 
8. Criar um usuário acessando o item `User` no menu principal.
    * Adicionar o usuário:
        * User name: `test-adm`
        * Adicionar a role: `admin`
    * Adiconar o usuário:
        * User name: `test-user`
        * Adicionar a role: `user`

9.  Entrar na Aba *Installation* do Client, selecionar a opção *Keycloak OIDC JSON* e fazer o download do arquivo JSON para a pasta `src/external`.

10. Formate o arquivo conforme especificado abaixo:

    ```
    const keycloak_conf = {
        //Incluir o conteúdo do arquivo baixado aqui

        //Adicionar as seguintes propriedades
        "url": "[mesmo conteudo da propriedade auth-server-url do arquivo original]",
        "clientId": "partner-frontend"
    }

    export default keycloak_conf
    ```

11. Efetuar o deployment da aplicação.

12. Acessar a url de login da aplicação `http://host:port/login` e clicar no botão de *Login with Single Sign-On*.