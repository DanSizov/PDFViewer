import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import { Button, Stack } from '@mui/material';
import { useStyles } from './style';
import { KeywordsEntity } from '../../types';
import { calculateTotalPages, goToNextPage, goToPreviousPage } from '../../paginationUtils';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface KeywordsSectionProps {
  keywords: KeywordsEntity[];
}

export const KeywordsResult: React.FC<KeywordsSectionProps> = ({keywords}) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const totalPages = calculateTotalPages(keywords.length, itemsPerPage);

  const currentKeyword = keywords.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className={classes.keywordsContainer}>
      <div className={classes.keywordsHeader}>Sentiment analysis</div>
      <div className={classes.keywordsSection}>
        {currentKeyword.map((keyword, index) => (
          <Chip key={index} label={keyword.keyword} variant="outlined" color="primary" />
        ))}
      </div>
      <div className={classes.appearenceText}>
        Appears {keywords.reduce((acc, curr) => acc + curr.appearances, 0)} times in the document
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