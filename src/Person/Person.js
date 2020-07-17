import React from 'react';
import './Person.css'


const person = (props) =>{
return (
    <div className='Person'>
                
                <h1 onClick={props.click}>I am  {props.name}</h1>
                <input type='text' value={props.name} onChange={props.Change}/>
                <p>My age is {props.age},</p>
                <p >My favourite number is {Math.floor(Math.random()*30)}</p>
                <p >{props.children}</p>
    </div>

)};

export default person;