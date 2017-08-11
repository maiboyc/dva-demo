import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/index/IndexPage';
import Products from './routes/product/Products';
import Users from './routes/user/Users';
import Login from './routes/login/Login';
import PageNotFound from './routes/error/PageNotFound';
import MyLayout from './routes/MyLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
      <Route path="/index" component={IndexPage} />
      <Route path="/products" component={Products} />
      <Route path="/users" component={Users} />
      <Route path="/pageNotFound" commponent={PageNotFound} />
      <Route path="/layout" commponent={MyLayout} />
    </Router>
  );
}

export default RouterConfig;
