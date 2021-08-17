import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Grid from "@material-ui/core/Grid";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles, Typography, Paper, createTheme, ThemeProvider } from '@material-ui/core';
import Switch from "@material-ui/core/Switch";
  
const useStyles = makeStyles((theme) => ({
  
  // Styling material components
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2),
    },
  },
  media: {
    height: 56,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
  
export default function SmallComponent({ 
        toggleDark, settoggleDark }) {
  const classes = useStyles();
    
  // Trigger toggle using onChange Switch
  const handleModeChange = () => {
    settoggleDark(!toggleDark);
  };
  return (
    
      <Switch
        checked={toggleDark}
        onChange={handleModeChange}
        name="toggleDark"
        color="default"
      />
    
  );
}
