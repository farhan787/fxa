/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react';
import { Switch, Redirect, Route, BrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import AccountSearch from './components/AccountSearch';
import AdminLogs from './components/AdminLogs';

const App = () => (
  <BrowserRouter>
    <AppLayout>
      <Switch>
        <Redirect exact from="/" to="/admin-logs" />
        <Route path="/admin-logs" component={AdminLogs} />
      </Switch>
      <Switch>
        <Redirect exact from="/" to="/account-search" />
        <Route path="/account-search" component={AccountSearch} />
      </Switch>
    </AppLayout>
  </BrowserRouter>
);

export default App;
