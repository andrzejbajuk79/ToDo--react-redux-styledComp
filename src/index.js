import ReactDOM from 'react-dom';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import styled from 'styled-components';
import store from './store';
import theme from './utils/theme';
import GlobalStyles from './utils/global';
import Spinner from './components/Loader/Spinner';
import App from './App';

const root = document.getElementById('root');
const Wrapper = styled.div`
 width: 100%;
 height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
`;
ReactDOM.render(
 <ThemeProvider theme={theme}>
  <>
   <Wrapper>
    <Spinner />
   </Wrapper>
   <GlobalStyles />
  </>
 </ThemeProvider>,
 root
);

//po dodaniu w store.js do rrconfig:  attachAuthIsReady: true,
store.firebaseAuthIsReady.then(() => {
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
});
