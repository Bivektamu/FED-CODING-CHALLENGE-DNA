import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Hero from './Hero';
import Products from './Products';

import { getHeroProduct } from '../actions';
import { getProducts } from '../actions';

const Home = ({
  hero: { hero },
  products: { products },
  getHeroProduct,
  getProducts
}) => {
  useEffect(() => {
    getHeroProduct();
    getProducts();
  }, [getHeroProduct, getProducts]);

  if (!products || !hero) return '';

  console.log(hero);
  console.log(products);

  return (
    <main id='main'>
      <Hero hero={hero} />
      <Products allProducts={products} />
    </main>
  );
};

Home.propTypes = {
  getHeroProduct: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  hero: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  hero: state.hero,
  products: state.products
});

export default connect(mapStateToProps, { getHeroProduct, getProducts })(Home);
