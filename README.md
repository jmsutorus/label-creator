# Label Creator

---

Project to test Redux and generating PDFs.<br>
Linting is done using eslint and follows airbnbs js and react style<br>
Configure your favorite editor to follow the rules in .eslintrc.json<br>
This project uses Redux for all state management<br>

---

### Maintainer Contact Information

Direct Contact<br>
Joseph Sutorus<br>
jmsutorus@gmail.com

---

## 📝 Prerequisites

React version 16.12.0<br>
Node version 10<br>
Both the frontend and the backend are required to run.<br>
Must be on the H-E-B network connection either through wifi or through VPN.

## 🚀 Getting Started

`https://github.com/jmsutorus/label-creator.git`<br>
Download dependencies with `npm install`<br>
Run the frontend code with `npm start`<br>
Style guides can be found here<br>
[JS Best Practices](https://github.com/airbnb/javascript)<br>
[React Style Guide](https://github.com/airbnb/javascript/tree/master/react#naming)<br>
[CSS Style Guide](https://github.com/airbnb/css)<br>

## 🧐 What's Inside?

    .
    ├── app
    │   ├── components
    │   ├── contexts
    │   ├── helpers
    │   ├── hooks
    │   ├── pages
    │   ├── store
    │   │   ├── actions
    │   │   ├── constants
    │   │   ├── reducers
    │   │   ├── selectors
    │   │   └── create.js
    │   └── utils
    ├── .babelrc
    ├── .eslintrc
    ├── .gitlab-ci.yml
    ├── .stylelintrc
    ├── .prettierrc
    ├── Dockerfile
    ├── package.json
    └── yarn.lock

1. **`/app`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser).

2. **`.babelrc`**: This is a configuration file for [Babel](https://babeljs.io/) Babel is mainly used to convert ECMAScript code into a backwards compatible version of JavaScript in current and older browsers or environments.

3. **`.eslintrc`**: This is a configuration file for [EsLint](https://eslint.org/). Eslint is a tool to help developers discover problems with their JavaScript code without executing it.

4. **`.gitlab-ci.yml`**: This is a configuration file for the GitLab pipelines and our build process.

5. **`.stylelintrc`**: This is a configuration file for [StyleLint](https://stylelint.io/) StyleLint is a linter that helps you avoid errors and enforce conventions in your css styles.

6. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

7. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

8. **`package-lock.json`** This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

## 🧪 Testing

Testing is done using Jest<br>
Runs tests and coverage<br>
`npm run test`<br>
Ensure that all tests pass and coverage is > 80%<br>

## 📖 Contributing

Submit a PR for review.
Before being merge your pipelines must pass

## 👷‍️👷‍ Building

N/A

### 🚢 Deploying

N/A

## ⁉️ Monitoring & Alerting

N/A
