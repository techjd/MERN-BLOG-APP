import React from 'react';

import './App.css';

import Messages from './components/messages/messages';
import Header from './components/header/header';
import Notifications from './components/notifications/notifications';
import Profile from './components/profile/profile';
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DiffHeader from './components/differentheader/diffheader';
import { Provider } from 'react-redux';
import PostMessages from './components/PostMessages'

function App() {
  return (
    // <Provider store={store} >

    
    //   <PostMessages />
    // </Provider>
    <Router>
      <div>

          <DiffHeader />
          <Switch>
          <Route path="/" exact component={Messages}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/home" component={Messages} />
          <Route path="/notifications" component={Notifications}  />
          </Switch>
      </div>
      </Router>
  );
}

export default App;
