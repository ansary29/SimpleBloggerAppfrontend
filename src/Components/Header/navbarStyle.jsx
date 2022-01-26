import { makeStyles } from "@material-ui/core";

export const NavbarStyle = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    backgroundColor:"#00FF7F",
  },
  link: {
    textDecoration: "none",
  },
  title: {
    marginLeft: theme.spacing(1),
    lineHeight: "48px",
    color: "black",
    textDecoration: "none",
    
  },
  button: {
    backgroundColor:"black",
  

  },
}));
