import ReactDOM from 'react-dom';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import theme from './utils/theme';
import GlobalStyles from './utils/global';

import App from './App';

const root = document.getElementById('root');

ReactDOM.render(
 <Provider store={store}>
  <Router>
   <ThemeProvider theme={theme}>
    <>
     <App />
     <GlobalStyles />
    </>
   </ThemeProvider>
  </Router>
 </Provider>,
 root
);
