import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { DateEntity } from '../types';
import { calculateTotalPages, goToPreviousPage, goToNextPage } from '../paginationUtils';

const useStyles = makeStyles({
  dateContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px',
    fontFamily: 'Poppins, sans-serif',
  },
  dateHeader: {
    color: 'var(--surface-900, #212121)',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '24px',
    paddingBottom: '20px',
  },
  datesList: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: '10px',
    fontFamily: 'Poppins, sans-serif',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: '20px',
    fontFamily: 'Poppins, sans-serif',
  },
  navigationButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontFamily: 'Poppins, sans-serif',
  },
  appearanceText: {
    fontSize: '16px',
    paddingTop: '20px',
    fontFamily: 'Poppins, sans-serif',
  },
});


interface DatesSectionProps {
  dates: DateEntity[];
}

export const DatesSection: React.FC<DatesSectionProps> = ({ dates }) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = calculateTotalPages(dates.length, itemsPerPage);

  const currentDates = dates.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className={classes.dateContainer}>
      <div className={classes.dateHeader}>Dates</div>
      <div className={classes.datesList}>
        {currentDates.map((dateEntity, index) => (
          <Chip key={index} label={dateEntity.date} variant="outlined" color="primary" />
        ))}
      </div>
      <div className={classes.appearanceText}>
        Appears {dates.reduce((acc, curr) => acc + curr.appearances, 0)} times in the document
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
