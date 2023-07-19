const BlogList = ({blogs}) => {
    return (    
        <div className="blog-list">
            {blogs.map((blog) => 
            (<div className="blog" key={blog.id}>
                <p>{blog.title}</p>
                <p>{blog.body}</p>
                <p>{blog.author}</p>
            </div>)
            )}
        </div>
    );
}
 
export default BlogList;