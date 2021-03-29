import React from 'react';
import './NewsletterForm.css';
import { TextButton } from '../TextButton/TextButton';

const NewsletterForm = () => {
    return (
        <div className="Newsletter--container">
            <span className="Newsletter--heading">35,000+ already joined</span>
            <span className="Newsletter--description">Stay up-to-date with what we're doing</span>
            <form>
                <input required className="Newsletter--input" type="email" placeholder="Enter your email address" />
                <TextButton text="Contact Us" color="white" size="l" backgroundColor="red" />
            </form>
        </div>
    );
}

export { NewsletterForm };