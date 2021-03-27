import React from 'react';
import './TextButton.css';

const TextButton = ({text, size, color, backgroundColor}) => {
    switch(size) {
        case 's':
            size = '100px';
            break;
        case 'm':
            size = '150px';
            break;
        case 'l':
            size = '230px';
            break;
    }

    switch(color) {
        case 'purple':
            color = 'var(--soft-blue)';
            break;
        case 'red':
            color = 'var(--soft-red)';
            break;
        case 'lightGray':
            color = 'var(--grayish-blue)';
            break;
        case 'darkGray':
            color = 'var(--very-dark-blue)';
            break;
        case 'white':
            color = 'var(--white)';
            break;
    }

    switch(backgroundColor) {
        case 'purple':
            backgroundColor = 'var(--soft-blue)';
            break;
        case 'red':
            backgroundColor = 'var(--soft-red)';
            break;
        case 'lightGray':
            backgroundColor = 'var(--light-grayish-blue)';
            break;
        case 'darkGray':
            backgroundColor = 'var(--very-dark-blue)';
            break;
        case 'white':
            backgroundColor = 'var(--white)';
            break;
    }
 return(
     <button className="TextButton-button"
     style={{width: size, color: color, backgroundColor: backgroundColor}}>{text}</button>
 );
}

export { TextButton };