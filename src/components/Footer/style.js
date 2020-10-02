import { container, primaryColor, hoverColor } from 'assets/jss/material-kit-pro-react.js';

const footerStyle = theme => ({
  container: {
    ...container,
    width: '100%',
    padding: '3rem 0',
    display: 'flex',
    justifyContent: 'center',
  },
  socialIcons: {
    margin: '0 15px',
    fontSize: '2.25rem',
    '& > path': {
      color: primaryColor[0],
    },
    '&:hover': {
      '& > path': {
        color: hoverColor[0],
      },
    },
  },
});

export default footerStyle;