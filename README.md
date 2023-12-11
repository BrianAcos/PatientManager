## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

## Step 2: Start the Metro Server

Second, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

The entire code is written in the ./src folder.

We have the folders organized as follows:

### /actions:
- Contains files that define Redux actions.
- Actions are events that trigger state changes in the application.
- Used exclusively for managing the app's notification state.

### /assets:
- Stores static resources such as images.

### /components:
- This folder contains mostly reusable React components.
- Among the most important and complex ones are:
  - **modalAdd:** Used for editing, adding user information, and adding a new user.
  - **searcher:** Filters users by name.
  - **notifications:** Notifies about user additions or modifications.
  - **userCard:** Cards displaying user information with avatar, name, etc.
    - Can be expanded to view additional information such as description, date of birth, gender, etc.

### /reducers:
- Contains files that define Redux reducers.
- Reducers specify how the application state changes in response to actions.

### /screens:
- Contains React components representing full screens of the application.
- Each screen can include multiple components and navigation logic.
- Only the main HOME screen exists, so React Navigation has not been implemented.

### /store:
- Centralized configuration for the Redux store.
- In the future, it could include additional configurations such as middleware, state persistence, etc.

### /types:
- Defines TypeScript types to enhance code safety and integrity.
- Includes interfaces and types used throughout the project.

```bash
you can install in your android the app => ./PatientManager.apk 
```

Technical test:

Frontend - Patient Data Management:

The objective of this challenge is to create a frontend application that enables users to manage patient data. The application should have the following features:

Retrieve a list of patient records from a this API. => https://63bedcf7f5cfc0949b634fc8.mockapi.io/users

Display the patient records individually in cards within a user interface.

Each patient card should include a button or icon that allows users to view additional details (expand/collapse).

Implement a modal or a similar component to edit and add patient information.

Users should have the ability to edit existing patient data and add new patients to the list.  This has no persistent data.

Implement form validation to ensure the accuracy and completeness of patient data.

Optional: Provide user-friendly notifications for successful or failed data modifications.

Optional: Ensure that the application is interactive and responsive, with smooth animations where necessary.
Technologies:

The solution must be implemented using the React/Vue ecosystem, leaving you the freedom to choose any design patterns, state management strategies, and libraries.
UI:

You are the creative director here, feel free to make any decisions.


Guidelines:

Share the source code of the application in a Git repository (preferably on GitHub).

Showcase you organization skills, your own styling methods, domain of the selected tech, domain at making reusable components, usage of standard industry-accepted tooling (TypeScript, linting, formatters), etc...

Include detailed instructions on how to run the application locally.

Provide brief documentation explaining your design decisions and the libraries/tools you used.


Disclaimer:

Remember not to use your name in the source code to keep the process as anonymous as possible.

Feel free to adapt the challenge further to specific requirements and preferences.