import { makeStyles } from '@material-ui/core/styles';
import theme from '../../utils/theme';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-arround',
  },
  toolbar: {
    minHeight: '5rem',
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: theme.palette.primary.main,
    padding: '0 1rem',
  },
  media: {
    minHeight: 50,
    width: 150,
    margin: '0 1rem',
  },
});
