import React from 'react';
import './card.style.css';

const Card = (props) => {
    const { monster } = props;
    return (
        <div className='card-container'>
            <img alt="moster" src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    )
}

export default Card; 