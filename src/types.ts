export interface DateEntity {
  date: string;
  appearances: number;
}

export interface PlaceEntity {
  address: string;
  tag: string;
}

export interface SimpleEntity {
  label: string;
}

export interface DocumentEntity {
  name: string;
  type: string;
}

export interface SentimentEntity {
  sentiment: string;
  appearances: number;
}
