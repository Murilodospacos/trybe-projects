import axios from 'axios';
import React from 'react';
import CardProduct from '../components/CardProduct';
import Navbar from '../components/Navbar';

export default function Products() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function loadProducts() {
      const result = await axios.get('http://localhost:3001/products');

      setProducts(result.data);
    }
    loadProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div style={ { display: 'flex', flexWrap: 'wrap' } }>
        { products.length > 0 ? products.map((value) => (
          <CardProduct
            key={ value.id }
            id={ value.id }
            name={ value.name }
            price={ value.price }
            urlImage={ value.url_image }
          />
        )) : 'Loading' }
      </div>
    </div>
  );
}
