import React, { useState } from "react";
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
// import LockOutlinedIcon from "@material-ui/";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik, FormikProvider, ErrorMessage, Field } from "formik";
import { register } from "../../service/user";
import { useHistory, Redirect } from "react-router-dom";
import Loading from "../component/Loading";

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
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const [state, setState] = useState(true);
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      email: "",
      phoneNumber: "",
      fullName: "",
    },
    onSubmit: async (values) => {
      try {
        setState(false);
        const data = await register(values);
        alert(JSON.stringify(data.data));
        history.push("/login");
      } catch (error) {
        setState(true);
        alert("trâu chậm uống nước đục , tài khoản đã được đăng ký");
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
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
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
                  Register
                </Typography>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        label="userName"
                        name="userName"
                        values={formik.values.userName}
                        onChange={formik.handleChange}
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        name="password"
                        values={formik.values.password}
                        onChange={formik.handleChange}
                        fullWidth
                        label="password"
                        type="password"
                      />
                    </Grid>

                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="email"
                      values={formik.values.email}
                      onChange={formik.handleChange}
                      label="email"
                      type="email"
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="phoneNumber"
                      values={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      label="phoneNumber"
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="fullName"
                      values={formik.values.fullName}
                      onChange={formik.handleChange}
                      label="fullName"
                      type="text"
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Register
                    </Button>
                    <Link to="/login" variant="body2">
                      {" have an account? Sign In"}
                    </Link>
                  </Grid>
                </form>
              </div>
            </Grid>
          </Grid>
        </FormikProvider>
      ) : (
        <Loading />
      )}
    </>
  );
}
