// React Imports
import React, { FC } from "react";
import StyledLink from "../StyledLink";
import { TagProps } from "../../../Utils/interfaces";

// Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles/";
import { Paper, Tooltip, Typography } from "@material-ui/core";
import {} from "@material-ui/icons";
import Parser from "../Parser";
import StaticImage from "../StaticImage";

interface StyleProps {
  color?: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  tooltip: {
    maxWidth: 250,
    maxHeight: 250,
    padding: 0,
  },
  titleTooltip: {
    marginTop: 4,
  },
  image: {
    margin: "5px 0px",
  },
  paper: {
    maxWidth: 250,
    maxHeight: 250,
    padding: 10,
    overflow: "scroll",
    //Flex
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: ({ color }) => ({
    color: "inherit",
    textDecorationColor:
      theme.palette[color === "secondary" ? "secondary" : "primary"].main,
  }),
  description: {
    maxWidth: 250,
    margin: "5px 0px",
    wordBreak: "break-word",
  },
}));

interface PreviewProps {
  color?:
    | "initial"
    | "inherit"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "error";
}

const Preview: FC<PreviewProps & TagProps> = ({
  color,
  url,
  name,
  description,
  icons,
}) => {
  const classes = useStyles({ color });

  const linkComponent = (
    <StyledLink color={color} to={`/tags/${url}`}>
      {name}
    </StyledLink>
  );

  if (!description) return linkComponent;

  return (
    <Tooltip
      interactive
      classes={{
        tooltip: classes.tooltip,
      }}
      key={name}
      title={
        <>
          <Paper elevation={20} className={classes.paper}>
            <StaticImage
              icons={icons}
              type="Tags"
              name={name}
              width={60}
              className={classes.image}
            ></StaticImage>
            <Tooltip
              title={`View ${name}'s Page`}
              interactive
              classes={{ tooltip: classes.titleTooltip }}
            >
              <StyledLink to={`/tags/${url}`} className={classes.title}>
                <Typography variant="h6">{name}</Typography>
              </StyledLink>
            </Tooltip>
            {description.map((d) => (
              <Parser
                paragraphProps={{
                  className: classes.description,
                  variant: "body2",
                }}
                noAddedLinks
              >
                {d}
              </Parser>
            ))}
          </Paper>
        </>
      }
    >
      {linkComponent}
    </Tooltip>
  );
};

export default Preview;
