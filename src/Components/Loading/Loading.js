import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  })); 

function Loading() {
    const classes = useStyles();
  return (
      <div>
      <CircularProgress color="secondary" />
      </div>
  )
}

export default Loading;