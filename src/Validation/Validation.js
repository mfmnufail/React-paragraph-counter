import React from 'react';

const validation =(props)=>
{
    return (
        <div>{
            
            props.textLength <= 5 ?
            <p>Text length is too short</p> :
            <p>Legth is long enough</p>
            
            
            
            }
        </div>


    );
}

export default validation;