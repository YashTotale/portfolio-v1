//React Imports
import React from "react";
import {
  mainColors,
  toCssColor,
  shades,
  defaultColors,
  defaultShades,
} from "../Utils/colors";
import { stringToInteger } from "../Utils/funcs";

//Redux Imports
import { useSelector, useDispatch } from "react-redux";
import {
  getPrimaryColor,
  getSecondaryColor,
  getPrimaryShade,
  getSecondaryShade,
} from "../Redux/selectors";
import { changeShade, changeColors } from "../Redux/actions";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  TextField,
  capitalize,
  Tooltip,
  IconButton,
  Slider,
  Typography,
  Button,
} from "@material-ui/core";
import * as colorsObject from "@material-ui/core/colors";

interface styleProps {
  isCurrentColor?: boolean;
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
    margin: "0px 20px",
    width: "220px",
  },
  sliderDiv: {
    display: "flex",
    marginTop: "10px",
  },
  slider: {
    margin: "0px 10px",
    flexGrow: 1,
  },
  colorPicker: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "20px 0px",
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
    border: ({ isCurrentColor }: styleProps) =>
      isCurrentColor
        ? `4px solid ${theme.palette.type === "dark" ? "white" : "black"}`
        : "none",
    backgroundColor: ({ color }: styleProps) => color,
  },
  resetDiv: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
}));

const Colors: React.FC = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(changeColors("primary", defaultColors["primary"]));
    dispatch(changeColors("secondary", defaultColors["secondary"]));
    dispatch(changeShade("primary", defaultShades["primary"]));
    dispatch(changeShade("secondary", defaultShades["secondary"]));
  };

  return (
    <div className={classes.root}>
      <h1>Customize Website Colors</h1>
      <div className={classes.schemes}>
        <ColorScheme scheme="primary" />
        <ColorScheme scheme="secondary" />
      </div>
      <div className={classes.resetDiv}>
        <Button onClick={handleReset} variant="contained" color="secondary">
          Reset Default Colors
        </Button>
      </div>
    </div>
  );
};

interface ColorSchemeProps {
  scheme: "primary" | "secondary";
}

const ColorScheme: React.FC<ColorSchemeProps> = ({ scheme }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const upperCase = capitalize(scheme);
  const currentColor = useSelector(
    scheme === "primary" ? getPrimaryColor : getSecondaryColor
  );
  const shade = useSelector(
    scheme === "primary" ? getPrimaryShade : getSecondaryShade
  );

  const handleSlide = (e: React.ChangeEvent<{}>, index: number | number[]) => {
    const i = typeof index === "number" ? index : index[0];
    dispatch(changeShade(scheme, shades[i]));
  };

  return (
    <div className={classes.scheme}>
      <TextField
        size="medium"
        label={upperCase}
        //@ts-ignore
        value={colorsObject[currentColor][shade]}
      ></TextField>
      <div className={classes.sliderDiv}>
        <Typography id="shade">Shade: </Typography>
        <Slider
          className={classes.slider}
          aria-labelledby="shade"
          value={shades.indexOf(shade)}
          min={0}
          max={shades.length - 1}
          onChange={handleSlide}
        />
        <Typography>{shade}</Typography>
      </div>
      <ColorPicker
        currentColor={currentColor}
        shade={shade}
        scheme={scheme}
        colors={mainColors}
      />
    </div>
  );
};

interface ColorPickerProps {
  colors: Array<string>;
  scheme: "primary" | "secondary";
  shade: string;
  currentColor: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  scheme,
  shade,
  currentColor,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.colorPicker}>
      {colors.map((color) => {
        return (
          <ColorBtn
            key={color}
            shade={shade}
            scheme={scheme}
            color={color}
            currentColor={currentColor}
          ></ColorBtn>
        );
      })}
    </div>
  );
};

interface ColorBtnProps {
  color: string;
  scheme: "primary" | "secondary";
  shade: string;
  currentColor: string;
}

const ColorBtn: React.FC<ColorBtnProps> = ({
  color,
  scheme,
  shade,
  currentColor,
}) => {
  const dispatch = useDispatch();
  const cssColor = toCssColor(color);

  //@ts-ignore
  const colorHex = colorsObject[cssColor][shade];
  const classes = useStyles({
    color: colorHex,
    isCurrentColor: cssColor === currentColor,
  });

  const handleClick = () => {
    dispatch(changeColors(scheme, cssColor));
  };

  return (
    <Tooltip title={color}>
      <IconButton onClick={handleClick} className={classes.colorBtn}>
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
