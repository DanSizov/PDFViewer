import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { useStyles } from './style';
import { PersonEntity } from '../../types';
import { calculateTotalPages, goToNextPage, goToPreviousPage } from '../../paginationUtils';
import { Button } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface PeopleSectionProps {
  people: PersonEntity[];
}

export const PeopleResult: React.FC<PeopleSectionProps> = ({people}) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const personsPerPage = 10;
  const totalPages = calculateTotalPages(people.length, personsPerPage);

  const currentPerson = people.slice(
    currentPage * personsPerPage,
    (currentPage + 1) * personsPerPage
  );

  return (
    <div className={classes.peopleContainer}>
      <div className={classes.pageContainer}>
        <div className={classes.peopleOnThePage}>
          <div className={classes.peopleHeaderText}>{people.length} People</div>
          {
            currentPerson.map((person, index) => (
              <Avatar key={index} alt={person.name} src={person.photo} />
            ))
          }
        </div>
        <div className={classes.selectedPerson}>
          <Avatar alt="Man" src="/static/images/avatar/4.jpg" sx={{ width: 76, height: 76}} />
            <div className={classes.personalDetails}>
              <h3>Kim Wexler</h3>
              <p>Appears 23 times in the documents</p>            
            </div>
        </div>
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