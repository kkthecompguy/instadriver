import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import EmployerLayout from './components/Employer/EmployerLayout';
import LivestreamHome from './components/Livestream/LivestreamHome';
import LivestreamLive from './components/Livestream/LivestreamLive';
import VideoChat from './components/VideoChat/VideoChat';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/employer-edit" component={EmployerLayout} />
        <Route exact path="/livestream-live-create" component={LivestreamLive} />
        <Route exact path="/video-chat" component={VideoChat} />
        <Route exact path="/" component={LivestreamHome} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;