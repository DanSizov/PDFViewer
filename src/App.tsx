import React from 'react';
import { PDFViewer } from './PDFViewer';
import { DateEntity, PlaceEntity, SimpleEntity, DocumentEntity, SentimentEntity } from './types';

const mockDates: DateEntity[] = [
  { date: '2022-01-01', appearances: 10 },
  { date: '2022-02-01', appearances: 5 },
];

const mockPlaces: PlaceEntity[] = [
  { address: '1234 Main St, Anytown, USA', tag: 'office' },
  { address: '5678 Market St, Othertown, USA', tag: 'warehouse' },
];

const mockSentiments: SentimentEntity[] = [
  { sentiment: 'happy', appearances: 5 },
  { sentiment: 'sad', appearances: 3 },
];

const mockEntities: SimpleEntity[] = [
  { label: 'car' },
  { label: 'gun' },
  { label: 'dumpster' },
];

const mockDocuments: DocumentEntity[] = [
  { name: 'File name.pdf', type: 'pdf' },
  { name: 'File name.wav', type: 'wav' },
];

const App: React.FC = () => {

  return (
    <div className="App">
      <PDFViewer
        dates={mockDates}
        places={mockPlaces}
        entities={mockEntities}
        documents={mockDocuments}
        sentiments={mockSentiments}
      />
    </div>
  );
}

export default App;
