import { CoffeeContext } from '../context/CoffeeContext';
import { createContext, useContext, useState } from 'react';
import SetCoffeeBean from './SetCoffeeBean';
const useCoffee = () => useContext(CoffeeContext);

const SelectedCoffeeBean = ({ coffeeBeans }) => {
  const { coffeeBean } = useCoffee();
  console.log(
    '🚀 ~ file: SelectedCoffeeBean.js:7 ~ SelectedCoffeeBean ~ coffeeBean',
    coffeeBean
  );
  return (
    <div className='selected-coffee'>
      <h2>{coffeeBean.name}</h2>
      <SetCoffeeBean coffeeBeans={coffeeBeans} />
    </div>
  );
};

export default SelectedCoffeeBean;
