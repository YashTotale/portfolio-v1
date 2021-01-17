// React Imports
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import TooltipBtn from "../Components/Reusable/TooltipBtn";
import StaticImage from "../Components/Reusable/StaticImage";
import { TagProps as TagDataProps } from "../Utils/interfaces";

import Tags from "../Data/Tags.json";

// Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Link,
  Paper,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import Parser from "../Components/Reusable/Parser";

const useStyles = makeStyles((theme) => ({
  tagPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  jumbotron: {
    position: "relative",
    padding: 15,
    width: "100%",
    //Flex
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  tagTitleTooltip: {
    marginTop: 4,
  },
  tagSourceCode: {
    position: "absolute",
    top: theme.spacing(),
    right: theme.spacing(),
  },
  tagImage: {
    margin: 5,
  },
  tagInfo: {
    marginTop: 10,
    //Flex
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "stretch",
  },
  tagDescriptions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 10,
    width: "70%",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  tagDescription: {
    margin: 5,
  },
}));

interface Params {
  id: string;
}

interface TagProps {}

const Tag: FC<TagProps> = ({}) => {
  const classes = useStyles();

  const isSizeSmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  const isSizeXS = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("xs")
  );

  const { id } = useParams<Params>();

  const tag = Tags.find((tag) => tag.url === id) as TagDataProps;

  if (tag) {
    const {
      name,
      icons,
      description,
      sourceLink,
      sourceName,
      sourcecode,
      website,
    } = tag;

    const title = (
      <Typography variant={isSizeSmall ? "h4" : "h3"}>{name}</Typography>
    );

    return (
      <>
        <Helmet>
          <title>{name} - Yash Totale</title>
        </Helmet>
        <div className={classes.tagPage}>
          <Paper className={classes.jumbotron}>
            {sourcecode && (
              <TooltipBtn
                className={classes.tagSourceCode}
                title={`Source Code for ${name}`}
                icon={<GitHub />}
                component="a"
                href={sourcecode}
              />
            )}
            {website ? (
              <Tooltip
                classes={{ tooltip: classes.tagTitleTooltip }}
                title={`View ${name}'s Website`}
              >
                <Link target="_blank" rel="noopener noreferrer" href={website}>
                  {title}
                </Link>
              </Tooltip>
            ) : (
              title
            )}
            <div className={classes.tagInfo}>
              <StaticImage
                width={250}
                xl={300}
                xs={175}
                icons={icons}
                name={name}
                type="Tags"
                className={classes.tagImage}
              />
              {description && (
                <div className={classes.tagDescriptions}>
                  {description.map((desc, i) => (
                    <Parser
                      key={i}
                      paragraphProps={{
                        className: classes.tagDescription,
                        variant: isSizeXS ? "body2" : "body1",
                        align: "center",
                      }}
                      excludedTags={[name]}
                      suffix={
                        <DescriptionSuffix
                          sourceLink={sourceLink?.[i]}
                          sourceName={sourceName?.[i]}
                        />
                      }
                    >
                      {desc}
                    </Parser>
                  ))}
                </div>
              )}
            </div>
          </Paper>
        </div>
      </>
    );
  }
  return null;
};

// interface DescriptionProps {}

// const Description: FC<DescriptionProps> = {};

interface DescriptionSuffixProps {
  sourceLink?: string;
  sourceName?: string;
}

const DescriptionSuffix: FC<DescriptionSuffixProps> = ({
  sourceLink,
  sourceName,
}) => {
  if (!sourceName) return <></>;

  return (
    <>
      {" "}
      (
      <em>
        {sourceLink ? (
          <Link target="_blank" rel="noopener noreferrer" href={sourceLink}>
            {sourceName}
          </Link>
        ) : (
          sourceName
        )}
      </em>
      )
    </>
  );
};

export default Tag;
