import React from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import {
  goToCart,
  goToFeedPage,
  goToProfilePage,
} from "../../Coordination/coordinator";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const useStyles = makeStyles({
  root: {
    width: 350,
    position:'fixed',
    bottom:0,
  },
});

function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const history = useHistory();
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        icon={<HomeOutlinedIcon onClick={() => goToFeedPage(history)} />}
      />
      <BottomNavigationAction
        icon={<ShoppingCartOutlinedIcon onClick={() => goToCart(history)} />}
      />
      <BottomNavigationAction
        icon={
          <PersonOutlineOutlinedIcon onClick={() => goToProfilePage(history)} />
        }
      />
    </BottomNavigation>
  );
}

export default Footer;
