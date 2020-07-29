import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#165C6F',

        },
        secondary: {
            main: '#698F9A',
        },
        error: {
            main: red.A400,
        }
    },
    shape: {
        borderRadius: 0
    },
    overrides: { MuiButton: { root: { textTransform: "none" } } }
});

export default theme;