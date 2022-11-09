import React, { useEffect, useState } from 'react';

const Cars = () => {
    const initCarData = {id: 0, brand: "Test", model: "Test"};

    useEffect(
        () => {
            //Call API -fetching car data from Backend
    setCar({id:1, brand:"Volvo", model:"V60", gearBox:"Automatic"});

        }
    )

    const [car, setCar] =useState(initCarData);
    
    return (
        <div>
            <b>Car Info:{car.brand} {car.model}</b>            
        </div>
    );
};

export default Cars;