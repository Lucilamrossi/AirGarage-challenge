import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../utils/theme';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '31rem',
    minHeight: '360px',
    border: `0.6px solid ${theme.palette.primary.main}`,
    borderRadius: '.7rem',
    transition: '.5s ease',
    '&:hover': {
      boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.4)',
      webkitBoxShadow: ' 0px 0px 30px 0px rgba(0,0,0,0.4)',
      mozBoxShadow: ' 0px 0px 30px 0px rgba(0,0,0,0.4)',
    },
    [theme.breakpoints.up('md')]: {
      ['@media (max-width:1100px)']: {// eslint-disable-line no-useless-computed-key
        width: '26rem',
      },
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  media: {
    height: 140,
    borderBottom: `1px solid ${theme.palette.primary.light}`,
  },
  btnContainer: {
    borderTop: `1px solid ${theme.palette.primary.light}`,
    justifyContent: 'flex-end',
    paddingRight: '1rem',
  },
});
