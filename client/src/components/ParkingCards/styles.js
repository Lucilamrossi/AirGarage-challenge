import { makeStyles } from '@material-ui/core/styles';
import theme from '../../utils/theme';

import notFoundImage from '../../utils/img/empty-parking.jpg';

export const useStyles = makeStyles({
  root: {
    [theme.breakpoints.up('lg')]: {
      padding: '1rem 8rem',
    },
  },
  pagination: {
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: '.7rem',
    padding: '.5rem',
    margin: '0.5rem 1rem',
    border: '0.7px solid rgba(250, 130, 76, 0.5)',
  },
  paginationContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: '1rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  notFound: {
    backgroundImage: `url(${notFoundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '300px',
    border: `1px solid ${theme.palette.primary.main}`,
    padding: 0,
  },
  filter: {
    width: '100%',
    height: '300px',
    backgroundColor: 'rgba(255, 238, 204, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundText: {
    fontSize: '2rem',
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: theme.palette.primary.contrastText,
    width: 'fit-content',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '.7rem',
    display: 'grid',
    color: theme.palette.primary.dark,
    fontWeight: '500',
  },
});
