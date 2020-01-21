import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const Products = ({ allProducts }) => {
  const { products } = allProducts[0];
  console.log(products);
  const product = products.map(({ image, title, subtitle, price, sale }) => {
    const id = uuid.v4();
    return (
      <div key={id} className='product'>
        {sale && <span className='sale-tag'>sale</span>}

        <img src={image} alt={title} />
        <h2 className='heading'>{title}</h2>
        <span className='sub-heading'>{subtitle}</span>
        <span className='price'>{price}</span>
      </div>
    );
  });

  return (
    <section id='products' className='grid-3'>
      {product}
    </section>
  );
};

Products.propTypes = {
  allProducts: PropTypes.array.isRequired
};

export default Products;
