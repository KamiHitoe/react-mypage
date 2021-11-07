import React from 'react';

function Section(props) {
  return (
    <section>
      <h1 className="heading">{props.title}</h1>
      <p>{props.text}</p>
      {props.children}
    </section>
  )
}

export default Section;
