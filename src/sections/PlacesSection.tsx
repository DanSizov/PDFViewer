import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { PlaceEntity } from '../types';
import { calculateTotalPages, goToPreviousPage, goToNextPage } from '../paginationUtils';

const useStyles = makeStyles({
  placeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px',
  },
  placeHeader: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '24px',
    color: 'var(--surface-900, #212121)',
    paddingBottom: '20px',
  },
  placesList: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '10px',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'flex-start',
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

interface PlacesSectionProps {
  places: PlaceEntity[];
}

export const PlacesSection: React.FC<PlacesSectionProps> = ({ places }) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;
  const totalPages = calculateTotalPages(places.length, itemsPerPage);

  const currentPlace = places[currentPage];

  return (
    <div className={classes.placeContainer}>
      <div className={classes.placeHeader}>Places</div>
      {currentPlace && (
        <div className={classes.placesList}>
          <Chip label={currentPlace.address} variant="outlined" />
          <Chip label={currentPlace.tag} variant="outlined" color="primary" />
        </div>
      )}
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
