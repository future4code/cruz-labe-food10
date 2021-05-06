import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {goToCart} from '../../Coordination/coordinator'
import {useHistory} from "react-router-dom"
function Footer() {
  const history = useHistory()
  return (
      <div>
         <ShoppingCartIcon onClick={()=>goToCart(history)}></ShoppingCartIcon>
      </div>
  )
}

export default Footer;