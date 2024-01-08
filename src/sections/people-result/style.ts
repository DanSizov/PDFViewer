import { createUseStyles } from "react-jss"

export const useStyles = () => {
  return createUseStyles({
    peopleContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '24px 12px',
    },
    pageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '18px',
    },
    peopleOnThePage: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '12px'
    },
    peopleHeaderText: {
      alignSelf: 'flex-start',
      fontSize: '12px',
      padding: '20px 0',
    },
    selectedPerson: {
      display: 'flex',
      alignItems: 'flex-start',
      padding: '12px'
    },
    personalDetails: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
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