import { useState, useEffect } from "react";

export default function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const getExperience = async () => {
      let response = await fetch("./laravel-blade-cms.json");
      let databaseTables = await response.json();

      let each_experience = databaseTables[3].data.map((item) => ({
        title: item.title,
        company: item.company,
        start: item.start,
        end: item.end,
        location: item.location,
        detail: item.detail,
      }));
      setExperience(each_experience);
    };
    getExperience();
  }, []);

  return (
    <div>
      <h2>Experience</h2>
    <div id="experience_container">
      <ul>
        {experience.map((entity, index) => (
          <li key={index}>
            <h3>{entity.title}</h3>
            <h4>{entity.company}</h4>
            <p>{entity.location}</p>
            <p>
              {entity.start} - {entity.end}
            </p>
            <p>{entity.detail}</p>
          </li>
        ))}
        <hr id="line" />
      </ul>
    </div>
    </div>
  );
}
