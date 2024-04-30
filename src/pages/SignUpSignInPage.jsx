// import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
// import { useState } from "react";
// import SignIn from "../components/signIn";
// import SignUp from "../components/signUp";
// import "../App.css"
// const SignUpSignInPage = () => {
//   const [value, setValue] = useState(0);
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`full-width-tabpanel-${index}`}
//         aria-labelledby={`full-width-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
//   }
//   // Styles
//   const paperStyle = {
//     width: 350,
//     margin: "20px auto",
//     borderRadius: "20px 20px",
//     borderRight: "5px solid #8baac9",
//   };
//   return (
//     <Box>
//       <Paper style={paperStyle}>
//         <Tabs
//           centered
//           value={value}
//           indicatorColor="primary"
//           textColor="primary"
//           onChange={handleChange}
//         >
//           <Tab label="Sign In" centerRipple />
//           <Tab label="Sign Up" centerRipple />
//         </Tabs>
//         <TabPanel value={value} index={0}>
//           {<SignIn handleChange={handleChange} />}
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//           {<SignUp />}
//         </TabPanel>
//       </Paper>
//     </Box>
//   );
// };

// export default SignUpSignInPage;
