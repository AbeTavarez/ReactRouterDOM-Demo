import React from 'react';
// import hook
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  // intialize hook
  const params = useParams();
  return (
    <div>
      <h1>ProductDetail</h1>

      <p>{params.productId}</p>
    </div>
  );
};

export default ProductDetail;
