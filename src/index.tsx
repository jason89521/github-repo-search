import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from 'styles/global';
import App from 'App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>
);
