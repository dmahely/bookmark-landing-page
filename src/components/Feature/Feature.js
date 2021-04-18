import React from 'react';
import './Feature.css';

const Feature = ({ heading, image, description, id }) => {
    return <div className="Feature--container" id={id}>
        <div className="Feature--inner-container">
            <img className="Feature--image" src={image} alt={heading} />
            <h3 className="Feature--heading">{heading}</h3>
            <p className="Feature--description">{description}</p>
        </div>
    </div>
}

export { Feature };