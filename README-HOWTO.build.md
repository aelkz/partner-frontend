# Partner Frontend

Nesta aplicação utilizamos o framework de frontend [vue](https://vuejs.org/).

## Construindo a aplicação

1. Criar a aplicação utilizando o template com o [bootstrap-vue](https://bootstrap-vue.js.org/)

    ```
    $ vue init bootstrap-vue/webpack-simple <project-name>
    ```

2. Instalar as dependências básicas

    ```
    $ npm install
    ```

3. Testar a aplicaão

    ```
    $ npm run dev
    ```

4. *[Opcional]* - Caso ocorra erro na execuão do comando ```'npm run dev'``` possívelmente deve ser por conta da falta de algumas dependências. Utilize os comandos abaixo para instalar algumas já mapeadas:

    ```
    $ npm i -s postcss-import
    $ npm i -s postcss-url
    ```

5. Adicionar o [vue-router](https://router.vuejs.org) para tratarmos as questões de Roteamento na aplicaão.

    ```
    $ npm i -s vue-router
    ```
    
6. Adicionar o [vuex](https://vuex.vuejs.org/) que será o nosso 'Centralized State Management'

    ```
    $ npm i -s vuex
    ```

7. Adicionar o suporte a [ES2015](https://babeljs.io/docs/en/babel-preset-es2015)

    ```
    npm i -s babel-preset-es2015
    ```

8. Adicionar o suporte a [Rest Spread](https://babeljs.io/docs/en/babel-plugin-transform-es2015-spread)

    ```
    $ npm i -s babel-plugin-transform-object-rest-spread
    ```

9.  Adicionar o suporte a [Destricturing](https://babeljs.io/docs/en/babel-plugin-transform-es2015-destructuring)

    ```
    $ npm i -s babel-plugin-transform-es2015-destructuring
    ```

10. Para executar o build para Produção executar o seguinte comando

    ```
    $ npm run build
    ```
