import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'redux/store';
import GlobalStyles from 'styles/global';
import App from 'App';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
