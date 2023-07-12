import { useState, useEffect } from "react";

export default function Blogs() {
  const [blog, setBlog] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const getBlog = async () => {
      let response = await fetch("./laravel-blade-cms.json");
      let databaseTables = await response.json();

      let each_blog = databaseTables[2].data.map((item) => ({
        title: item.title,
        blog: item.blog
      }));
      setBlog(each_blog);
    };
    getBlog();
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div id="blogs">
      <h2>Blogs</h2>
      <div className="blog-container">
        <ul>
          {blog.map((element, index) => (
            <li
              key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => handleClick(index)}
            >
              <h2>{element.title}</h2>
              <p>{element.blog}</p>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
