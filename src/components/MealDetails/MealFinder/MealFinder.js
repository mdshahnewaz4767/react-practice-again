import React, { useEffect, useState } from 'react';

const MealFinder = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);

    const handleChanged = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    }
    useEffect(() => [
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => {
          setMeals(data.meals)
          console.log(data.meals);
        })
    ], [search])
    return (
        <div>
            <h1>Meal Finder Delicious Food</h1>
            <input type="text" onChange={handleChanged} placeholder="search food"/>
            <p>Searching: {search}</p>
            <p>Meal Found: {meals?.length || 0}</p>
            <ul>
                {
                    meals?.map(meal => <li key={meal.idMeal}>{meal.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default MealFinder;