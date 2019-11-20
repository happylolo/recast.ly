# Setup
1. To install all the dependencies run `npm install`.
2. npm's configuration file is `package.json`.
3. npm downloads packages into `node_modules`.
4. To install Babel globally, run `npm install -g babel-cli`.
5. The following command will transpile all of the JSX/ES6 files in this sprint into parallel ES5 files in the compiled/ directory. `babel . --out-dir compiled --presets=react --ignore=node_modules,compiled --source-maps inline -w`.
   * `.` tells Babel to transpile all javascript files in the current working directory.
   * `--out-dir` tells Babel to put the transpiled files into the `compiled/` folder.
   * `--presets` tells Babel what kind of transformations to make. The preset, `react`, transpiles JSX. Each preset is installed as its own package, with the naming convention `babel-preset-*`.
   * `--ignore` tells Babel to not transpile any files in the the `node_modules` and `compiled` directories.
   * `--source-maps` tells Babel to include source maps  with our transpiled code, making debugging much easier.
   * `-w` makes babel compile files as they are changed so that we don't have to manually after every change.
6. Install Live Server from npm: `npm install -g live-server`.
7. In a new Terminal tab, start the Recast.ly app by running `live-server`.
8. To combine running Babel and Live Server, we can just run `npm start` since there's an npm `start` script in the package.json that combines the two steps together.
9. Install the [React Dev Tools](https://github.com/facebook/react-devtools)  extension for Chrome to make debugging easier. You can test this build by running `yarn run test:chrome` from the react-devtools root directory.
10. Read this [guide](https://reactjs.org/docs/thinking-in-react.html) about thinking in React components.
11. You'll need a developer key in order to access videos from the YouTube Data API.
    * Go to Google's [YouTube API](https://console.developers.google.com/apis/library/youtube.googleapis.com?pli=1).
    * If prompted, select a project or create a new one. It doesn't matter what you name a new project.
    * Click `Enable` and then `Go to Credentials`.
    * Select `Web browser` from the drop-down and the `Public data` radio button.
    * Give your key any name, leave the optional field blank, and click `Create`.
    * Make your key available to the rest of your application from a new file, `src/config/youtube.js`.
12. To run SpecRunner.html, run `npm test`.