import React from 'react';
import { DatesSection } from './sections/DatesSection';
import { PlacesSection } from './sections/PlacesSection';
import { EntitiesSection } from './sections/EntitiesSection';
import { DocumentsSection } from './sections/DocumentsSection';
import { SentimentAnalysisSection } from './sections/SentimentAnalysisSection';
import { DateEntity, PlaceEntity, SimpleEntity, DocumentEntity, SentimentEntity } from './types';

export type PDFViewerProps = {
  dates: DateEntity[];
  places: PlaceEntity[];
  entities: SimpleEntity[];
  documents: DocumentEntity[];
  sentiments: SentimentEntity[];
};

export const PDFViewer: React.FC<PDFViewerProps> = ({
  dates,
  places,
  entities,
  documents,
  sentiments,
}) => {
  return (
    <div>
      <DatesSection dates={dates} />
      <PlacesSection places={places} />
      <EntitiesSection entities={entities} />
      <DocumentsSection documents={documents} />
      <SentimentAnalysisSection sentiments={sentiments} />
    </div>
  );
};