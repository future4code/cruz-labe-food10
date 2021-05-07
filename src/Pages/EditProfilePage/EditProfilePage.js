import React, { useEffect, useState } from "react"
import useAuthentication from '../../Hooks/useAuthetication'
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import { Title, Body, TitleContainer, ArrowBack} from './styled'
import { useForm } from "../../Hooks/useForm"
import { useHistory } from "react-router-dom"
import { goToProfilePage } from '../../Coordination/coordinator'
import { TextField, Button } from "@material-ui/core"
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../../constants/themes'
import back from '../../Assets/Img/back.svg'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  label: {
    textTransform: 'capitalize',
    marginTop: 10,
  },
})

const EditProfilePage = () => {
  useAuthentication()
  const classes = useStyles()
  const history = useHistory()
  const [form, onChange, clear, setAll] = useForm({name: "", email: "", cpf: ""})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProfileInfo = () => {
      axios
        .get(`${BASE_URL}/profile`, {
          headers: {
            auth: localStorage.getItem('token')
          }
        })
        .then((res) => {
          console.log('user',res.data.user)
          const obj = res.data.user
          setAll({
            name:obj.name,
            email:obj.email,
            cpf: obj.cpf
          })
          setLoading(false)
        })
        .catch((err) => console.log(err))
    };
    getProfileInfo()
  }, [])


  const onSubmitForm = (event) => {
    event.preventDefault()
    addAddress(form, clear)
  }

   const addAddress = (body) => {
    axios.put(`${BASE_URL}/profile`, body, {
        headers: {
            auth: localStorage.getItem("token")
        }
    })
    .then((res) => {
      alert("Cadastro editado com sucesso!")
      goToProfilePage(history)
    })
    .catch((err) => {
      console.log(err)
        alert("Ocorreu um erro, tente novamente")
    })
}




  return (
    <div>
      <TitleContainer>
        <Title>
          <ArrowBack
            src={back}
            className="back"
            alt={"voltar"}
            onClick={() => history.goBack()}
          />
          Editar
        </Title>
      </TitleContainer>
      <Body>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Nome"}
            variant="outlined"
            fullWidth
            margin={"normal"}
            required
            type={"text"}
            inputProps={{ pattern: "(.*[a-z]){2}" }}
            title={"Digite o nome corretamente"}
            disabled={loading}
          />
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
            inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" }}
            title={"Digite o e-mail corretamente"}
            disabled={loading}
          />
          <TextField
            name={"cpf"}
            value={form.cpf}
            onChange={onChange}
            label={"CPF"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
            inputProps={{
              pattern:
                "([0-9]{2}[.]?[0-9]{3}[.[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.][0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})",
            }}
            title={"Digite o CPF corretamente"}
            disabled={loading}
          />
          <ThemeProvider theme={theme}>
          <Button
            className={classes.label}
            disableElevation
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            margin={"normal"}
          >
            Salvar
          </Button>
          </ThemeProvider>
        </form>
      </Body>
    </div>
  );
};

export default EditProfilePage;