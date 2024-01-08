import { createUseStyles } from "react-jss"

export const useStyles = () => {
  return createUseStyles({
    keywordsContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '20px'
    },
    keywordsHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      alignSelf: 'stretch',
    },
    keywordsSection: {
      display: 'flex',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
      alignSelf: 'stretch',
      flexWrap: 'wrap',
      padding: '20px'
    },
    appearenceText: {
      alignSelf: 'flex-start',
      fontSize: '12px',
      padding: '20px 0',
    },
    navigation: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '6px'
    },
    navigationButton: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
    }
  })();
};