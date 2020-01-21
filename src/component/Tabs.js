import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const Tabs = ({ allTabs }) => {
  const { tabs } = allTabs[0];

  const [info, setInfo] = useState({
    statement: tabs[0].statement,
    disclaimer: tabs[0].disclaimer
  });

  const changeTab = e => {
    e.preventDefault();
    const activeTab = document.getElementsByClassName('active');
    activeTab[0].classList.remove('active');
    e.target.classList.add('active');

    const tab = tabs.filter(({ title }) => title === e.target.value);

    const { disclaimer, statement } = tab[0];

    setInfo({
      statement,
      disclaimer
    });
  };

  return (
    <section id='tabs'>
      <form className='tab-filter grid-3'>
        <input
          type='button'
          className='filter-options active'
          onClick={e => changeTab(e)}
          value='Description'
        />

        <input
          type='button'
          className='filter-options'
          onClick={e => changeTab(e)}
          value='Warranty'
        />

        <input
          type='button'
          className='filter-options'
          onClick={e => changeTab(e)}
          value='Reviews'
        />
      </form>
      {info && info != '' && (
        <article className='wrapper'>
          <p>{info.statement}</p>
          <p className='disclaimer'>{info.disclaimer}</p>
        </article>
      )}
    </section>
  );
};

Tabs.propTypes = {};

export default Tabs;
