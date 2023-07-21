import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getGreeting } from '../redux/greeting/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);
  const message = useSelector((state) => state.greeting.message);
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>{message}</h1>
    </div>
  );
};

export default Greeting;
