import React from 'react';
import { useParams } from 'react-router-dom';

const DisplayNumber = () => {
    const { value } = useParams();
    return (
        <div>
        <h1>The number is: {value}</h1>
        </div>
    );
    };

export default DisplayNumber;
