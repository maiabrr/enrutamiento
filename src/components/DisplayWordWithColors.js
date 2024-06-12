import React from 'react';
import { useParams } from 'react-router-dom';

const DisplayWordWithColors = () => {
    const { word, color, bgColor } = useParams();
    const style = {
        color: color,
        backgroundColor: bgColor,
        padding: '10px'
    };

    return (
        <div style={style}>
        <h1>The word is: {word}</h1>
        </div>
    );
};

export default DisplayWordWithColors;
