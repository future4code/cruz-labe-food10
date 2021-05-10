import React, { useContext, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Select from "@material-ui/core/Select";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import styled from "styled-components";
import GlobalStateContext from '../Global/GlobalStateContext'
import MyButton from "./buttonStyledMaterial";
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function AlertDialog(props) {
  const [findCart, setFindCart] = useState()
  const { cart, setCart } = useContext(GlobalStateContext);
  const [open, setOpen] = React.useState(false);
  const {selection, setSelection} = useContext(GlobalStateContext)


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (e) => {
    setSelection(e.target.value);
  };

  const handleAddToCart = () => {
    handleClose();
    props.addItemToCart();
  };
  const handleRemove = () =>{
    props.removeItemFromCart();
  }
  const changeButton = () =>{
    const findArray = cart.find(card => card.id === props.id);
    setFindCart(findArray);
  }
  useEffect(()=>{
    changeButton()
  },[cart])
  
  return (
    <div>
      <ButtonContainer>
       { findCart ? (
        <MyButton variant="outlined" color="secondary" onClick={handleRemove}>
        remover
      </MyButton>
       ): (
       <MyButton variant="outlined" color="secondary" onClick={handleClickOpen} add={true}>
       adicionar
     </MyButton>)
       }
      </ButtonContainer>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <ButtonContainer>
          <IconButton edge="start" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </ButtonContainer>

        <DialogTitle id="alert-dialog-title">
          {"Selecione a quantidade desejada"}
        </DialogTitle>

        <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">
              Quantidade
            </InputLabel>
            <Select
              required
              onChange={handleSelect}
              value={selection}
              label="Quantidade"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={13}>13</MenuItem>
              <MenuItem value={14}>14</MenuItem>
              <MenuItem value={15}>15</MenuItem>
            </Select>
          </FormControl>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddToCart} color="secondary" autoFocus>
            ADICIONAR AO CARRINHO
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
