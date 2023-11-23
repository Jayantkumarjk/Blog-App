import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";

function UserBlogs() {
  const [blogs, setBlogs] = useState([]);
  // get user blog
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/blog/user-blog/${id}`
      );
      console.log(data.userBlog.blogs);
      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserBlogs();
  }, []);
  return (
    <div>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard
            id={blog._id}
            isUser={true}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={blog.user.username}
            time={blog.createdAt}
          />
        ))
      ) : (
        <h1>You have not created blog</h1>
      )}
    </div>
  );
}

export default UserBlogs;