import React from "react";

function ExperienceBody(props) {
  var input_text = props.description
  console.log(input_text)
  console.log(typeof input_text)
  return (
    <p className="lead" dangerouslySetInnerHTML={{__html: input_text}}></p>

  );
}

export default ExperienceBody;
