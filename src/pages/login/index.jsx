import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

// import LockOutlinedIcon from "@material-ui/";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik, FormikProvider, ErrorMessage, Field } from "formik";
import { login } from "../../service/user";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../redux/action/action";
import { POST_USER_LOGIN } from "../../redux/action/type";
import Loading from "../component/Loading";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    //   backgroundImage: 'url(https://source.unsplash.com/random)',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundColor:
    //     theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const [state, setState] = useState(true);
  let history = useHistory();
  const ticket = useSelector((item) => item.ticketReducer.ticketBooking);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setState(false);
        console.log("state", state);
        let user = await login(values);
        localStorage.setItem("user", JSON.stringify(user.data));
        dispatch(createAction(POST_USER_LOGIN, user.data));
        if (user.data.role === "admin") history.push("/admin");
        else if (ticket.length === 0) history.push("/");
        else history.push("/ticketbooking");
      } catch (error) {
        setState(true);
        alert("tài khoản hoặc mật khẩu không đúng");
        throw error;
      }
    },
  });
  const classes = useStyles();

  return (
    <>
      {state ? (
        <FormikProvider value={formik}>
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                  <TextField
                    type="text"
                    name="userName"
                    values={formik.values.userName}
                    onChange={formik.handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address or UserName"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    type="text"
                    name="password"
                    values={formik.values.password}
                    onChange={formik.handleChange}
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                  />

                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    type="submit"
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link to="/register" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Box mt={5}>{/* <Copyright /> */}</Box>
                </form>
              </div>
            </Grid>
          </Grid>
        </FormikProvider>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
}
