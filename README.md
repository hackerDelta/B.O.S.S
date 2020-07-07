# Project Title

Project is a React Native application that is intended to help bridge the racial wealth gap and stengthen local economies. It provides consumers the ability to browse and search for black-owned businesses that they can support. Business owners can also add themselves and their businesses.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- You have installed the latest version of [Node.js](https://nodejs.org/en/) and a package manager (either [npm](https://www.npmjs.com) or [yarn](https://classic.yarnpkg.com/en/)).
- You have a Windows/Linux/Mac machine.

### Installing

To get acclimated, follow the steps below:

1. Fork and clone this repository.
2. Install [Expo CLI](https://docs.expo.io/get-started/installation/).
3. Run cd capstone and npm install or yarn install (depending on which package manager you have installed) to install the necessary packages.
4. Create a database called capstone and capstone-test.
5. Follow these [steps](https://developers.google.com/maps/gmp-get-started) and create a Google Maps API key.
6. Depending on your preferences either follow step i or step ii.<br />
   i) Create a file called .env and store your Google Maps API key there as GOOGLE_MAPS_API_KEY. Your file should look something like:
   ```
   GOOGLE_MAPS_API_KEY=<YOUR_API_KEY>
   ```
   and then run node createAppJSONFile.js in the terminal, which will automatically create an app.json file.<br />
   ii) Go to app.json and replace everywhere where it says "<YOUR_API_KEY>" with your newly created Google Maps API key.

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [React](https://reactjs.org) - The JavaScript library used for creating the user interfaces.
- [React Native](https://reactnative.dev) - The framework used to build applications using React.
- [Expo CLI](https://docs.expo.io) - The framework and platform that helps you develop, build, and deploy iOS, Android, and web applications by using the same JavaScript/TypeScript codebase.
- [Node.js](https://nodejs.org/en/) - The JavaScript runtime environment used to execute code.
- [yarn](https://classic.yarnpkg.com/en/) or ([npm](https://www.npmjs.com) - The package manager used to manage package dependencies.
- [Express](https://expressjs.com) - The JavaScript library used to handle HTTP requests.
- [Sequelize](https://sequelize.org) - A promise-based Node.js Object-relational mapping used with Postgres.
- [Axios](https://github.com/axios/axios) - The JavaScript library used to make HTTP requests.
- [ESlint](https://eslint.org) - The tool used to maintain code quality.
- [Prettier](https://prettier.io) - The tool used to format code.
- [React Navigation](https://reactnavigation.org) - The JavaScript library used for routing and navigation in React Native Applications.
- [React Native Paper](https://callstack.github.io/react-native-paper/) - The JavaScript library used to customize screens with production-ready components.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/hackerDelta/capstone/tags).

## Authors

- **Courtney Edwards** - _Initial work_ - [courtneycodes95](https://github.com/courtneycodes95)
- **Hector Santana-Quintana** - _Initial work_ [sanquinluis](https://github.com/sanquinluis)
- **Nagi Sosa** - _Initial work_ [Nova-Nagi](https://github.com/Nova-Nagi)
- **Kristy Li** - _Initial work_ [ahtae](https://github.com/ahtae)

See also the list of [contributors](https://github.com/hackerDelta/capstone/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- [Orlando Caraballo](https://github.com/orlandocaraballo/)
- [Stacey Eliuk](https://github.com/hotpinkpoliticalmatrix)
