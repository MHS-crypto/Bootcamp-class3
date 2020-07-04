import React from 'react';
import './hello.css'


function Hello({firstname}) {

  return <div class="myname"> Hello <strong> {firstname} </strong> 
   <br/>
   <p>My hobbies are: </p>
   <ul>
     <li>I like to write</li>
     <li>I like to play cricket</li>
     <li>I like to do new things</li>
     <li>I like travelling</li>
   </ul>
  
  </div>
}

export default Hello;
