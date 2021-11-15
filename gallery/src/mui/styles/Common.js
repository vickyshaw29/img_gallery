import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

export default makeStyles((theme) => ({
  toolBar: {
    minHeight: '52.5px !important',
  },
  item: {
    marginBottom: '1.5rem !important',
  },
  typo: {
    fontFamily: 'Arizonia !important',
    fontSize: '26px !important',
    color: `${theme.palette.primary.main} !important`,
  },
  toolbarMargin: {
    marginBottom: '3.1rem',
  },
  appBar: {
    backgroundColor: '#fff !important',
  },
  tabs: {
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
  tabContainer: {
    marginRight: 'auto',
    marginLeft: '6px !important',
  },
  tab: {
    minWidth: 10,
    marginLeft: '3px',
    textTransform: 'none !important',
    fontSize: '1rem !important',
  },
  title: {
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem !important',
    },
  },
  //   card
  cardContainer: {
    width: '100%',
    minWidth: '25rem',
    minHeight: '17rem',
    [theme.breakpoints.down('md')]: {
      minWidth: '100%',
    },
  },
  rootMedia: {
    height: '12rem',
  },
  // layout
  layoutContainer: {
    minHeight: '24rem',
    backgroundImage: `url(${'https://source.unsplash.com/daily'})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    objectFit: 'cover',
    opacity: 0.9,
    filter: 'brightness(70%)',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.85),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.95),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '50ch',
        '&:focus': {
          width: '80ch',
        },
      },
    },
  },
  imageContainer: {
    marginTop: '1rem',
    padding: 50,
    [theme.breakpoints.down('sm')]: {
      padding: 10,
    },
  },
  // image
  imageDialogue: {
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    objectFit: 'cover',
  },
  iconBtn: {
    position: 'absolute !important',
    color: '#fff !important',
    backgroundColor: 'black !important',
    bottom: '0px !important',
  },
}));
