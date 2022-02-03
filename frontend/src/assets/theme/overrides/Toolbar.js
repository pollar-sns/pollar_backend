// ----------------------------------------------------------------------

export default function Toolbar(theme) {
  return {
    MuiToolbar: {
      styleOverrides: {
        backgroundColor: '#fff',
        tooltip: {
          backgroundColor: theme.palette.grey[800],
        },
        arrow: {
          color: theme.palette.grey[800],
        },
      },
    },
  };
}
