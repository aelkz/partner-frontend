# Partner Front-end

Sample application to exemplify some concepts in the perspective of a front-end JavaScript application.
 * API Gateway
 * Single Sign-On
 * OIDC
 * OAuth2

In this application we use [Vue](https://vuejs.org/) front-end framework.

## Project structure

The project structure follows the patterns and best practices of Vue applications.

```
src/api        -> Backend de API's that will be used by the project
src/assets     -> Images and other assets
src/components -> Vue Components
src/router     -> Routes
src/store      -> Centralized state management
src/external   -> Location for external resources
src/style      -> Styles
main.js        -> Main entrypoint of the application
```

## To deploy in OpenShift

```
    $ ./deploy-to-openshift.sh
```

## Build details

For more information on:

* [How to build](README-HOWTO.md)
* [Test with RH-SSO](README-RHSSO.md)
* [Test with 3scale and RH-SSO](README-3scale-RHSSO.md)

MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
