import React from 'react';
import Section from './components/Section';

const contents = [
  {title: "scope", text: "tremble"},
  {title: "source", text: "google"},
  {title: "monopoly", text: "microsoft"},
]



export default function App() {
  return (
    <div>
      {contents.map((e, i) => 
        <Section key={i} title={e.title} text={e.text} />
      )}
    </div>
  );
}
