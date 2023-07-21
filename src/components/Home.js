import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  // click this button then go to greeting
  <div>
    <Link to="/greeting">Go to Greeting</Link>
  </div>
);

export default Home;
