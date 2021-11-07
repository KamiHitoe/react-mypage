import React from 'react';
import Section from './components/Section';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import ButtonAppBar from './components/ButtonAppBar';
import {
  sectionContents,
  socialContents,
} from './components/Contents';


export default function App() {
  return (
    <div>
      <ButtonAppBar />
      <Header />

      {/* loop Section */}
      {sectionContents.map((e, i) => {
        if (i === 3) {
          return (
            /* render list */
            <Section key={i} title={e.title} text={e.text}>
              {socialContents.map((e, i) => 
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
