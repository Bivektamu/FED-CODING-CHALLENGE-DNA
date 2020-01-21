import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Hero from './Hero';
import Products from './Products';
import Post from './Post';
import Tabs from './Tabs';

import { getHeroProduct } from '../actions';
import { getProducts } from '../actions';
import { getPost } from '../actions';
import { getTabs } from '../actions';

const Home = ({
  hero: { hero },
  products: { products },
  post: { post },
  tabs: { tabs },
  getHeroProduct,
  getProducts,
  getPost,
  getTabs
}) => {
  useEffect(() => {
    getHeroProduct();
    getProducts();
    getPost();
    getTabs();
  }, [getHeroProduct, getProducts, getPost, getTabs]);

  if (!products || !hero || !post || !tabs) return '';

  console.log(hero);
  console.log(products);
  console.log(post);
  console.log(tabs);

  return (
    <main id='main'>
      <Hero hero={hero} />
      <Products allProducts={products} />
      <Post post={post} />
      <Tabs allTabs={tabs} />
    </main>
  );
};

Home.propTypes = {
  getHeroProduct: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  getTabs: PropTypes.func.isRequired,
  hero: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  hero: state.hero,
  products: state.products,
  post: state.post,
  tabs: state.tabs
});

export default connect(mapStateToProps, {
  getHeroProduct,
  getProducts,
  getPost,
  getTabs
})(Home);
