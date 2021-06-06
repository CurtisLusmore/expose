import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
}));



function CheckInEntry({ name, timestamps, locations }) {
  function timeString(timestamps) {
    const time1 = moment(timestamps[0]).format('hh:mmA');
    if (timestamps.length === 1) {
      return time1;
    }
    else {
      const time2 = moment(timestamps[0]).format('DD/MM/YYYY') === moment(timestamps[1]).format('DD/MM/YYYY')
        ? moment(timestamps[1]).format('hh:mmA')
        : moment(timestamps[1]).format('DD/MM/YYYY hh:mmA')
      return `${time1} - ${time2}`;
    }
  }

  function locationLink(name, locations) {
    if (locations.length === 1) {
      const { latitude, longitude } = locations[0];
      return <a href={`https://www.google.com/maps/search/${latitude},${longitude}/@${latitude},${longitude},17z`}>{name}</a>;
    }
    else {
      const [
        { latitude: latitude1, longitude: longitude1 },
        { latitude: latitude2, longitude: longitude2 }
      ] = locations;
      return <a href={`https://www.google.com/maps/dir///@${latitude2},${longitude2},17z/data=!3m1!4b1!4m10!4m9!1m3!2m2!1d${longitude1}!2d${latitude1}!1m3!2m2!1d${longitude2}!2d${latitude2}!3e2`}>{name}</a>;
    }
  }

  return <ListItem key={timestamps[0]}>
    <ListItemText primary={locationLink(name, locations)} secondary={timeString(timestamps)} />
  </ListItem>
};

export default function HistoryList({ history }) {
  const days = history.reduce((full, curr) => {
    const date = moment(curr.timestamps[0]).format('DD/MM/YYYY');
    const prev = full[full.length-1];
    const rest = full.slice(0, full.length-1);
    return prev === undefined
      ? [{ date, items: [curr] }]
      : prev.date !== date
      ? [...full, { date, items: [curr] }]
      : [...rest, { date, items: [...prev.items, curr] }];
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