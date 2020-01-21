import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Post = ({ post }) => {
  const { title, suptitle, label, button, images } = post[0];

  const settings = {
    swipeToSlide: true,
    dots: true,
    // fade:true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true
  };

  const slides = images.map(({ image }) => {
    const id = uuid.v4();

    return (
      <div key={id}>
        <img src={image} alt='slide' />
      </div>
    );
  });

  return (
    <section id='post'>
      <div className='grid-2'>
        <div>
          <Slider {...settings}>{slides}</Slider>
        </div>

        <div className='blog-wrapper'>
          <label>{label}</label>
          <div className='flex flex-column'>
            <span className='sub-heading'>{suptitle}</span>
            <h2 className='heading'>{title}</h2>
            <button className='white-bg'>{button}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

Post.propTypes = {
  post: PropTypes.array.isRequired
};

export default Post;
