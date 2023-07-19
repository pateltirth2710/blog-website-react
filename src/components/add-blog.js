import '../styles/add-blog.css';

const AddBlog = () => {
    return (  
        <div className="blog">
        <p>Blog title:</p>
        <input style={{width: "200px"}}></input>
        <p>Blog:</p>
        <textarea placeholder="Start writing your blog here" style={{width: "400px", height: "200px"}}></textarea>
        <p>Your Name:</p>
        <input style={{width: "200px"}}></input>
        <br></br>
        <button className='submit-button'>Submit</button>
        </div>    
    );
}
 
export default AddBlog;