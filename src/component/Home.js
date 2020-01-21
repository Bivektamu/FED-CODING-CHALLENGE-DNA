import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Hero from './Hero';
import { getHeroProduct } from '../actions';

const Home = ({ hero: { loading, hero }, getHeroProduct }) => {
  useEffect(() => {
    getHeroProduct();
  }, [getHeroProduct]);

  if (loading) return '';

  console.log(hero);

  return (
    <main id='main'>
      <Hero hero={hero} />
    </main>
  );
};

Home.propTypes = {
  getHeroProduct: PropTypes.func.isRequired,
  hero: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  hero: state.hero
});

export default connect(mapStateToProps, { getHeroProduct })(Home);
