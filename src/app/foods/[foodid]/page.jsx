import React from 'react';

const FoodIDPage = async ({params }) => {

    const {foodid} = await params
    
    const res = await fetch(`http://localhost:1144/foods/${foodid}`)
    const book = await res.json();

    return (
        <div>
            <h1>name : {book.name}</h1>
        </div>
    );
};

export default FoodIDPage;