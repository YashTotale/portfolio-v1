//React Imports
import React from "react";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) => ({
  loadingSkeleton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "50px 0px",
  },
  rectSkeleton: {
    width: "60%",
    height: 0,
    paddingBottom: "20%",
  },
  textSkeleton: {
    width: "60%",
    margin: "10px 0px",
  },
}));

const Loading: React.FC = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.loadingSkeleton}>
      <Skeleton className={classes.rectSkeleton} variant="rect"></Skeleton>
      {[...Array(5)].map((x, i) => (
        <Skeleton
          key={i}
          className={classes.textSkeleton}
          variant="text"
        ></Skeleton>
      ))}
    </div>
  );
};

export default Loading;
