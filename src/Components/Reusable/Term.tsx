// React Imports
import React, { FC, useState } from "react";
import ActionButton from "./ActionButton";
import { TermProps as TermDataProps } from "../../Utils/interfaces";

// Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Link, Paper, Tooltip, Typography } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";

interface StyleProps {}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  tooltip: {
    maxWidth: 250,
    maxHeight: 250,
    padding: 0,
  },
  titleTooltip: {
    marginTop: 4,
  },
  a: {
    color: "inherit",
    textDecorationColor: theme.palette.primary.main,
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
    // justifyContent: "center",
  },
  summary: {},
  expand: {},
}));

interface TermProps extends TermDataProps {
  color?:
    | "initial"
    | "inherit"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "error";
}

const Term: FC<TermProps> = ({ name, summary, summarySource, link, color }) => {
  const classes = useStyles({});

  const [expanded, setExpanded] = useState(false);

  const linkComponent = (
    <Link target="_blank" rel="noopener noreferrer" color={color} href={link}>
      {name}
    </Link>
  );

  const titleComponent = (
    <a
      className={classes.a}
      target="_blank"
      rel="noopener noreferrer"
      href={link}
    >
      <Typography variant="h6">{name}</Typography>
    </a>
  );

  if (!summary) return linkComponent;

  const paragraphs = summary.split("\n").filter((str) => str.length);

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
            {summarySource ? (
              <Tooltip
                classes={{
                  tooltip: classes.titleTooltip,
                }}
                interactive
                title={`View on ${summarySource}`}
              >
                {titleComponent}
              </Tooltip>
            ) : (
              titleComponent
            )}
            {paragraphs.map((p, i) => (
              <Paragraph key={i} index={i} expanded={expanded}>
                {p}
              </Paragraph>
            ))}
            {paragraphs.length > 1 && (
              <ActionButton
                component="btn"
                icon={expanded ? <ExpandLess /> : <ExpandMore />}
                className={classes.expand}
                size="small"
                onClick={() => setExpanded(!expanded)}
              />
            )}
          </Paper>
        </>
      }
    >
      {linkComponent}
    </Tooltip>
  );
};

interface ParagraphStyleProps {
  index: number;
  expanded: boolean;
}

const useParagraphStyles = makeStyles<Theme, ParagraphStyleProps>((theme) => ({
  paragraph: ({ expanded, index }) => ({
    display: index ? (expanded ? "initial" : "none") : "initial",
    margin: "5px 0px",
  }),
}));

interface ParagraphProps {
  index: number;
  expanded: boolean;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, index, expanded }) => {
  const classes = useParagraphStyles({ index, expanded });

  return (
    <Typography className={classes.paragraph} variant="body2">
      {children}
    </Typography>
  );
};

export default Term;
