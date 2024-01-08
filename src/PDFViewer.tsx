import React from 'react';
import { DatesSection } from './sections/DatesSection';
import { PlacesSection } from './sections/PlacesSection';
import { EntitiesSection } from './sections/EntitiesSection';
import { DocumentsSection } from './sections/DocumentsSection';
import { SentimentAnalysisSection } from './sections/SentimentAnalysisSection';
import { DateEntity, PlaceEntity, SimpleEntity, DocumentEntity, SentimentEntity, PersonEntity, KeywordsEntity } from './types';
import { KeywordsResult } from './sections/keywords-result';
import { PeopleResult } from './sections/people-result';

export type PDFViewerProps = {
  dates: DateEntity[];
  places: PlaceEntity[];
  entities: SimpleEntity[];
  documents: DocumentEntity[];
  sentiments: SentimentEntity[];
  people: PersonEntity[];
  keywords: KeywordsEntity[];
};

export const PDFViewer: React.FC<PDFViewerProps> = ({
  dates,
  places,
  entities,
  documents,
  sentiments,
  people,
  keywords
}) => {
  return (
    <div>
      <DatesSection dates={dates} />
      <PlacesSection places={places} />
      <EntitiesSection entities={entities} />
      <DocumentsSection documents={documents} />
      <SentimentAnalysisSection sentiments={sentiments} />
      <KeywordsResult keywords={keywords} />
      <PeopleResult people={people} />
    </div>
  );
};