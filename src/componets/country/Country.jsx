import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h4>Country Name:{props.name} </h4>
            <h5>Area: {props.area}</h5>
            <img src={props.flag} alt="" />
        </div>
    );
};

export default Country;