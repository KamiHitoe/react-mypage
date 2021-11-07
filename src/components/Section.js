import React from 'react';

function Section(props) {
  return (
    <section>
      <h2 className="heading">{props.title}</h2>
      <p>{props.text}</p>
    </section>
  )
}

export default Section;
