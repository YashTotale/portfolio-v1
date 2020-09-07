//React Imports
import React from "react";
import {
  mainColors,
  toCssColor,
  shades,
  defaultColors,
  defaultShades,
} from "../Utils/colors";

//Redux Imports
import { useSelector, useDispatch } from "react-redux";
import {
  getPrimaryColor,
  getSecondaryColor,
  getPrimaryShade,
  getSecondaryShade,
} from "../Redux/selectors";
import {
  changeShade,
  changeColors,
  setSnackbarMessage,
} from "../Redux/actions";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  capitalize,
  Tooltip,
  Slider,
  Typography,
  Button,
  Radio,
} from "@material-ui/core";
import * as colorsObject from "@material-ui/core/colors";
import { Check } from "@material-ui/icons";

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
  header: {
    margin: "15px 0px",
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
  schemeTitle: {
    textAlign: "center",
  },
  sliderDiv: {
    display: "flex",
    marginTop: "10px",
  },
  slider: {
    margin: "0px 10px",
  },
  colorPicker: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "20px 0px",
  },
  radio: {
    padding: "0px",
    margin: "2px",
  },
  radioIcon: {
    width: 48,
    height: 48,
    backgroundColor: ({ color }: styleProps) => color,
  },
  radioIconSelected: {
    border: ({ isCurrentColor }: styleProps) =>
      isCurrentColor
        ? `4px solid ${
            theme.palette.type === "dark"
              ? theme.palette.common.white
              : theme.palette.common.black
          }`
        : "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    fontSize: 30,
    color:
      theme.palette.type === "dark"
        ? theme.palette.common.white
        : theme.palette.common.black,
  },
  resetDiv: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
}));

type scheme = "primary" | "secondary";

const Colors: React.FC = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const schemes: scheme[] = ["primary", "secondary"];
  const handleReset = () => {
    schemes.map((scheme: scheme) => {
      dispatch(changeColors(scheme, defaultColors[scheme]));
      dispatch(changeShade(scheme, defaultShades[scheme]));
      dispatch(setSnackbarMessage("Colors have been reset", "success"));
    });
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant="h4">
        Customize Website Colors
      </Typography>
      <div className={classes.schemes}>
        {schemes.map((scheme) => (
          <ColorScheme key={scheme} scheme={scheme} />
        ))}
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
  scheme: scheme;
}

const ColorScheme: React.FC<ColorSchemeProps> = ({ scheme }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const upperCaseScheme = capitalize(scheme);
  const currentColor = useSelector(
    scheme === "primary" ? getPrimaryColor : getSecondaryColor
  );
  const shade = useSelector(
    scheme === "primary" ? getPrimaryShade : getSecondaryShade
  );

  const handleSlide = (e: React.ChangeEvent<{}>, index: number | number[]) => {
    const i = typeof index === "number" ? index : index[0];
    dispatch(changeShade(scheme, shades[i]));
    dispatch(
      setSnackbarMessage(
        `${upperCaseScheme} Shade is now ${shades[i]}`,
        "success"
      )
    );
  };

  return (
    <div className={classes.scheme}>
      <Typography className={classes.schemeTitle} variant="h6">
        {upperCaseScheme}
      </Typography>
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
        upperCaseScheme={upperCaseScheme}
      />
    </div>
  );
};

interface ColorPickerProps {
  colors: Array<string>;
  scheme: scheme;
  shade: string;
  currentColor: string;
  upperCaseScheme: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  scheme,
  shade,
  currentColor,
  upperCaseScheme,
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
            upperCaseScheme={upperCaseScheme}
          ></ColorBtn>
        );
      })}
    </div>
  );
};

interface ColorBtnProps {
  color: string;
  scheme: scheme;
  shade: string;
  currentColor: string;
  upperCaseScheme: string;
}

const ColorBtn: React.FC<ColorBtnProps> = ({
  color,
  scheme,
  shade,
  currentColor,
  upperCaseScheme,
}) => {
  const dispatch = useDispatch();
  const cssColor = toCssColor(color);

  //@ts-ignore
  const colorHex = colorsObject[cssColor][shade];
  const classes = useStyles({
    color: colorHex,
    isCurrentColor: cssColor === currentColor,
  });

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeColors(scheme, event.target.value));
    dispatch(
      setSnackbarMessage(`${upperCaseScheme} Color is now ${color}`, "success")
    );
  };

  return (
    <Tooltip title={color}>
      <Radio
        className={classes.radio}
        color="default"
        checked={cssColor === currentColor}
        onChange={handleClick}
        value={cssColor}
        name={scheme}
        icon={<div className={classes.radioIcon} />}
        checkedIcon={
          <div className={`${classes.radioIcon} ${classes.radioIconSelected}`}>
            <Check className={classes.checkIcon} />
          </div>
        }
      />
    </Tooltip>
  );
};

export default Colors;
