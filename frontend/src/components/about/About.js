import React from 'react';

import AboutContent from './AboutContent';
import Board from './Board';

const About = () => {
  return (<div>
    <AboutContent code="about_us"/>
    <AboutContent code="vision"/>
    <AboutContent code="mission"/>
    <AboutContent code="history"/>
    <Board/>
  </div>);
};

export default About;
