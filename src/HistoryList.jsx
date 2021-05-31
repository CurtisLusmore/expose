import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
}));

function CheckInEntry({ timestamp, name, location }) {
  function timeString(timestamp) {
    return new Date(timestamp).toLocaleTimeString();
  }

  function locationLink(name, { latitude, longitude }) {
    return <a href={`https://www.google.com/maps/search/${latitude},${longitude}/@${latitude},${longitude},17z`}>{name}</a>;
  }

  return <ListItem key={timestamp}>
    <ListItemText primary={locationLink(name, location)} secondary={timeString(timestamp)} />
  </ListItem>
};

export default function HistoryList({ history }) {
  const days = history.reduce(([prev, ...tail], curr) => {
    const date = new Date(curr.timestamp).toLocaleDateString();
    return prev === undefined
      ? [{ date, items: [curr] }]
      : prev.date !== date
      ? [{ date, items: [curr] }, prev, ...tail]
      : [{ date, items: [curr, ...prev.items] }, ...tail];
  }, []);

  const classes = useStyles();

  function CheckInDay({ date, items }) {
    return <span key={`span-${date}`}>
      <Divider component="li" key={`divider-${date}`} />
      <li key={`subhead-${date}`}>
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
        >
          {date}
        </Typography>
      </li>
      {items.map(CheckInEntry)}
    </span>;
  };

  return <List
      className={classes.root}
      subheader={
        <ListSubheader component="div">
          Location History
        </ListSubheader>
      }
    >
    {days.map(CheckInDay)}
  </List>;
};