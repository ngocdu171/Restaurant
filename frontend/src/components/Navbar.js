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

const Navbar = () => {
  const classes = useStyles();

  const navLinks = [
    { title: "home", path: "/home" },
    { title: "menu", path: "/menu" },
    { title: "contact", path: "/contact" },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="md" className={classes.navDisplayFlex}>
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

export default Navbar;
