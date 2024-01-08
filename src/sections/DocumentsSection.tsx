import React from 'react';
import { makeStyles } from '@mui/styles';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import DescriptionIcon from '@mui/icons-material/Description';
import { DocumentEntity } from '../types';

const useStyles = makeStyles({
  documentsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px',
  },
  documentsList: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: '10px',
  },
  documentItem: {
    display: 'flex',
    alignItems: 'center',
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


interface DocumentsSectionProps {
  documents: DocumentEntity[];
}

export const DocumentsSection: React.FC<DocumentsSectionProps> = ({ documents }) => {
  const classes = useStyles();
  
  const fileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <InsertDriveFileIcon />;
      case 'wav':
        return <AudioFileIcon />;
      case 'word':
        return <DescriptionIcon />;
      default:
        return <InsertDriveFileIcon />;
    }
  };

  return (
    <div className={classes.documentsContainer}>
          <div className={classes.sectionHeader}>Related documents</div>
      <div className={classes.documentsList}>
        {documents.map((doc, index) => (
          <div key={index} className={classes.documentItem}>
            {fileIcon(doc.type)}
            <span>{doc.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
