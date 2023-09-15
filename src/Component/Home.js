import { useEffect, useState } from "react"
import BlogList from "./BlogList";


const Home  = () => {
    
     

  const[blogs,setblogs]=useState([
    {title:'pizza',body:'lorem ipsum...',author:'neha',id:1,},
    {title:'Burger',body:'lorem ipsum...',author:'neha',id:2,},
    {title:' Paneer sabzi',body:'lorem ipsum...',author:'neha',id:3,}
]);


 const handleDelete = (id)=>{
    const newBlogs= blogs.filter(blogs=>blogs.id !== id);
    setblogs(newBlogs);
 }
useEffect(()=>{
    console.log('use effect ran')
    console.log(blogs)
})

    return (
        <div className="main-card--cointainer">
            
          

     <BlogList blogs={ blogs} title='The word Best Restaurant ' handleDelete={handleDelete}/>
      </div>
      );
}
 
export default Home ;