//React Imports
import React from "react";
import { Helmet } from "react-helmet";
import {
  colors,
  toCssColor,
  shades,
  scheme,
  shade,
  schemes,
  cssColor,
  color,
  getMuiColor,
  getTextColor,
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
  changeColorWMessage,
  changeShadeWMessage,
  resetColors,
} from "../Redux/thunks";

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
import { Check } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    margin: "15px 0px",
    textAlign: "center",
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
  resetDiv: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginBottom: "10px",
  },
}));

const Colors: React.FC = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Colors - Yash Totale</title>
      </Helmet>
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
          <Button
            onClick={() => dispatch(resetColors())}
            variant="contained"
            color="secondary"
          >
            Reset Default Colors
          </Button>
        </div>
      </div>
    </>
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
  const shade: shade = useSelector(
    scheme === "primary" ? getPrimaryShade : getSecondaryShade
  );

  const handleSlide = (e: React.ChangeEvent<{}>, index: number | number[]) => {
    const i = typeof index === "number" ? index : index[0];
    dispatch(changeShadeWMessage(scheme, shades[i]));
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
      <ColorPicker currentColor={currentColor} shade={shade} scheme={scheme} />
    </div>
  );
};

interface ColorPickerProps {
  scheme: scheme;
  shade: shade;
  currentColor: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
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

interface ColorBtnStyleProps {
  isCurrentColor: boolean;
  color: string;
}

const useColorBtnStyles = makeStyles<Theme, ColorBtnStyleProps>((theme) => {
  const white = theme.palette.common.white;
  const black = theme.palette.common.black;
  return {
    radio: {
      padding: "0px",
      margin: "2px",
    },
    radioIcon: {
      width: 48,
      height: 48,
      backgroundColor: ({ color }) => color,
    },
    radioIconSelected: {
      border: ({ isCurrentColor }) =>
        isCurrentColor
          ? `4px solid ${theme.palette.type === "dark" ? white : black}`
          : "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    checkIcon: {
      fontSize: 30,
      color: ({ color }) => getTextColor(theme, color),
    },
  };
});

interface ColorBtnProps {
  color: color;
  scheme: scheme;
  shade: shade;
  currentColor: string;
}

const ColorBtn: React.FC<ColorBtnProps> = ({
  color,
  scheme,
  shade,
  currentColor,
}) => {
  const dispatch = useDispatch();
  const cssColor = toCssColor(color) as cssColor;

  const colorHex = getMuiColor(cssColor, shade);
  const classes = useColorBtnStyles({
    color: colorHex,
    isCurrentColor: cssColor === currentColor,
  });

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeColorWMessage(scheme, cssColor));
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
