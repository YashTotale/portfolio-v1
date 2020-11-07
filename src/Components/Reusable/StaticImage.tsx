// React Imports
import React, { useState, useEffect } from "react";
import { ImageFolder } from "../../Utils/types";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, useTheme } from "@material-ui/core";
import {} from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";
import Image from "./Image";

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
  icons: string[];
  avatar?: boolean;
  className?: string;
  ratio?: number;
  width?: number;
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
}

const StaticImage: React.FC<StaticImageProps> = ({
  name,
  type,
  icons,
  avatar,
  className,
  ratio,
  width,
  xs,
  sm,
  md,
  lg,
  xl,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const [icon, setIcon] = useState<string | undefined>(undefined);

  useEffect(() => {
    let mounted = true;
    const getImage = async () => {
      try {
        const val = await import(
          `../../Images/${type}/${name}/${theme.palette.type}.png`
        );
        if (mounted) setIcon(val.default);
      } catch (e) {
        if (mounted) setIcon(icons[theme.palette.type === "light" ? 0 : 1]);
      }
    };
    getImage();

    return () => {
      mounted = false;
    };
  }, [theme.palette.type, name, type, icons]);

  return icon ? (
    <Image
      className={className}
      src={icon}
      alt={name}
      avatar={avatar}
      ratio={ratio}
      width={width}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    />
  ) : (
    <div className={`${classes.loading} ${className}`}>
      <Skeleton variant="rect" className={classes.skeleton} />
      <CircularProgress />
    </div>
  );
};

export default StaticImage;
