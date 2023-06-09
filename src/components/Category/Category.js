import { useContext, useEffect, useState } from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import { CategoryContext } from '../../App';

const allProducts = [
  { name: 'lenovo', category: 'laptop' },
  { name: 'asus', category: 'laptop' },
  { name: 'dell', category: 'laptop' },
  { name: 'apple', category: 'mobile' },
  { name: 'redmi', category: 'mobile' },
  { name: 'nokia', category: 'mobile' },
  { name: 'canon', category: 'camera' },
  { name: 'sony', category: 'camera' },
  { name: 'nikon', category: 'camera' }
]
// aita kaj korey na. Baki sob tik achy
// const a = allProducts.name;
//     console.log(a);
const Category = () => {
  const category = useContext(CategoryContext);
  // console.log(category);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const matchProduct = allProducts.filter(pd => {
      return (pd.category.toLowerCase() === category[0].toLowerCase())
    });
    console.log(matchProduct);
    setProducts(matchProduct);
  }, [category]);
  // console.log(products)


  useEffect(() => {
    console.log("changed");
    console.log(products);
  }, [products])

  return (
    <div>
      <h3>Your selected category is : {category}</h3>
    
      
      {
        products.map(pd => <CategoryDetails product={pd}></CategoryDetails>)
      }
    </div>
  );
};

export default Category;