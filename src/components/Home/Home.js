import React, { useContext } from 'react';
import Category from '../Category/Category';
import './Home.css'
import { CategoryContext } from '../../App';

const Home = () => {
  const category = useContext(CategoryContext);
  return (
    <div className='home'>
      <h1>This is Home</h1>
      <h2> Home category : {category}</h2>
      <Category></Category>
    </div>
  );
};

export default Home;