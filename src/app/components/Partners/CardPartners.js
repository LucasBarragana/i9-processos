// components/Card.js

import React from 'react';

const Card = ({imageUrl }) => {
    return (
        <div className="py-6">
            <img src={imageUrl} alt='company' className="h-8  rounded-lg" />
        </div>
    );
};

export default Card;
