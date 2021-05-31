import React from 'react';
import CheckInForm from './CheckInForm';
import HistoryList from './HistoryList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: '10px auto 10px auto',
  },
}));

function App() {
  const initialStateString = window.localStorage.getItem('expose_items');
  const initialState = initialStateString
    ? JSON.parse(initialStateString)
    : [];

  const [state, _setState] = React.useState(initialState);

  function setState(newState) {
    if (typeof(newState) === 'function') {
      newState = newState(state);
    }
    window.localStorage.setItem('expose_items', JSON.stringify(newState));
    _setState(newState);
  }

  function addLocation(name, mode) {
    const timestamp = new Date().getTime();
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const location = { latitude: coords.latitude, longitude: coords.longitude };
        switch (mode) {
          case 'checkin':
            setState(state => [ { name, timestamps: [timestamp], locations: [location] }, ...state ]);
            break;
          case 'checkout':
            setState(([curr, ...state]) => [ { name, timestamps: [...curr.timestamps, timestamp], locations: [...curr.locations, location] }, ...state ]);
            break;
        }
      },
      () => {},
      { maximumAge: 0, enableHighAccuracy: true }
    );
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CheckInForm addLocation={addLocation} />
      <HistoryList history={state} />
    </div>
  );
}

export default App;
