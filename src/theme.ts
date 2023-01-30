import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Roboto } from "@next/font/google";

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
    palette: {
        primary: {
            main: grey[50]
        },
        secondary: {
            main: grey[900]
        }
    },
    typography: {
        fontFamily: roboto.style.fontFamily
    }
});

export default theme