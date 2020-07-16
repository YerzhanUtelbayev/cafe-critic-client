import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ListItem = ({
  title, subHeader, image, children,
}) => {
  const classes = useStyles();

  const getAvatarFromString = (string) => string.charAt(0);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={(
          <Avatar aria-label="Title" className={classes.avatar}>
            {getAvatarFromString(title)}
          </Avatar>
        )}
        title={title}
        subheader={subHeader && subHeader}
      />
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  subHeader: PropTypes.node,
};

ListItem.defaultProps = {
  subHeader: null,
};

export default ListItem;
