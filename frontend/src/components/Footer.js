/*eslint-disable*/
import React, { useState } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// material-ui core components
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

const Footer = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);

    const classes = useStyles();

    return (
      <Grid container spacing={2} maxWidth="sm" className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={10}>
          <Grid item>
            <Paper>Logo</Paper>
          </Grid>
          <Grid item>
            <Paper>
            <Typography variant="subtitle1">
            ADDRESS
            </Typography>
            <Typography variant="body2">
            Karhuojantie 2 90460 Oulunsalo
            </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
            <Typography variant="subtitle1">
            OPENING HOUR
            </Typography>
            <Typography variant="body2">
            Ma: 10am - 16pm
            </Typography>
            <Typography variant="body2">
            Ti - Pe: 10am - 19pm
            </Typography>
            <Typography variant="body2">
            La: 11am - 18am
            </Typography>
            <Typography variant="body2">
            Su: 12am - 18am
            </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
            <Typography variant="subtitle1">
            CONTACT
            </Typography>
            <Typography variant="body2">
            08333857
            </Typography>
            <Typography variant="body2">
            oulunsalolittledragon@gmail.com
            </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
        <Grid item xs={12}>
        <Typography>
            @ Copyright {new Date().getDate() + '/' + month + '/' +new Date().getFullYear()}, create by BrotherD
        </Typography>
        </Grid>
      </Grid>
    )
}

Footer.propTypes = {
    whiteFont: PropTypes.bool
  };

  const useStyles = makeStyles({
    root: {
        backgroundColor: "#B22222"
      },
  });

export default Footer