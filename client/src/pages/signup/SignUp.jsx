import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const SignUp = () => {
    const selector = useSelector(state=>state.userInfo.userInfo)
    console.log(selector)
    const navigate = useNavigate()
    const [userDetail, setUserDetail] = React.useState({
        username: "",
        email: "",
        password: "",
        repassword: ""
    })
    const changeHandeler = (e) => {
        setUserDetail({ ...userDetail, [e.target.name]: e.target.value })
    }

    const signUpHandeler = () => {
        if (userDetail.password !== userDetail.repassword) {
           alert("Password mismatched")
        } else {
            axios.post("http://localhost:4000/auth/register", userDetail).then((response) => {
                console.log(response.data)
                navigate('/login')
                setUserDetail({
                    username: "",
                    email: "",
                    password: "",
                    repassword: ""
                })
                alert("You can log in your account. your account is created")
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="username"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="User Name"
                                    autoFocus
                                    onChange={changeHandeler}
                                    value={userDetail.username}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={changeHandeler}
                                    value={userDetail.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={changeHandeler}
                                    value={userDetail.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="repassword"
                                    label="Re-password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={changeHandeler}
                                    value={userDetail.repassword}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={signUpHandeler}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item onClick={()=>navigate('/login')}>
                                <Link href="#" variant="body2" >
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}

export default SignUp;