import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Button,
  CardActions,
  IconButton,
} from '@material-ui/core';
import DetailsIcon from '@material-ui/icons/Details';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    cursor: 'pointer',
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
  title, subHeader, image, children, handleProceed,
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
        title={(
          <Button color="primary" onClick={handleProceed}>{title}</Button>
        )}
        subheader={subHeader && subHeader}
      />
      <CardMedia className={classes.media} image={image} title={title} onClick={handleProceed} />
      <CardContent>{children}</CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="view details" onClick={handleProceed}>
          <DetailsIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  handleProceed: PropTypes.func.isRequired,
  subHeader: PropTypes.node,
};

ListItem.defaultProps = {
  subHeader: null,
};

export default ListItem;
