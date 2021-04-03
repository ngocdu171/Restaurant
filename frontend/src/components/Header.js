import React from "react";
import {
  AppBar,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar
} from "@material-ui/core";
import { Home } from "@material-ui/icons";

const navLinks = [
  { title: "home", path: "/home" },
  { title: "menu", path: "/menu" },
  { title: "contact", path: "/contact" },
];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
          <IconButton edge="start" aria-label="home">
            <Home fontSize="large" />
          </IconButton>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red'
  },
  navbarDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  linkText: {
      textDecoration: 'none',
      textTransform: 'capitalize',
      color: 'white'
  }
});

export default Header;
