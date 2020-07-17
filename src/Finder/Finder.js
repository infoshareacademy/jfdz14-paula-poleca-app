import React from 'react';
import CityFinder from './CityFinder'
import RangeSlider from './RangeSlider'
import TextFinder from './TextFinder'
import style from './Finder.module.css'

const Finder = () => {
  return(
    <div>
      <h1>Znajdź wydarzenie z Paula Poleca!</h1>
      <div className = {style.finder}>
        <CityFinder />
        <TextFinder />
        <RangeSlider />
    
      </div>
    </div>
  );
}

export default Finder