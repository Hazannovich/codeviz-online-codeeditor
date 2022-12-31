import React from "react";

const About = (props) => {
  return (
    <>
      <article className="p-2 m-2 prose">
        <h1>
          This Online Code editor was built By Israel Hazan Barmack, CS student
          at The Open University in Israel
        </h1>
        <p>
          I've used CodeMirror for the editor because of it's great scaleability
          and customisability. I've also used React as the front end with
          Tailwindcss, and used Flask with postgress for the server.
        </p>
      </article>
    </>
  );
};

export default About;
