// components/Card.js

import React from 'react';

const Card = ({imageUrl }) => {
    return (
        <div className="p-4">
            <img src={imageUrl} alt='company' className="h-8 mb-4 rounded-lg" />
        </div>
    );
};

export default Card;
