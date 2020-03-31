import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#456e82"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  list: {
    listStyleType: "none",
    textAlign: "left",
    paddingLeft: "12px",
    color: "white"
  },
  main: {
    textAlign: 'left',
    color: "white"
  },
  time: {
    textAlign: 'left',
    paddingLeft: "12px",
    color: "white"
  }
});

export default function CVCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const listItems = props.bullets.map(bullet =>
    <li key={bullet.num} style={{ paddingBottom: "5px" }}> {bullet.descript} </li>
  )

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="h6" className={classes.main}>
          {bull}{props.main}
        </Typography>
        <Typography  color="textSecondary" className={classes.time}>
          {props.time}
        </Typography>
        <Typography variant="body2" component="p">
          <ul className={classes.list}>
            {listItems}
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}
