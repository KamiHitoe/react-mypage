import React from 'react';

const contents = [
  'About',
  'Learning',
  'Works',
  'Social',
]

const sectionContents = [
  {
    title: <a id={contents[0].toLowerCase()}>{contents[0]}</a>,
    text: "I am web researcher, student"
  },
  {
    title: <a id={contents[1].toLowerCase()}>{contents[1]}</a>,
    text: "React, GraphQL, Python"
  },
  {
    title: <a id={contents[2].toLowerCase()}>{contents[2]}</a>,
    text: "coming soon ..."
  },
  {
    title: <a id={contents[3].toLowerCase()}>{contents[3]}</a>,
    text: ""
  },
]

const socialContents = [
  <a 
    href="https://github.com/KamiHitoe"
    target="_blank"
    rel="noreferrer"
  >Github</a>,
  <a 
    href="https://qiita.com/revvve44"
    target="_blank"
    rel="noreferrer"
  >Qiita</a>,
  <a 
    href="https://dev.to/miyuki"
    target="_blank"
    rel="noreferrer"
  >DEV</a>,
  <a 
    href="https://twitter.com/starmiya_miyuki"
    target="_blank"
    rel="noreferrer"
  >Twitter</a>,
  <a 
    href="https://note.com/hit_kam"
    target="_blank"
    rel="noreferrer"
  >note</a>,
]

export { contents, sectionContents, socialContents };
