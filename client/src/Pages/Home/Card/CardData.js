import React from 'react';

const CardData = ({item}) => {
  const {img,title,description,bgColor} = item
    return (
        <div className={`card lg:card-side p-5 shadow-xl ${bgColor} `}>
        <figure>
          <img src={img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
};

export default CardData;