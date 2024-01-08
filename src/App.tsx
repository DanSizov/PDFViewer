import React from 'react';
import { PDFViewer } from './PDFViewer';
import { DateEntity, PlaceEntity, SimpleEntity, DocumentEntity, SentimentEntity, PersonEntity, KeywordsEntity } from './types';

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

const mockPeople: PersonEntity[] = [
  { name: 'John', photo: '', apperances: 2 },
  { name: 'Jane', photo: '', apperances: 3 },
];

const mockKeywords: KeywordsEntity[] = [
  { keyword: 'keyword1', appearances: 1 },
  { keyword: 'keyword2', appearances: 2 },
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
        people={mockPeople}
        keywords={mockKeywords}
      />
    </div>
  );
}

export default App;
