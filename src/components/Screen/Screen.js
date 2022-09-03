import React from 'react';
import './Screen.css';

const Screen = ({text, result}) => {
    return(
        <div className='screenP'>
            {/* <input type='text' className='screen-input' value={props.value} readOnly/>
            <input type='text' className='screen-input' value={props.value} readOnly/> */}
            <p>{result}</p>
            <p>{text}</p>
        </div>
    );
}

export default Screen;