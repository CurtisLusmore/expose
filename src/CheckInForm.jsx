import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > *': {
      margin: theme.spacing(1),
    },
    '& .MuiTextField-root': {
      width: '100%',
    }
  },
}));

export default function CheckInForm({ addLocation }) {
  const initialStateString = window.localStorage.getItem('expose_form');
  const initialState = initialStateString
    ? JSON.parse(initialStateString)
    : { name: '', mode: 'checkin' };

  const [state, _setState] = React.useState(initialState);

  function setState(newState) {
    if (typeof(newState) === 'function') {
      newState = newState(state);
    }
    window.localStorage.setItem('expose_form', JSON.stringify(newState));
    _setState(newState);
  }

  function changeName(ev) {
    setState(state => ({ ...state, name: ev.target.value }));
  }

  function checkIn(ev) {
    ev.preventDefault();
    addLocation(state.name, 'checkin');
    setState(state => ({ ...state, mode: 'checkout' }));
    return false;
  }

  function checkOut(ev) {
    ev.preventDefault();
    addLocation(state.name, 'checkout');
    setState(state => ({ ...state, name: '', mode: 'checkin' }));
    return false;
  }

  const classes = useStyles();

  switch (state.mode) {
    case 'checkin':
      return <form className={classes.root} onSubmit={checkIn}>
        <TextField
          required
          label="Location Name"
          name="name"
          value={state.name}
          onChange={changeName}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Check In
        </Button>
      </form>;
    case 'checkout':
      return <form className={classes.root} onSubmit={checkOut}>
        <TextField
          required
          label="Location Name"
          name="name"
          value={state.name}
          disabled={true}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Check Out
        </Button>
      </form>;
    default:
      throw new Error(`Unknown mode ${state.mode}`);
  }
};