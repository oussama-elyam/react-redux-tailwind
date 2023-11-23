import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from './common/hooks/redux-hooks';
import authActionThunk from './redux/auth/auth-action';

import AppRoute from './common/routing/Route';
import { Loading } from './common';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const [checkAuth, setCheckAuth] = useState(true);

  const checkAuthentication = async () => {
    //await dispatch(authActionThunk.checkAuthenticated());
  };
  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <>
      {checkAuth ? (
        <div className="flex flex-col">
          <Loading />
        </div>
      ) : (
        <AppRoute />
      )}
    </>
  );
};

export default App;
