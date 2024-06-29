import React from 'react'
import './Content.css'


const Content = () => {
    function handlenamechange(){
        const name = ["Earn","Grow","Give"];
        const int = Math.floor(Math.random()*3);
        return name[int];
    
      }
      const handleclick = () =>{
        console.log('Thank You')
      }
  return (
    <div className='content'> 
        <p>Content {handlenamechange()}</p>
        <button onClick={handleclick}>SUBMIT</button>
        
    </div>
  )
}

export default Content