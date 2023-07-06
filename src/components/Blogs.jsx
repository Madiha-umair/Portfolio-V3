import { useState, useEffect } from "react";

export default function Blogs() {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const getBlog = async () => {
          let response = await fetch("./laravel-blade-cms.json");
          let databaseTables = await response.json();
          //console.log(databaseTables);

          let each_blog = databaseTables[2].data.map((item) => ({
            title: item.title,
            blog: item.blog
          }));
          setBlog(each_blog);
        };
        getBlog();
      }, []);

    return (
        <div id="blog_container">
        <h2>Blogs</h2>
        <ul>
          {blog.map((element, index) => (
            <li key={index}>
             <h2> {element.title}</h2>
             <p> {element.blog}</p>
           </li>
          ))}
          <hr id="line" />
        </ul>
      </div>
    );
  }