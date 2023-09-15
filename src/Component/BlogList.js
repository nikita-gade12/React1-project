const BlogList = ({blogs,title,handleDelete}) => {
    
    return ( 
        <div className="cardlist">
            <h1 className="h1">{title}</h1>
        { blogs.map(( blogs)=>(
         <div className="card-container" key={blogs.id}>
             <div className="card">
                
              <h2>{blogs.title}</h2>
              <br/>
              <p>Written by {blogs.author}</p>
              <br/>
              <p>Lorem ipsum, dolor sit amet nam natus facilis? Quasi quisquam alias facere quis.</p>
              <br/>
              <button className="button">order click</button>
             <button onClick={()=>handleDelete(blogs.id)} > Cancel Orders</button>
              <img src={blogs.image} alt={blogs.image} />
    
        </div>
     </div>
     ))}
        </div>
     );
}
 
export default BlogList;