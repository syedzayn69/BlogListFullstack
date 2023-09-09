import { useState } from "react";
import blogServices from "../services/blogs";

const Blog = ({ blog, allBlogsList }) => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  const borderStyle = {
    border: "2px solid black",
    padding: "10px",
    borderRadius: "10px",
    margin: "5px",
  };

  const likesFn = async () => {
    const newObj = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1,
    };

    await blogServices.addLikesFn(blog.id, newObj);
    allBlogsList();
  };
  
  const deleteFn = async () => {
    if(window.confirm(`Remove blog ${blog.title} by ${blog.author}`)){
      await blogServices.deleteBlog(blog.id)
      allBlogsList();
    }
  }

  return (
    <>
      {visible ? (
        <div style={borderStyle} className="detailDiv">
          <p>
            {blog.title} {blog.author} <button onClick={toggle}>hide</button>
          </p>
          <p>{blog.url}</p>
          <p>
            likes {blog.likes} {<button onClick={likesFn}>like</button>}
          </p>
          <p>{blog.username}</p>
          <button onClick={deleteFn}>remove</button>
        </div>
      ) : (
        <div style={borderStyle} className="shortDiv">
          <p>
            {blog.title} {blog.author}{" "}
            <button onClick={toggle}>Show Details</button>
          </p>
        </div>
      )}
    </>
  );
};

export default Blog;
