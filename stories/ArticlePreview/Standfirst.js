import React from 'react';

import SiteSelection from '../SiteSelection';
import Article from '../../src/molecules/ArticlePreview';

export default () => (
  <SiteSelection>
    <div style={{ margin: '0 auto', maxWidth: '900px' }}>
      <h1>20.2 - Standfirst!</h1>
      <Article
        id={1}
        link="#"
        title="Politiet vil fengsle SOS Rasisme-leder i fire uker"
        subtitle="Ifølge politiet tappet Kjell Gunnar Larsen SOS Rasisme for beløp i millionklassen."
      />
      <h2>20.2.1 - Icons!</h2>
      <Article
        id={1}
        link="#"
        title="Politiet vil fengsle SOS Rasisme-leder i fire uker"
        subtitle="Ifølge politiet tappet Kjell Gunnar Larsen SOS Rasisme for beløp i millionklassen."
      />
      <h2>20.2.2 - Labels!</h2>
      <Article
        id={2}
        link="#"
        title="Person funnet død i vannet i Skien - 62-åring savnet i samme område"
        subtitle="Det er ikke bekreftet om personen er en 62 år gammel mann som har vært savnet."
        labels={[
          { text: 'Akkurat nå' },
          {
            text: 'Trump',
            color: 'pink',
          },
        ]}
        image="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=980&height=490&compression=60"
      />
    </div>
  </SiteSelection>
);
