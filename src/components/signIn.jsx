import {
  Box,
  Paper,
  Typography,
  Grid,
  Avatar,
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import images from "../assests/images";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const SignIn = ({ handleChange }) => {
  const initialValues = {
    username: "",
    password: "",
    remember: true,
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Please enter valid Email Address!")
      .required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values, props) => {
    console.log(props);
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  // Styles
  const paperStyle = {
    padding: "30px 20px",
    width: 350,
    height: "75.8vh",
    margin: "0px auto",
  };
  const MarginStyle = { margin: 5 };

  return (
    <Box>
      <Paper style={paperStyle}>
        {/* Avatar, Sign In Typograpgy  */}
        <Grid align="center">
          <Avatar
            src={images.signlock}
            sx={{ width: 60, height: 60, mb: "22px" }}
          />
          <Typography
            variant="h4"
            style={MarginStyle}
            sx={{ fontWeight: "700" }}
          >
            Sign In
          </Typography>
        </Grid>
        {/* TextFields, RadioControls, CheckBox */}
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              {/* Name */}
              <Field
                as={TextField}
                style={MarginStyle}
                variant="standard"
                fullWidth
                required
                name="username"
                label="Username"
                placeholder="Enter Username"
                helperText={<ErrorMessage name="username" />}
              />
              {/* Password */}
              <Field
                as={TextField}
                style={MarginStyle}
                variant="standard"
                fullWidth
                required
                name="password"
                type="password"
                label="Password"
                placeholder="Enter Password"
                helperText={<ErrorMessage name="password" />}
              />
              {/* CheckBox */}
              <FormGroup style={MarginStyle}>
                <Field
                  as={FormControlLabel}
                  control={<Checkbox defaultChecked={false} />}
                  name="remember"
                  label="Rember Me."
                />
              </FormGroup>

              {/* Submit Button */}
              <Button
                style={MarginStyle}
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                disabled={props.isSubmitting}
              >
                {props.isSubmitting ? "Loading" : "Sign In"}
              </Button>
              {console.log(props)}
            </Form>
          )}
        </Formik>
        {/* Forgot Password */}
        <Typography variant="body2">
          <Typography component={Link} href="#" style={MarginStyle}>
            Forgot password ?
          </Typography>
        </Typography>
        {/* Sign In */}
        <Typography variant="body2" style={MarginStyle}>
          Do you have an account ?
          <Typography
            component={Link}
            href="#"
            onClick={() => handleChange("event", 1)}
          >
            Sign Up
          </Typography>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignIn;
