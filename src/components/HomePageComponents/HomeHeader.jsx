// import { Box, Typography } from "@mui/material";
// import { NavLink } from "react-router-dom"; //Routes, Route, Outlet, Link
// const HomeHeader = () => {
//   return (
//     <Box>
//       {/* Header */}
//       <Box
//         variant="header"
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           width: "100%",
//           height: "150px",
//           mt: "60px",
//         }}
//       >
//         {/* TypoGraphy(Pick Topic) */}
//         <Typography
//           variant="h3"
//           sx={{
//             fontFamily: "Cabin, sans-serif",
//             fontSize: "39.999px",
//             lineHeight: "49.9987px",
//             letterSpacing: "0.3px",
//             fontWeight: "600",
//             mb: "20px",
//           }}
//         >
//           Pick a topic. Any topic.
//         </Typography>
//         <Box
//           sx={{
//             diplay: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             flexWrap: "wrap",
//             width: "600px",
//             textAlign: "center",
//           }}
//         >
//           <Typography
//             variant="p"
//             sx={{
//               fontFamily: "Poppins, Helvetica, Arial, sans-serif",
//               fontSize: "16px",
//               lineHeight: "22.5px",
//               fontWeight: "600",
//               letterSpacing: "0.3px",
//             }}
//           >
//             If you already know what you're looking for, Laracasts is divided
//             into various topics ranging from frameworks to packages to tools.
//           </Typography>
//         </Box>
//       </Box>
//       {/* Links */}
//       <Box
//         sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
//       >
//         {/* All Topics Link */}
//         <Typography
//           component={NavLink}
//           to="/all"
//           sx={{
//             width: "100px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             mx: {
//               sm: "10px",
//               md: "14px",
//             },
//             borderBottom: "6px solid transparent",
//             "&:hover": {
//               borderBottom: "6px solid #8BAAC9",
//               borderRadius: "3px",
//             },
//           }}
//           style={({ isActive }) => ({
//             color: isActive ? "white" : "#5a6372",
//             borderBottom: isActive ? "6px solid #8BAAC9" : "",
//             borderRadius: "3px",
//             transition: "0.5s ease-in",
//           })}
//         >
//           <Typography
//             sx={{
//               fontFamily: "Poppins, sans-serif",
//               fontSize: "14.01px",
//               lineHeight: "21.015px",
//               fontWeight: "500",
//               color: "#5a6372",
//               py: "10px",
//               "&:hover": {
//                 color: "white",
//               },
//             }}
//           >
//             All Topics
//           </Typography>
//         </Typography>
//         {/* Frameworks Link */}
//         <Typography
//           component={NavLink}
//           to="/frameworks"
//           sx={{
//             width: "100px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             mx: {
//               sm: "10px",
//               md: "14px",
//             },
//             borderBottom: "6px solid transparent",
//             "&:hover": {
//               borderBottom: "6px solid #8BAAC9",
//               borderRadius: "3px",
//               // bgcolor: "red",
//             },
//           }}
//           style={({ isActive }) => ({
//             color: isActive ? "white" : "#5a6372",
//             borderBottom: isActive ? "6px solid #8BAAC9" : "",
//             borderRadius: "3px",
//             transition: "0.5s ease-in",
//           })}
//         >
//           <Typography
//             sx={{
//               fontFamily: "Poppins, sans-serif",
//               fontSize: "14.01px",
//               lineHeight: "21.015px",
//               fontWeight: "500",
//               color: "#5a6372",
//               py: "10px",
//               "&:hover": {
//                 color: "white",
//               },
//             }}
//           >
//             Frameworks
//           </Typography>
//         </Typography>
//         {/* languages Link */}
//         <Typography
//           component={NavLink}
//           to="/languages"
//           sx={{
//             width: "100px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             mx: {
//               sm: "10px",
//               md: "14px",
//             },
//             borderBottom: "6px solid transparent",
//             "&:hover": {
//               borderBottom: "6px solid #8BAAC9",
//               borderRadius: "3px",
//               // bgcolor: "red",
//             },
//           }}
//           style={({ isActive }) => ({
//             color: isActive ? "white" : "#5a6372",
//             borderBottom: isActive ? "6px solid #8BAAC9" : "",
//             borderRadius: "3px",
//             transition: "0.5s ease-in",
//           })}
//         >
//           <Typography
//             sx={{
//               fontFamily: "Poppins, sans-serif",
//               fontSize: "14.01px",
//               lineHeight: "21.015px",
//               fontWeight: "500",
//               color: "#5a6372",
//               py: "10px",
//               "&:hover": {
//                 color: "white",
//               },
//             }}
//           >
//             Languages
//           </Typography>
//         </Typography>
//         {/* techniques Link */}
//         <Typography
//           component={NavLink}
//           to="/techniques"
//           sx={{
//             width: "100px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             mx: {
//               sm: "10px",
//               md: "14px",
//             },
//             borderBottom: "6px solid transparent",
//             "&:hover": {
//               borderBottom: "6px solid #8BAAC9",
//               borderRadius: "3px",
//               // bgcolor: "red",
//             },
//           }}
//           style={({ isActive }) => ({
//             color: isActive ? "white" : "#5a6372",
//             borderBottom: isActive ? "6px solid #8BAAC9" : "",
//             borderRadius: "3px",
//             transition: "0.5s ease-in",
//           })}
//         >
//           <Typography
//             sx={{
//               fontFamily: "Poppins, sans-serif",
//               fontSize: "14.01px",
//               lineHeight: "21.015px",
//               fontWeight: "500",
//               color: "#5a6372",
//               py: "10px",
//               "&:hover": {
//                 color: "white",
//               },
//             }}
//           >
//             Techniques
//           </Typography>
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default HomeHeader;
