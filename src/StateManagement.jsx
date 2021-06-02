import React from 'react';
import Button from '@material-ui/core/Button';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import UploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function StateManagement(props) {
  const classes = useStyles();

  const data = btoa(JSON.stringify({
    form: JSON.parse(window.localStorage.getItem('expose_form')),
    items: JSON.parse(window.localStorage.getItem('expose_items')),
  }));

  function foo(ev) {
    const reader = new FileReader();
    reader.readAsText(ev.target.files[0], 'utf-8');
    reader.onload = re => {
      const { form, items } = JSON.parse(re.target.result);
      window.localStorage.setItem('expose_form', JSON.stringify(form));
      window.localStorage.setItem('expose_items', JSON.stringify(items));
      window.location.reload();
    };
  }

  return <>
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      startIcon={<DownloadIcon />}
      href={`data:application/octet-stream;charset=utf-8;base64,${data}`}
      download="expose.json"
    >
      Download Data
    </Button>
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      startIcon={<UploadIcon />}
      component="label"
    >
      Upload Data
      <input
        type="file"
        accept=".json"
        hidden
        onChange={foo}
      />
    </Button>
  </>;
};