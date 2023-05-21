import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
  const [ category, setCategory ] = useContext(CategoryContext);
  return (
    <div>
      <h1>This is Header</h1>
      <h2>Header category : {category}</h2>
      <button onClick={() => setCategory('laptop')}> laptop </button>
      <button onClick={() => setCategory('mobile')}>  mobile </button>
      <button onClick={() => setCategory('camera')}> camera </button>
    </div>
  );
};

export default Header;