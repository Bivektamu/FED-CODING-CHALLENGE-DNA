import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ hero }) => {
  const { title, subtitle, sale, price, label, button, image } = hero[0];
  console.log(title);
  return (
    <section id='hero'>
      <span className='sub-heading'>{label}</span>
      <div className='grid-2 min-height-full'>
        <div className='flex flex-column'>
          <h1 className='title'>{title}</h1>
          <span>{subtitle}</span>
          <div className='my-4'>
            <span className='price'>{price}</span>
            <span className='price sale'>{sale}</span>
          </div>
          <button>
            {button}
            <span></span>
          </button>
        </div>
        <div className='flex'>
          <img src={image} alt={title} className='hero-img' />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  hero: PropTypes.array.isRequired
};

export default Hero;
