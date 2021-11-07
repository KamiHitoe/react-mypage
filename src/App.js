import React from 'react';
import Section from './components/Section';
import Footer from './components/Footer';
import List from './components/List';

const contents = [
  {title: "scope", text: "tremble"},
  {title: "source", text: "google"},
  {title: "monopoly", text: "microsoft"},
]

const elements = [
  'foo',
  'bar',
  'higurashi',
]

export default function App() {
  return (
    <div>
      {/* loop Section */}
      {contents.map((e, i) => {
        if (i === 1) {
          return (
            /* render list */
            <Section key={i} title={e.title} text={e.text}>
              {elements.map((e, i) => 
                <List key={i} element={e} />
              )}
            </Section>
          )
        } else {
          return <Section key={i} title={e.title} text={e.text} />
        }
      })}

      <Footer />
    </div>
  );
}
