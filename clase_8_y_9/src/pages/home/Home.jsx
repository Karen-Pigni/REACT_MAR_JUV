import React from 'react';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';

import './home.css';
const Home = () => {
  return (
    <div className="home">
      <p>Navegar hacia los Post</p>
      <Link to="/posts">
        <Button inverted>Ir a post</Button>
      </Link>
    </div>
  );
};

export default Home;
