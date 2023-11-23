import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Suspense } from 'react';

import App from './App';
import store from './redux';

import './index.css';
import { Loading } from './common';
import { ErrorBoundary } from './pages/errors/error-boundary';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
