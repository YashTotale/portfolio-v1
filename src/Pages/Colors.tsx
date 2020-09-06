//React Imports
import React from "react";
import { mainColors, toCssColor } from "../Utils/colors";
import { splitCamelCase } from "../Utils/funcs";

//Redux Imports
import { useSelector } from "react-redux";
import { getPrimaryColor, getSecondaryColor } from "../Redux/selectors";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TextField, capitalize, Tooltip, IconButton } from "@material-ui/core";
import * as colorsObject from "@material-ui/core/colors";

interface styleProps {
  color?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  schemes: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  scheme: {
    margin: "5px",
    width: "208px",
  },
  colorPicker: {
    marginTop: "5px",
  },
  colorBtn: {
    padding: "0px",
    margin: "2px",
  },
  colorInput: {
    top: "0px",
    left: "0px",
    width: "100%",
    cursor: "inherit",
    height: "100%",
    margin: "0px",
    opacity: "0",
    padding: "0px",
    zIndex: 1,
    position: "absolute",
  },
  colorDiv: {
    width: "48px",
    height: "48px",
    backgroundColor: (props: styleProps) => props.color,
  },
}));

const Colors: React.FC = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Customize Website Colors</h1>
      <div className={classes.schemes}>
        <ColorScheme scheme="primary" />
        <ColorScheme scheme="secondary" />
      </div>
    </div>
  );
};

interface ColorSchemeProps {
  scheme: "primary" | "secondary";
}

const ColorScheme: React.FC<ColorSchemeProps> = ({ scheme }) => {
  const classes = useStyles();
  const upperCase = capitalize(scheme);
  const color = useSelector(
    scheme === "primary" ? getPrimaryColor : getSecondaryColor
  );

  return (
    <div className={classes.scheme}>
      <TextField size="medium" label={upperCase} value={color}></TextField>
      <ColorPicker scheme={scheme} colors={mainColors} />
    </div>
  );
};

interface ColorPickerProps {
  colors: Array<string>;
  scheme: "primary" | "secondary";
}

const ColorPicker: React.FC<ColorPickerProps> = ({ colors, scheme }) => {
  const classes = useStyles();

  return (
    <div className={classes.colorPicker}>
      {colors.map((color) => {
        return <ColorBtn scheme={scheme} key={color} color={color}></ColorBtn>;
      })}
    </div>
  );
};

interface ColorBtnProps {
  color: string;
  scheme: "primary" | "secondary";
}

const ColorBtn: React.FC<ColorBtnProps> = ({ color, scheme }) => {
  const cssColor = toCssColor(color);
  //@ts-ignore
  const classes = useStyles({ color: colorsObject[cssColor]["A400"] });

  return (
    <Tooltip title={color}>
      <IconButton className={classes.colorBtn}>
        <input
          className={classes.colorInput}
          name={scheme}
          type="radio"
          value={cssColor}
        ></input>
        <div className={classes.colorDiv}></div>
      </IconButton>
    </Tooltip>
  );
};

export default Colors;
