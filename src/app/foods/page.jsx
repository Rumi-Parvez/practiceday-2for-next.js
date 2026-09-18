import React from 'react';

import FoodCard from '../components/FoodCard';

const fooddatapermisions = async () => {
  const res = await fetch('http://localhost:1144/foods' , {cache: 'force-cache'})
  return res.json()
}

const Foodpage = async () => {
    const foodData = await fooddatapermisions()

    return (
        <div>
            <h1>name {foodData.length}</h1>
            <div className='grid grid-cols-4 gap-4 '>
                {
                    foodData.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default Foodpage;