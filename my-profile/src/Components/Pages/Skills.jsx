import React from "react";

export const Skill = () => {
  return (
<div style={{marginTop:"50px"}}>
      <h2 className="text-center">My Skills</h2>
      <ul className="list-unstyled d-flex flex-column align-items-center">
        <li className="py-2">
          <span className="badge bg-primary">Java</span>
        </li>
        <li className="py-2">
          <span className="badge bg-primary">JavaScript</span>
        </li>
        <li className="py-2">
          <span className="badge bg-primary">React.js</span>
        </li>
        <li className="py-2">
          <span className="badge bg-primary">HTML</span>
        </li>
        <li className="py-2">
          <span className="badge bg-primary">CSS</span>
        </li>
        <li className="py-2">
          <span className="badge bg-primary">Node.js</span>
        </li>
        <li className="py-2">
          <span className="badge bg-primary">Git</span>
        </li>
        <li className="py-2">
          <span className="badge bg-primary">Bootstrap</span>
        </li>
        <li className="py-2">
          <span className="badge bg-primary">Illustration</span>
        </li>
      </ul>
      <p
        className="d-flex justify-content-center align-items-center"
        style={{
          paddingTop: "20px",
          paddingLeft: "10rem",
          paddingRight: "10rem",
          fontSize: "12px",
        }}
      >
      </p>
    </div>
  );
};
export default Skill;
