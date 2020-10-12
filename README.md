<h1 align="center" style="color: #824FDF">
  Intellisense Technical Test ⛏️
</h1>

<p align="center" style="font-size: 1.2rem;">
  Querying data from a provided API and displaying as both a table and graph.
</p>

<hr />

This application uses an [**API**][a] provided by [**Intellisense.io**][i]. The specification for this tech test outlined 3 key goals:

- Create a single page application with a table and line graph
- Access the data from the provided API
- Allow different columns in the dataset to be selected for graphing

The code provided attempts to fulfill all tasks as well as adding a few extra features in an effort to provide a better user experience. A collection of planned features that didn't make it into the current build can likely be found on the [**issues tab of the github repo**][is].

[a]: https://reference.intellisense.io/thickenernn/v1/referencia
[i]: https://www.intellisense.io/
[is]: https://github.com/Shubwub/intellisense-technical-test/issues
[at]: https://atomicdesign.bradfrost.com/chapter-2/
[r]: https://redux.js.org/
[c]: https://www.cypress.io/
[aa]: https://www.w3.org/WAI/WCAG2AAA-Conformance.html

- ## 📋 Requirements

  The requirements for running this application locally are the same as any standard `create-react-app` react application, of course with additional dependancies provided by npm. The currently supported browsers are Firefox and Chrome.

- ## 🎉 Installation and setup

  Once this repository is cloned, dependencies must be met through:

  ```bash
    npm i
  ```

  A local development server can then be spun up through

  ```bash
    npm start
  ```

- ## 📖 Documentation

  - ### 🚧 Structure

    This project uses React hooks for state management such as **useState** and **useEffect**. Functional components should be used where possible due to their reduced compile size and the phasing out of class-components by the react development team.
    The project also tries to follow an [**atomic**][at] component structure. The basic idea being to split components into organisms, molecules and atoms. organisms being made of many molecules, and molecules being made of many atoms.

  - ### ⚙️ Redux

    App-wide state management is done through [**Redux**][r]. The structure of which is as follows:

    ```JSON
      "data": {
        "table": [
          {
            "name": "string",
            "times": "number",
            "values": "number",
          }
        ],
        "graph": [
          {
            "name": "string",
            "times": "number",
            "values": "number",
          },
        ]
      },
      "status": {
        "loading": "boolean",
        "error": "boolean",
        "sortBy": "string"
      }
    ```

    Data stored under `table` is what is returned from the API and is rendered in the table. Graph data should be a subset of that stored under `data`. Items under `status` should ideally refer to the `state` of the app - as opposed to data being used and presented to users.

  - ### 🏷️ TypeScript

    This project uses TypeScript throughout. Variables, functions, and parameters should be typed where possible. There are a number of custom interfaces for describing data returned from the API as well as various levels of the redux state.

  - ### ♿ Accessibility
    Accessibility for this project should be kept to at least a [**AA standard**][aa] (In compliance with the W3C Web Content Accessibility Guidelines) as best as posssible. aXe-react has been installed as a means of complying with these standards. Current warning can be viewed from the console when the application is being ran in development mode.

- ## 🧪 Testing

  This project uses [**Cypress**][c] for it's testing. Cypress was chosen as it's what's most familiar and better reflects a user journey through an application.

  Tests can be found in `/cypress/integration`. Elements should be selected using data-name attributes. This is the apporach recommended by Cypress as it's least intrusive to the DOM.

  To run the test suite run

  ```bash
    npm test
  ```
