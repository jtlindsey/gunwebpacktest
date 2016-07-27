require('./gundbfile');
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './test';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

ReactDOM.render(
  React.createElement('h1', null, 'Hello JTL from React with ES6 edited!'),
  document.getElementById('test1')
);

ReactDOM.render(
  React.createElement('h2', null, 'Redux TODO Test running....'),
  document.getElementById('test2')
);
