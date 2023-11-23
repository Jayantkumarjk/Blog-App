import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  //get Blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/blog/all-blog"
      );
      console.log(data);
      //console.log(data.blogs[0].user.username);
      if (data?.success) {
        // (data && data.success)
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBlogs();
    console.log(blogs);
  }, []);
  return (
    <div>
      {blogs &&
        blogs.map((blog) => (
          <BlogCard
            id={blog?._id}
            isUser={localStorage.getItem("userId") === blog?.user?._id}
            title={blog?.title}
            description={blog?.description}
            image={blog?.image}
            username={blog?.user.username}
            time={blog?.createdAt}
          />
        ))}
      <BlogCard />
    </div>
  );
}

export default Blogs;
