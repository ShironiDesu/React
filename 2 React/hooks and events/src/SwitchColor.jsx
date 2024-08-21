import React, { useState } from 'react';
import styles from './SwitchColor.module.css';

export default function SwitchColor() {
    const [color, setColor] = useState(true);
    
    const toggleColor = () => {
        setColor(prevColor => !prevColor); 
    };

    return (
        <div>
           
            <div onClick={toggleColor} className={color ? styles.cardRed : styles.cardBlue}></div>
        </div>
    );
}
