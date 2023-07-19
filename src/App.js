import { useState } from 'react';
import './App.css';
import AddBlog from './add-blog';
import BlogList from './blog-list';
import NavBar from './navbar';

function App() {

  const [blogs, setBlogs] = useState([
    {title: "Blog1", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", author : "Author1", id: 1},
    {title: "Blog2", body: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", author : "Author2", id:2},
    {title: "Blog3", body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.", author : "Author3", id:3}
  
  ]);
  return (
    <div className="App">
      <h1>New Blog Website</h1>
      <NavBar/>
      <AddBlog/>
      <BlogList blogs={blogs}/>
    </div>
  );
}

export default App;
