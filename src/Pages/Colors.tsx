//React Imports
import React from "react";
import { mainColors, toCssColor, shades } from "../Utils/colors";
import { stringToInteger } from "../Utils/funcs";

//Redux Imports
import { useSelector, useDispatch } from "react-redux";
import {
  getPrimaryColor,
  getSecondaryColor,
  getPrimaryShade,
  getSecondaryShade,
} from "../Redux/selectors";
import { changeShade } from "../Redux/actions";

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
  },
  slider: {
    margin: "0px 10px",
    flexGrow: 1,
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
  reset: {
    alignSelf: "center",
    justifySelf: "center",
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
  const dispatch = useDispatch();
  const upperCase = capitalize(scheme);
  const color = useSelector(
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
      <TextField size="medium" label={upperCase} value={color}></TextField>
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
      <ColorPicker shade={shade} scheme={scheme} colors={mainColors} />
    </div>
  );
};

interface ColorPickerProps {
  colors: Array<string>;
  scheme: "primary" | "secondary";
  shade: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ colors, scheme, shade }) => {
  const classes = useStyles();

  return (
    <div className={classes.colorPicker}>
      {colors.map((color) => {
        return (
          <ColorBtn
            shade={shade}
            scheme={scheme}
            key={color}
            color={color}
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
}

const ColorBtn: React.FC<ColorBtnProps> = ({ color, scheme, shade }) => {
  const cssColor = toCssColor(color);
  //@ts-ignore
  const classes = useStyles({ color: colorsObject[cssColor][shade] });

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
