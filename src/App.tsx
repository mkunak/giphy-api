import { observer } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppRoutes from './routes';

import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <>
      <ErrorBoundary>
        <div>
          <ToastContainer />
          <Router>
          <AppRoutes />
          </Router>
        </div>
      </ErrorBoundary>
    </>
  );
}

export default observer(App);
