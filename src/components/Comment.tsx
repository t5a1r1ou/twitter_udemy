import React from "react";
import { Avatar } from "@material-ui/core";
import styles from "./Comment.module.css";
import { makeStyles } from "@material-ui/core/styles";

interface Com {
  avatar: string;
  username: string;
  text: string;
  timestamp: any;
}

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
}));

const Comment: React.VFC<Com> = ({ avatar, username, text, timestamp }) => {
  const classes = useStyles();
  return (
    <div className={styles.comment}>
      <Avatar src={avatar} className={classes.small} />
      <span className={styles.comment_user}>@{username}</span>
      <span className={styles.comment_text}>{text}</span>
      <span className={styles.comment_headerTime}>
        {new Date(timestamp?.toDate()).toLocaleString()}
      </span>
    </div>
  );
};

export default Comment;
