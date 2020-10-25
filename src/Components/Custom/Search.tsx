// React Imports
import React, { useEffect, useState } from "react";
import { alternativeFont } from "../../Theme";
import Fuse from "fuse.js";
import Projects from "../../Data/Projects.json";
import Experience from "../../Data/Experience.json";
import Tags from "../../Data/Tags.json";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

// Material UI Imports
import { makeStyles, fade } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import {
  ExperienceProps,
  ProjectProps,
  TagProps,
} from "../../Utils/interfaces";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
    //Margin
    marginRight: theme.spacing(1),
    marginLeft: "auto",
    //Background
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  search: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: 170,
      "&:focus": {
        width: 220,
      },
    },
    [theme.breakpoints.up("md")]: {
      width: 220,
      "&:focus": {
        width: 250,
      },
    },
    [theme.breakpoints.up("lg")]: {
      width: 250,
      "&:focus": {
        width: 280,
      },
    },
    padding: theme.spacing(1, 1, 1, 7),
    fontFamily: alternativeFont,
    transition: theme.transitions.create("width"),
  },
}));

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const fuse: [Fuse<ProjectProps>, Fuse<ExperienceProps>, Fuse<TagProps>] = [
    new Fuse(Projects, {
      keys: ["name", "description", "tags"],
      includeMatches: true,
    }),
    new Fuse(Experience, { keys: ["name", "tags"], includeMatches: true }),
    new Fuse(Tags, { keys: ["name"], includeMatches: true }),
  ];

  const [value, setValue] = useState<string>("");

  const [results, setResults] = useState<
    [
      Fuse.FuseResult<ProjectProps>[],
      Fuse.FuseResult<ExperienceProps>[],
      Fuse.FuseResult<TagProps>[]
    ]
  >();

  useEffect(() => {
    const searchedProjects = fuse[0].search(value, { limit: 2 });
    const searchedExperience = fuse[1].search(value, { limit: 2 });
    const searchedTags = fuse[2].search(value, { limit: 2 });
    setResults([searchedProjects, searchedExperience, searchedTags]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  console.log(results);

  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <SearchIcon />
      </div>
      <Input
        disableUnderline
        placeholder="Search..."
        inputProps={{
          "aria-label": "Search...",
        }}
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        // inputRef={inputRef}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </div>
  );
};

export default Search;
