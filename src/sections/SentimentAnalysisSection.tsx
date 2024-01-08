import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { SentimentEntity } from '../types';
import { calculateTotalPages, goToPreviousPage, goToNextPage } from '../paginationUtils';

const useStyles = makeStyles({
  sentimentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px',
  },
  sentimentHeader: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '24px',
    color: '#212121',
    paddingBottom: '20px',
  },
  sentimentsList: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: '10px',
  },
  appearanceText: {
    alignSelf: 'flex-start',
    fontSize: '16px',
    padding: '20px 0',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: '20px',
  },
  navigationButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
});

interface SentimentAnalysisSectionProps {
  sentiments: SentimentEntity[];
}

export const SentimentAnalysisSection: React.FC<SentimentAnalysisSectionProps> = ({ sentiments }) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = calculateTotalPages(sentiments.length, itemsPerPage);

  const currentSentiments = sentiments.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className={classes.sentimentContainer}>
      <div className={classes.sentimentHeader}>Sentiment analysis</div>
      <div className={classes.sentimentsList}>
        {currentSentiments.map((sentiment, index) => (
          <Chip key={index} label={sentiment.sentiment} variant="outlined" color="primary" />
        ))}
      </div>
      <div className={classes.appearanceText}>
        Appears {sentiments.reduce((acc, curr) => acc + curr.appearances, 0)} times in the document
      </div>
      <div className={classes.navigation}>
        <Button onClick={() => setCurrentPage(goToPreviousPage(currentPage))} disabled={currentPage === 0}>
          <NavigateBeforeIcon /> Previous
        </Button>
        <Button onClick={() => setCurrentPage(goToNextPage(currentPage, totalPages))} disabled={currentPage === totalPages - 1}>
          Next <NavigateNextIcon />
        </Button>
      </div>
    </div>
  );
};
