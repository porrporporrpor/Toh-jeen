import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Loading } from '../components';

const HomePage = React.lazy(() => import('../views/HomePage'));
const MenuPage = React.lazy(() => import('../views/MenuPage'));
const ContactPage = React.lazy(() => import('../views/ContactPage'));
const LoginPage = React.lazy(() => import('../views/LoginPage'));

const RouteMap = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/menu" component={MenuPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
};

export default RouteMap;
