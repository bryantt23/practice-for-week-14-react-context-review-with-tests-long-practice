import { CoffeeContext } from '../context/CoffeeContext';
import { createContext, useContext, useState } from 'react';
const useCoffee = () => useContext(CoffeeContext);

const SelectedCoffeeBean = () => {
  const { coffeeBean } = useCoffee();
  console.log(
    '🚀 ~ file: SelectedCoffeeBean.js:7 ~ SelectedCoffeeBean ~ coffeeBean',
    coffeeBean
  );
  return (
    <div className='selected-coffee'>
      <h2>{coffeeBean.name}</h2>
    </div>
  );
};

export default SelectedCoffeeBean;
