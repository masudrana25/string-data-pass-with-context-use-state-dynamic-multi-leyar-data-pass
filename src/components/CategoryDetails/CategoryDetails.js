import React from 'react';


const CategoryDetails = ({product}) => {
// console.log(props.product);
  
  // console.log(name);
  return (
    <div>
      <h4>This is your category details</h4>
      <h6>selected product : {product?.name} </h6>
    </div>
  );
};

export default CategoryDetails;