import React from 'react';
import { Link } from 'react-router-dom';


const Country = (props) => {
    const {name,capital,alpha2Code} =props.country;
    const countryStyle ={
        border : '0px solid black',
        borderRadius :'20px',
        margin : '20px',
        padding : '20px',
        boxShadow : '5px 5px 5px 5px gray',
        textAlign:'center'
    }
    return (
        <div style ={countryStyle}>
            
        <h1>{name}</h1>
        <p>{capital}</p> 
        <Link to={`/country/${alpha2Code}`}><button>Country detail ({alpha2Code})</button></Link>           
        </div>
    );
};

export default Country;