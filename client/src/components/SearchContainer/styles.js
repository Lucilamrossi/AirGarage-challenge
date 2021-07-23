import { makeStyles } from '@material-ui/core/styles';
import theme from '../..//utils/theme';

import Image from '../../utils/img/backgroud-texture.png';

export const useStyles = makeStyles({
  root: {
    minHeight: 200,
    backgroundImage: `url(${Image})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '.7rem',
    padding: '2rem',
    backgroundColor: theme.palette.primary.contrastText,
    transition: '.5s ease',
    '&:hover': {
      boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.4)',
      webkitBoxShadow: ' 0px 0px 30px 0px rgba(0,0,0,0.4)',
      mozBoxShadow: ' 0px 0px 30px 0px rgba(0,0,0,0.4)',
    },
  },
  searchTitle: {
    fontSize: '2rem',
    paddingBottom: '2rem',
    color: theme.palette.primary.main,
    textAlign: 'center',
  },
});
