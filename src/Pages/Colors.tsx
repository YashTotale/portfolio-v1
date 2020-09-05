//React Imports
import React from "react";

//Redux Imports
import { useSelector } from "react-redux";
import { getPrimaryColor, getSecondaryColor } from "../Redux/selectors";

//Material UI Imports
import { makeStyles, Theme, ColorObject } from "@material-ui/core/styles";
import { TextField, capitalize } from "@material-ui/core";
import * as colorsObject from "@material-ui/core/colors";
import { splitCamelCase } from "../Utils/funcs";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  schemes: {
    display: "flex",
  },
  scheme: {
    margin: "5px",
  },
  colorPicker: {
    marginTop: "5px",
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
      <ColorPicker colors={Object.keys(colorsObject)} />
    </div>
  );
};

interface ColorPickerProps {
  colors: Array<string>;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ colors }) => {
  const classes = useStyles();

  return (
    <div className={classes.colorPicker}>
      {colors.map((color) => {
        return <ColorBtn key={color} color={color}></ColorBtn>;
      })}
    </div>
  );
};

interface ColorBtnProps {
  color: string;
}

const ColorBtn: React.FC<ColorBtnProps> = ({ color }) => {
  const readableName = splitCamelCase(color, true);
  return <div>{readableName}</div>;
};

export default Colors;
