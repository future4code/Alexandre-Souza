import axios from 'axios'
import React, { useState } from 'react';

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/core/icons/LockOutlinedIcon';
import { baseUrl } from '../constants';


const  LoginPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUpdateEmail = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    }

    const handleUpdatePassword = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
    }

    const handleLogin = async () => {
        const body = {
            email: email,
            password: password,
        }

        const response = await axios.post(`${baseUrl}/login`);

        localStorage.setItem("token", response.data.token);
    }

return (
    <Container component="main" maxWidth="xs">
       <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Entrar!
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleUpdateEmail}
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleUpdatePassword}
            value={password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Não tem conta? Cadastre-se"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
 )
}

export default LoginPage;