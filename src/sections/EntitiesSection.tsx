import React from 'react';
import { makeStyles } from '@mui/styles';
import Chip from '@mui/material/Chip';
import { SimpleEntity } from '../types';

const useStyles = makeStyles({
  entitiesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px',
  },
  entitiesList: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: '10px',
  },
  sectionHeader: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '24px',
    color: '#212121',
    paddingBottom: '20px',
  },
});

interface EntitiesSectionProps {
  entities: SimpleEntity[];
}

export const EntitiesSection: React.FC<EntitiesSectionProps> = ({ entities }) => {

  const classes = useStyles();
  const headerText = `${entities.length} Entit${entities.length > 1 ? 'ies' : 'y'}`;

  return (
    <div className={classes.entitiesContainer}>
      <div className={classes.sectionHeader}>{headerText}</div>
      <div className={classes.entitiesList}>
        {entities.map((entity, index) => (
          <Chip key={index} label={entity.label} variant="outlined" />
        ))}
      </div>
    </div>
  );
};
