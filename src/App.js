import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import MainPage from './pages/MainPage';
import BlogPage from './pages/BlogPage';
import BlogWritePage from './pages/BlogWritePage';
import BlogViewPage from './pages/BlogViewPage';
import GalleryPage from './pages/GalleryPage';
// import CalendarPage from './pages/CalendarPage';
import FriendsPage from './pages/FriendsPage';

function App() {
    return (
      <Router>
        <Switch>
          <Route exact path={['/', '/LoginPage']}><LoginPage /></Route>
          <Route exact path="/JoinPage"><JoinPage /></Route>
          <Route exact path="/MainPage"><MainPage /></Route>
          <Route exact path="/BlogPage"><BlogPage /></Route>
          <Route exact path="/BlogWritePage"><BlogWritePage /></Route>
          <Route exact path="/BlogViewPage"><BlogViewPage /></Route>
          <Route exact path="/GalleryPage"><GalleryPage /></Route>
          <Route exact path="/FriendsPage"><FriendsPage /></Route>
        </Switch>
      </Router>
    );
}

export default App;
