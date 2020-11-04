import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Posts from './pages/posts/Posts';
import Auth from './pages/auth/Auth';

export default function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Route exact path="/login">
            <Auth />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
