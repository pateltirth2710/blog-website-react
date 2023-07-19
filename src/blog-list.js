const BlogList = ({blogs}) => {
    return (
    <div className="blog-list">
        <p>{blogs.title}</p>
        <p>{blogs.body}</p>
        <p>{blogs.author}</p>
    </div>);
}
 
export default BlogList;