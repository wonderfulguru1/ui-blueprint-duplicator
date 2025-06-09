import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
    text: string;
    className?: string;
    speed?: number;
    onDone?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
    text, 
    className = '', 
    speed = 50,
    onDone
}) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setDisplayText('');
        setCurrentIndex(0);
    }, [text]);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else if (currentIndex === text.length && onDone) {
            onDone();
        }
    }, [currentIndex, text, speed, onDone]);

    return (
        <span className={`font-extrabold ${className}`}>
            {displayText}
            <span className="animate-blink">|</span>
        </span>
    );
};

export default TypewriterText; 