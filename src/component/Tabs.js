import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ allTabs }) => {
  const { tabs } = allTabs[0];

  const [info, setInfo] = useState({
    statement: tabs[0].statement,
    disclaimer: tabs[0].disclaimer
  });

  const [activeTab, setActiveTab] = useState('Description');

  const changeTab = e => {
    e.preventDefault();

    const tabContainerHeight = 116;
    const tabContainer = document.getElementById('tab-filter');

    if (tabContainer.classList.contains('show')) {
      tabContainer.classList.remove('show');
      tabContainer.style.height = '0';
    }

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

  const onClick = () => {
    const tabContainerHeight = 116;
    const tabContainer = document.getElementById('tab-filter');

    tabContainer.classList.add('show');
    tabContainer.style.height = '' + tabContainerHeight + 'px';
  };

  return (
    <section id='tabs'>
      <p className='filter-bar' onClick={() => onClick()}>
        {activeTab}
      </p>
      <form id='tab-filter' className=' grid-3'>
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
      {info && info !== '' && (
        <article className='wrapper'>
          <p>{info.statement}</p>
          <p className='disclaimer'>{info.disclaimer}</p>
        </article>
      )}
    </section>
  );
};

Tabs.propTypes = {
  allTabs: PropTypes.array.isRequired
};

export default Tabs;
