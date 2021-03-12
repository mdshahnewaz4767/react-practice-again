import React, { useEffect, useState } from 'react';

const MealDetails = () => {
    const [meal, setMeal] = useState({});

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
        .then(res => res.json())
        .then(data => {
        setMeal(data)
        console.log(data.meals[0]);
        })
    }, [])
    return (
        <div>
            <h1>Meal Name: {meal && meal.idMeal}</h1>
        </div>
    );
}

export default MealDetails;