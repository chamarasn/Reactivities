import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
          main: "#1400cc",
          light: "skyblue"
        },
        secondary: {
          main: "#edf2ff"
        },
    },
    customStatus: {
      orange: "#945d0a9a"
    },     
});

// const theme = createMuiTheme(
//   {
//     overrides: {
//       MuiButton: {
//         root: {
//           backgroundColor: globalTheme.palette.primary.main
//         },
//         label: {
//           color: globalTheme.palette.primary.contrastText
//         }
//       }
//     }
//   },
//   globalTheme
// );
