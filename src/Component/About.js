
import React from 'react'

const handleSubmit=()=>{
console.log('submit')
}

const About = () => {

  return (
    <div>
 <form className='about' onSubmit={handleSubmit}>
  
  <h1 className='name'>  Create Order Form</h1>
    <br/>
 <label >
        <h3 className='order'>Your Order Name :</h3> 
        <input type='text'placeholder='name..' className='input' required/>
    </label>
    
    <label>
      <h3 className='order'>Menu card :</h3>  
      </label>
        <select name='no' id='no' className='input' required>
        <option value="1" >veg pizza :200₹</option>
        <option value="1" >Burger :100₹ </option>
      <option value="2" > paneer pizza:250₹ </option>
      <option value="1" >Paneer sabzi 200₹ </option>
        </select>
    <br/>
     <label>
       <h3 className='order'>Your Location  </h3> 
       
    </label>

       <input type='location'placeholder='locetion' className='input' required/>
       <br/>
 <div className='button'>

       <button><h2>submit Order</h2></button>
 </div>
 </form>
 
         </div>
  )
}

export default About