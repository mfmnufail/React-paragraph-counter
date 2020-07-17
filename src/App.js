
import React, { Component } from 'react';


import './App.css';
import Person from './Person/Person';
import Char from './Char/Char';
import Validation from './Validation/Validation';




   class app extends Component

  {
    state = {

      userInput : '',

    };


     textHandler = (event) =>
    {
      this.setState({userInput:event.target.value});
      
    };

    deleteHandler = (letterIndex) =>
    {
      const input = this.state.userInput.split('');
      
      input.splice(letterIndex, 1);
      const joinInput = input.join('');
      this.setState({userInput:joinInput});
    }



    render() {

      
     const charList = this.state.userInput.split('').map((ch,index)=>{
       
       return <Char character={ch} key={index} disappear = {() =>this.deleteHandler(index)} />
     });
    
      return ( 
        <div className='App'>

          <h1>Describe your self using 50 words</h1>
          <input type="text" onChange = {this.textHandler} value={this.state.userInput} />
           <p>{this.state.userInput}</p>
           <Validation textLength= {this.state.userInput.length}/>
           {charList}

          
        </div>

    );


    }
  }

  

  
export default app;



 




