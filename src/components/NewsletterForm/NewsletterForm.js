import React from 'react';
import './NewsletterForm.css';
import { TextButton } from '../TextButton/TextButton';

const NewsletterForm = () => {
    return (
        <div className="Newsletter--container">
            <span className="Newsletter--heading">35,000+ already joined</span>
            <span className="Newsletter--description">Stay up-to-date with what we're doing</span>
            <input className="Newsletter--input" type="text" placeholder="Enter your email address" />
            <TextButton text="Contact Us" color="white" size="l" backgroundColor="red" />
        </div>
    );
}

export { NewsletterForm };