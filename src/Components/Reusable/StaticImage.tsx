// React Imports
import React, { useState, useEffect } from "react";
import { ImageFolder } from "../../Utils/types";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, CircularProgress, useTheme } from "@material-ui/core";
import {} from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  skeleton: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
}));

interface StaticImageProps {
  name: string;
  type: ImageFolder;
  avatar?: boolean;
  className?: string;
}

const StaticImage: React.FC<StaticImageProps> = ({
  name,
  type,
  avatar,
  className,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const [icon, setIcon] = useState(undefined);

  useEffect(() => {
    import(`../../Images/${type}/${name}/${theme.palette.type}.png`).then(
      (val) => {
        setIcon(val.default);
      }
    );
  }, [theme.palette.type, name, type]);

  return icon ? (
    avatar ? (
      <Avatar className={className} src={icon} alt={name} />
    ) : (
      <img className={className} src={icon} alt={name} />
    )
  ) : (
    <div className={`${classes.loading} ${className}`}>
      <Skeleton variant="rect" className={classes.skeleton} />
      <CircularProgress />
    </div>
  );
};

export default StaticImage;
