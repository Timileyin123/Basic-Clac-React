import React from 'react';
import './Button.css';
function Button({handleClick, label}) {
    
        return (
         <button onClick={()=> handleClick(label)}>
                {label}
         </button>
        
        );
    
}
 
export default Button;
