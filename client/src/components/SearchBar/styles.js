import { makeStyles } from '@material-ui/core/styles';
import theme from '../..//utils/theme';

export const useStyles = makeStyles({
  autocomplete: {
    width: 200,
    [theme.breakpoints.up('sm')]: {
      width: 400,
    },
  },
});
